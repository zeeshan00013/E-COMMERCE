// authReducer.js
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT
} from './authTypes';

const initialState = {
  user: null,
  email: null,
  password: null,
  loading: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        email: action.payload.email,
        password: action.payload.password,
        error: null
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case LOGOUT:
      return {
        ...initialState // Reset the state to initial state upon logout
      };
    default:
      return state;
  }
};

export default authReducer;
