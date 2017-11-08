// @flow

import React from 'react';

import type { User } from '../redux/types/users';

const UserList = ({ users }: { users: Array<User> }) => (
  <ul>{users.map(user => <li key={user.id}>{user.login}</li>)}</ul>
);

export default UserList;
