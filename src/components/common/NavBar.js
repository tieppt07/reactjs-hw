import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';

export default class NavBar extends React.Component {
  render () {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">HEADER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link onClick={() => this.props.toggleForm(true)}>+Add</Nav.Link>
            <Nav.Link>{this.props.timeLoad}s</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}