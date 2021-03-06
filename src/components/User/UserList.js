import React from 'react';

import {Col, Table} from 'react-bootstrap';
import Pagination from "react-js-pagination";

import UserRow from '../User/UserRow';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowButton: false,
      perPage: 3,
      users: this.props.users,
      activePage: 1,
    }
  }

  handleEditUser = (id) => {
    this.props.editUser(id);
    this.props.toggleForm(true);
  }

  handlePageChange(pageNumber) {
    const maxPage = Math.ceil(this.props.users.length / this.state.perPage);
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > maxPage) pageNumber = maxPage;
    this.setState({
      activePage: pageNumber,
      users: this.props.users.slice(pageNumber * this.state.perPage - this.state.perPage, pageNumber * this.state.perPage)
    });
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.users !== prevProps.users) {
      this.setState({
        users: this.props.users.slice(this.state.activePage * this.state.perPage - this.state.perPage, this.state.activePage * this.state.perPage)
      });
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  handleKeyDown = (e) => {
    console.log(e?.key);
    let activePage = this.state.activePage;
    switch (e?.key) {
        case 'PageUp':
            this.handlePageChange(++activePage)
            break;
        case 'PageDown':
            this.handlePageChange(--activePage)
            break;

        default:
            break;
    }
  }

  render () {
    return (
      <Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{
            this.state.users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                handleEditUser={this.handleEditUser}
                deleteUser={this.props.deleteUser}
              />
            ))
          }</tbody>
        </Table>

        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.perPage}
          totalItemsCount={this.props.users.length}
          pageRangeDisplayed={this.props.users.length / this.props.perPage + 1}
          onChange={this.handlePageChange.bind(this)}
          itemClass="page-item"
          linkClass="page-link"
        />
      </Col>
    );
  }
}