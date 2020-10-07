import React from 'react';

import {Container, Row} from 'react-bootstrap';

import UserList from '../components/User/UserList';
import UserForm from '../components/User/UserForm';
import NavBar from '../components/common/NavBar';
import axios from 'axios';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentUser: {
        'name': '',
        'email': '',
        'id': ''
      },
      showForm: false,
      timeLoad: 0,
    }
  }

  saveUser = (userModel) => {
    const {users} = this.state;

    if (userModel.id && userModel.id != null) {
      const choosenUserIndex = users.findIndex(user => user.id === userModel.id);
      users[choosenUserIndex].name = userModel.name;
      users[choosenUserIndex].email = userModel.email;
      this.setState({users: users});
    } else {
      const id = Date.now();
      this.setState({
        users: users.concat({...userModel, id})
      });
    }
  }

  deleteUser = (id) => {
    const {users} = this.state;
    const choosenUserIndex = users.findIndex(user => user.id === id);
    users.splice(choosenUserIndex, 1);

    this.setState({users: users});
    // localStorage.setItem('users', users);
  }

  editUser = (id) => {
    const {users} = this.state;

    this.setState({
      currentUser: users.find(user => user.id === id)
    });
  }

  toggleForm = (status) => {
    this.setState({
      showForm: status
    })
  }

  fetchUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        this.setState({users: res.data});
      });
  }

  componentDidMount() {
    this.fetchUsers();
    this.setState({
      timeLoad: (Date.now() - this.props.timeStart) / 1000,
    });
  }

  componentDidUpdate() {
    // localStorage.setItem('users', JSON.stringify(this.state.users));
  }

  render () {
    return (
      <Container style={{marginTop: '50px'}}>
        <NavBar
          timeLoad={this.state.timeLoad}
          toggleForm={this.toggleForm}
        ></NavBar>

        <Row style={{marginTop: '50px'}}>
          <UserList
            users={this.state.users}
            editUser={this.editUser}
            toggleForm={this.toggleForm}
            deleteUser={this.deleteUser}
          />

          {this.state.showForm &&
            <UserForm
              user={this.state.currentUser}
              saveUser={this.saveUser}
              toggleForm={this.toggleForm}
            />
          }
        </Row>
      </Container>
    );
  }
}