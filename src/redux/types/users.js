// @flow

import type { Dispatch } from 'redux';

import type { Error } from './common';

export type User = {
  id: string,
  login: string,
};

export type UserListState = {
  isFetching: boolean,
  filter: ?string,
  users: ?Array<User>,
  error: ?Error,
};

export type UserListProps = {
  dispatch: Dispatch<*>,
} & UserListState;

export type SetUsersFilter = {
  type: 'SET_USERS_FILTER',
  filter: string,
};

export type FetchUsersRequest = {
  type: 'FETCH_USERS_REQUEST',
};

export type FetchUsersSuccess = {
  type: 'FETCH_USERS_SUCCESS',
  users: Array<User>,
};

export type FetchUsersFailure = {
  type: 'FETCH_USERS_FAILURE',
  error: Error,
};

export type UserListAction =
  | SetUsersFilter
  | FetchUsersRequest
  | FetchUsersSuccess
  | FetchUsersFailure;
