import React from 'react';

import {Col, Table, Button} from 'react-bootstrap';

export default class UserList extends React.Component {
  handleEditUser = (id) => {
    this.props.editUser(id);
    this.props.toggleForm(true);
  }

  render () {
    return (
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
            this.props.users.map((user) => (
              // <UserInfo key={user.id} user={user} modifyUser={this.modifyUser} />
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>
                  <Button variant="secondary" size="sm" onClick={() => this.handleEditUser(user.id)}>
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
    );
  }
}