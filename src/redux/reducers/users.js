import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../actions/users';

const initialState = {
  isFetching: false,
  users: [],
  error: null,
};

const reducer = (state = initialState, action) => {
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
