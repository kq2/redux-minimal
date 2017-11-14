// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import type { Dispatch } from 'redux';

import UserList from './UserList';
import Notification from './Notification';
import SearchBar from './SearchBar';
import { fetchUsers } from '../redux/actions/users';
import type { UserListState } from '../redux/types/users';

type Props = {
  dispatch: ((Dispatch<*>) => Promise<*>) => void,
} & UserListState;

type State = {
  filter: string,
};

const WAIT = 200;

class UserListPage extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearch = debounce(this.handleSearch, WAIT);
  }

  componentDidMount() {
    const { dispatch, isFetching, users } = this.props;

    if (!isFetching && !users) {
      dispatch(fetchUsers());
    }
  }

  // flow
  handleSearch: string => void;

  handleSearch(query: string) {
    this.setState({
      filter: query,
    });
  }

  render() {
    const { isFetching, users, error } = this.props;
    const { filter } = this.state;

    return (
      <div>
        <h1>{'User List'}</h1>
        <SearchBar onSearch={this.handleSearch} />
        <Notification isFetching={isFetching} error={error} />
        <UserList users={users} filter={filter} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.users,
  };
};

export default connect(mapStateToProps)(UserListPage);
