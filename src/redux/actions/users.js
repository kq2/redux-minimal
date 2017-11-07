// @flow

import axios from 'axios';
import type { Dispatch } from 'redux';

import type { User } from '../types/users';
import type { Error } from '../types/common';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users: Array<User>) => {
  return {
    type: FETCH_USERS_SUCCESS,
    users,
  };
};

export const fetchUsersFailure = (error: Error) => {
  return {
    type: FETCH_USERS_FAILURE,
    error,
  };
};

export const fetchUsers = () => async (dispatch: Dispatch<*>) => {
  dispatch(fetchUsersRequest());
  try {
    const res = await axios.get('https://api.github.com/users');
    dispatch(fetchUsersSuccess(res.data));
  } catch (error) {
    dispatch(fetchUsersFailure(error));
  }
};
