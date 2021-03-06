// @flow

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../actions/users';
import type { UserListState, UserListAction } from '../types/users';

const initialState = {
  isFetching: false,
  users: null,
  error: null,
};

const reducer = (
  state: UserListState = initialState,
  action: UserListAction,
) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.users,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
