import React from 'react';

import {Form} from 'react-bootstrap';

export default class WrappedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': '',
      'email': '',
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  // componentDidUpdate(prevProps, prevState, snapShot) {
  //   if (this.props.user !== prevProps.user) {
  //     this.setState({ currentUser: this.props.user });
  //   }
  // }

  render() {
      return (
        <>{
          this.props.children.map((child, index) => {
            console.log(child.props);
            return (
              <Form.Group key={index}>
                <child.type
                  { ...child.props }
                  value={this.state[this.props.name]}
                  onChange={this.handleChange}
                  className='form-control'
                  placeholder={child.props.placeholder}
                />
              </Form.Group>
            );
          })
        }</>
      );
    }
}