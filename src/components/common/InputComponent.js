import React from 'react';

export default class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
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

  render() {
      return (
        <>{
          this.props.children.map((child, index) => {
              console.log(child, this.props);
              return (
                <child.type
                  { ...child.props }
                  key={index}
                  value={this.state[this.props.name]}
                  onChange={this.handleChange}
                />
              );
            }
          )
        }</>
      );
    }
}