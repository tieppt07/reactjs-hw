import React from 'react';

export default class WrappedInput extends React.Component {
  constructor() {
    super();
    this.state = { currentValues: {}, errors: {} }
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.currentUser !== prevProps.currentUser) {
      this.setState({ currentValues: this.newCurrentValues(this.props.currentUser) });
    }
  }

  validate = (field) => {
    const errorMessage =
      this.props.validate
        ? this.props.validate(field, this.state.currentValues[field])
        : this.state.currentValues[field] ? null : field + ' is blank!'

    this.setState({ errors: {
      ...this.state.errors,
      [field]: errorMessage
    }})
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ currentValues: {
      ...this.state.currentValues,
      [name]: value
    } }, () => this.validate(name))
  }

  onSubmit = e => {
    this.props.clickSaveUser(this.state.currentValues);
  }

  newCurrentValues(user) {
    return Object.assign(
      this.state.currentValues, {id: user.id, name: user.name, email: user.email}
    );
  }

  render() {
    return this.props.children({
      currentValues: this.state.currentValues,
      errors: this.state.errors,
      onChange: this.onChange,
      onSubmit: this.onSubmit,
    })
  }
}