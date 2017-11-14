// @flow

import React from 'react';

import type { User } from '../redux/types/users';

type Props = {
  users: ?Array<User>,
  filter: string,
};

const filterUsers = (users, filter) => {
  if (!users) {
    return [];
  }
  if (!filter) {
    return users;
  }
  const regex = new RegExp(filter, 'ig');

  return users.filter(user => regex.test(user.login));
};

const UserList = ({ users, filter }: Props) => {
  const visibleUsers = filterUsers(users, filter);

  return (
    <ul>{visibleUsers.map(user => <li key={user.id}>{user.login}</li>)}</ul>
  );
};

export default UserList;
