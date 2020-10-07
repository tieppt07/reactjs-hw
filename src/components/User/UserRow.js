import React from 'react';

import {Button} from 'react-bootstrap';

export default class UserRow extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowButton: false,
    }
  }

  toggleButton = (status) => {
    this.setState({
      isShowButton: status,
    });
  }

  render () {
    return (
      <tr
        key={this.props.user.id}
        onMouseEnter={() => this.toggleButton(true)}
        onMouseLeave={() => this.toggleButton(false)}
      >
        <td>{this.props.user.email}</td>
        <td>{this.props.user.name}</td>
        <td>
          {this.state.isShowButton &&
            <Button
              variant="secondary"
              size="sm"
              onClick={() => this.props.handleEditUser(this.props.user.id)}
            >
              Edit
            </Button>
          }
        </td>
        <td>
          {this.state.isShowButton &&
            <Button
              variant="secondary"
              size="sm"
              onClick={() => this.props.deleteUser(this.props.user.id)}
            >
              Delete
            </Button>
          }
        </td>
      </tr>
    );
  }
}