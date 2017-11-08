// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from './UserList';
import Notification from './Notification';
import SearchBar from './SearchBar';
import { fetchUsers, setUsersFilter } from '../redux/actions/users';
import type { UserListProps } from '../redux/types/users';

class SearchableUserList extends Component<UserListProps> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
  }

  render() {
    const { dispatch, filter, isFetching, users, error } = this.props;
    const visibleUsers = users.filter(
      user => (filter ? user.login.includes(filter) : true),
    );
    return (
      <div>
        <h1>{'User list'}</h1>
        <SearchBar
          search={searchTerm => dispatch(setUsersFilter(searchTerm))}
        />
        <Notification isFetching={isFetching} error={error} />
        <UserList users={visibleUsers} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.users,
  };
};

export default connect(mapStateToProps)(SearchableUserList);
