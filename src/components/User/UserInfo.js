import React from 'react';

import {Button} from 'react-bootstrap';

export default class UserInfo extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.user.email}</td>
        <td>{this.props.user.name}</td>
        <td>
          <Button variant="secondary" size="sm">
            Edit
          </Button>
        </td>
        <td>
          <Button variant="secondary" size="sm">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}