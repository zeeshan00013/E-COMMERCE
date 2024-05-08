// authActions.js
import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_FAILURE,
  LOGOUT
} from './authTypes';
import { saveState } from '../LocalStorgae';

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8080/login', { email, password });
      // Dispatch action upon successful login
      dispatch({ type: LOGIN_SUCCESS, payload: { user: response.data.user, email, password } });
      saveState({auth:{token: response.data.token}})

      return response.data; // Return response for potential further use
    } catch (error) {
      // Dispatch action upon login failure
      dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message });
      throw error; // Throw error for potential error handling in components
    }
  };
};

export const signup = (name, email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8080/register', { name, email, password });
      // Dispatch action upon successful registration
   
      return response.data; // Return response for potential further use
    } catch (error) {
      // Dispatch action upon registration failure
      dispatch({ type: SIGNUP_FAILURE, payload: error.response.data.message });
    
      throw error; // Throw error for potential error handling in components
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      // Additional logout logic such as clearing local storage can go here
      // For simplicity, let's just dispatch the logout action
      dispatch({ type: LOGOUT });
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle logout error if needed
    }
  };
};