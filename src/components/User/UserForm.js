import React from 'react';

import {Col, Button, Form} from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';

import WrappedInput from '../common/WrappedInput';

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.user,
    }
    this.validator = new SimpleReactValidator();
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
      },
    });
  }

  clickSaveUser = () => {
    if (this.validator.allValid()) {
      this.props.saveUser(this.state.currentUser);
      this.props.toggleForm(false);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  render () {
    return (
      <Col>
        <Form>
          <Form.Control type="hidden" name="id" value={this.props.user.id} />
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={this.handleChange}
              value={this.state.currentUser.email}
            />
            {this.validator.message('email', this.state.currentUser.email, 'required|email')}
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={this.handleChange}
              value={this.state.currentUser.name}
            />
            {this.validator.message('name', this.state.currentUser.name, 'required')}
          </Form.Group>

          <Button variant="secondary" onClick={() => this.props.toggleForm(false)}>
            Cancel
          </Button>
          {' '}
          <Button variant="primary" onClick={this.clickSaveUser} disabled={this.state.isDisabled}>
            Save
          </Button>
        </Form>
      </Col>
    );
  }

  // render() {
  //   return (
  //     <Col>
  //       <Form>
  //         <input type="hidden" name="id" value={this.props.user.id} />
  //         <WrappedInput>
  //           <input
  //             name='email'
  //             value={this.state.currentUser.email}
  //             placeholder='Enter Email'
  //           />
  //           <input
  //             name='name'
  //             value={this.state.currentUser.name}
  //             placeholder='Enter Name'
  //           />
  //         </WrappedInput>

  //         <Button variant="secondary" onClick={() => this.props.toggleForm(false)}>
  //           Cancel
  //         </Button>
  //         {' '}
  //         <Button variant="primary" onClick={this.clickSaveUser}>
  //           Save
  //         </Button>
  //       </Form>
  //     </Col>
  //   );
  // }
}
