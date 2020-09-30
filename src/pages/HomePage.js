import React from 'react';

import {Container, Row, Nav} from 'react-bootstrap';

import UserList from '../components/User/UserList';
import UserForm from '../components/User/UserForm';

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          'name': 'dfsd',
          'email': 'fgfd',
          'id': '32432'
        },
        {
          'name': 'dfgfdghfgh',
          'email': 'ghgfhhtrt',
          'id': '454'
        }
      ],
      currentUser: {
        'name': '',
        'email': '',
        'id': ''
      },
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

  editUser = (id) => {
    const {users} = this.state;

    // this.setState({
    //   currentUser: users.find(user => user.id === id)
    // });
  }

  render () {
    return (
      <Container>
        <Nav>Header</Nav>
        <Row>
          <UserList users={this.state.users} editUser={this.editUser} />
          <UserForm user={this.state.currentUser} saveUser={this.saveUser} />
        </Row>
      </Container>
    );
  }
}