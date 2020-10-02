import React from 'react';

import {Container, Row, Nav, Col, Button} from 'react-bootstrap';

import UserList from '../components/User/UserList';
import UserForm from '../components/User/UserForm';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
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
      showForm: false,
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

    this.setState({
      currentUser: users.find(user => user.id === id)
    });
  }

  toggleForm = (status) => {
    this.setState({
      showForm: status
    })
  }

  render () {
    return (
      <Container style={{marginTop: '50px'}}>
        <Nav>Header</Nav>
        <Row>
          <Col>
            <Button variant="secondary" onClick={() => this.toggleForm(true)}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <UserList users={this.state.users} editUser={this.editUser} toggleForm={this.toggleForm} />

          {this.state.showForm && 
            <UserForm user={this.state.currentUser} saveUser={this.saveUser} toggleForm={this.toggleForm} />
          }
        </Row>
      </Container>
    );
  }
}