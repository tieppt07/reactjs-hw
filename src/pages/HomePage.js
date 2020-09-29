import React from 'react';

import {Container, Row, Col, Table, Form, Button, Nav} from 'react-bootstrap';

// import UserInfo from '../components/User/UserInfo';

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      currentUser: {
        'name': '',
        'email': '',
        'id': ''
      },
    }
  }

  handleChange = (event) => {
    const {currentUser} = this.state;

    this.setState({
      currentUser: {
        ...currentUser,
        [event.target.name]: event.target.value,
      }
    });
  }

  saveUser = (id) => {
    const {users, currentUser} = this.state;

    if (id && id != null) {
      const choosenUserIndex = users.findIndex(user => user.id === id);
      users[choosenUserIndex].name = currentUser.name;
      users[choosenUserIndex].email = currentUser.email;
      this.setState({users: users});
    } else {
      const id = Date.now();

      this.setState({
        users: users.concat({...currentUser, id})
      })
    }
  }

  editUser = (id) => {
    const {users} = this.state;

    this.setState({
      currentUser: users.find(user => user.id === id)
    })
  }

  render () {
    return (
      <Container>
        <Nav>Header</Nav>
        <Row>
          <Col>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>{
                this.state.users.map((user) => (
                  // <UserInfo key={user.id} user={user} modifyUser={this.modifyUser} />
                  <tr key={user.id}>
                    <td>{user.email}</td>
                    <td>{user.name}</td>
                    <td>
                      <Button variant="secondary" size="sm" onClick={() => this.editUser(user.id)}>
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button variant="secondary" size="sm">
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              }</tbody>
            </Table>
          </Col>

          <Col>
            <Form>
              <Form.Control type="hidden" name="id" onChange={this.handleChange} value={this.state.currentUser.id} />
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name="email" onChange={this.handleChange} value={this.state.currentUser.email} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={this.handleChange} value={this.state.currentUser.name}  />
              </Form.Group>

              <Button variant="secondary">
                Cancel
              </Button>
              <Button variant="primary" onClick={() => this.saveUser(this.state.currentUser.id)}>
                Save
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}