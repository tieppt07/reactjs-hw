import React from 'react';

import {Col, Button, Form} from 'react-bootstrap';
// import SimpleReactValidator from 'simple-react-validator';

import WrappedInput from '../common/WrappedInput';

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

  clickSaveUser = (user) => {
    user.id = this.state.currentUser.id;
    this.props.saveUser(user);
    this.props.toggleForm(false);
  }

  render() {
    return (
      <Col>
        <Form>
          <WrappedInput 
            currentUser={this.state.currentUser}
            clickSaveUser={this.clickSaveUser}
          >
            {({ currentValues, errors, onChange, onSubmit }) => (
              <>
                <input type="hidden" name="id" value={this.props.user.id} />
                <Form.Group>
                  <Form.Control
                    name='email'
                    onChange={onChange}
                    type='email'
                    value={currentValues.email}
                  />
                  <div className='error-messages'>{errors.email}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    name='name'
                    onChange={onChange}
                    type='text'
                    value={currentValues.name}
                  />
                  <div className='error-messages'>{errors.name}</div>
                </Form.Group>
    
                <Button variant="secondary" onClick={() => this.props.toggleForm(false)}>
                  Cancel
                </Button>
                {' '}
                <Button 
                  variant="primary" 
                  onClick={onSubmit}
                  disabled={Object.values(errors).filter(Boolean).length > 0}
                >
                  Save
                </Button>
              </>
            )}
          </WrappedInput>
        </Form>
      </Col>
    );
  }
}
