import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  INCREMENT_CART_COUNT
} from './productType';

const initialState = {
  product: null,
  loading: false,
  error: null,
  cartCount: 0 
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: ''
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case INCREMENT_CART_COUNT: // Handle INCREMENT_CART_COUNT action
      return {
        ...state,
        cartCount: state.cartCount + 1 // Increment cart count by 1
      };
    default:
      return state;
  }
};

export default productReducer;