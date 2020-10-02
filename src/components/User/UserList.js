import React from 'react';

import {Col, Table} from 'react-bootstrap';

import UserRow from '../User/UserRow';

export default class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowButton: false,
    }
  }

  handleEditUser = (id) => {
    this.props.editUser(id);
    this.props.toggleForm(true);
  }

  render () {
    return (
      <Col>
        <Table striped bordered hover>
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
              <UserRow
                key={user.id}
                user={user}
                handleEditUser={this.handleEditUser}
                deleteUser={this.props.deleteUser}
              />
            ))
          }</tbody>
        </Table>
      </Col>
    );
  }
}