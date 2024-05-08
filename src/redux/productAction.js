import axios from 'axios';
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  INCREMENT_CART_COUNT
} from './productType.js';

export const fetchProduct = (productId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCT_REQUEST });

    try {
      const response = await axios.get(`http://localhost:8080/products/${productId}`);
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCT_FAILURE,
        payload: error.message
      });
    }
  };
};

export const incrementCartCount = () => {
  return {
    type: INCREMENT_CART_COUNT
  };
};