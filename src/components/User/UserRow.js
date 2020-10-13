import React from 'react';

import {Button} from 'react-bootstrap';

export default class UserRow extends React.Component {
  constructor() {
    super();
    this.state = {
      choosenRowIndex: -1,
    }
  }

  toggleButton = (index) => {
    this.setState({
      choosenRowIndex: index,
    });
  }

  render () {
    return (
      <tr
        key={this.props.user.id}
        onMouseEnter={() => this.toggleButton(this.props.user.id)}
        onMouseLeave={() => this.toggleButton(-1)}
      >
        <td>{this.props.user.email}</td>
        <td>{this.props.user.name}</td>
        <td>
          {(this.state.choosenRowIndex === this.props.user.id) &&
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
        {(this.state.choosenRowIndex === this.props.user.id) &&
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