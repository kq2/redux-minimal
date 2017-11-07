// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchUsers} from '../redux/actions/users'
import type {UserListProps} from '../redux/types/users'

class UserList extends Component<UserListProps> {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    const {isFetching, users, error} = this.props;

    return (
      <div>
        <h1>{'User list'}</h1>
        {isFetching && <p>Fetching...</p>}
        {error && <p>{error.message}</p>}
        <ul>
          {users.map((user) => <li key={user.id}>{user.login}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.users,
  };
};

export default connect(mapStateToProps)(UserList);