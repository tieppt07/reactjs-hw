import React from 'react';

import {Col, Form, Button} from 'react-bootstrap';

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.user,
    }
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.user !== prevProps.user) {
      this.setState({ currentUser: this.props.user });
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

  render () {
    return (
      <Col>
        <Form>
          <Form.Control type="hidden" name="id" value={this.props.user.id} />
          <Form.Group>
            <Form.Control type="email" placeholder="Enter Email" name="email" onChange={this.handleChange} value={this.state.currentUser.email} />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Enter Name" name="name" onChange={this.handleChange} value={this.state.currentUser.name}  />
          </Form.Group>
          <Button variant="secondary" onClick={() => this.props.toggleForm(false)}>
            Cancel
          </Button>
          {' '}
          <Button variant="primary" onClick={() => this.props.saveUser(this.state.currentUser)}>
            Save
          </Button>
        </Form>
      </Col>
    );
  }
}
