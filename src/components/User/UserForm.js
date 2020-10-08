import React from 'react';

// import {Form} from 'react-bootstrap';
import InputComponent from '../common/InputComponent';

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

  clickSaveUser = () => {
    this.props.saveUser(this.state.currentUser);
    this.props.toggleForm(false);
  }

  // render () {
  //   return (
  //     <Col>
  //       <Form>
  //         <Form.Control type="hidden" name="id" value={this.props.user.id} />
  //         <Form.Group>
  //           <Form.Control type="email" placeholder="Enter Email" name="email" onChange={this.handleChange} value={this.state.currentUser.email} />
  //         </Form.Group>
  //         <Form.Group>
  //           <Form.Control type="text" placeholder="Enter Name" name="name" onChange={this.handleChange} value={this.state.currentUser.name}  />
  //         </Form.Group>
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
  render() {
    return (
      <InputComponent>
        <input
          name='email'
          value={this.state.currentUser.email}
        />
        <input
          name='name'
          value={this.state.currentUser.name}
        />
      </InputComponent>
    );
  }
}
