// reducers.js
import { combineReducers } from 'redux';
import productReducer from './productReudcer';
import authReducer from './Redux.Auth/authReducer'


const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer

});

export default rootReducer;