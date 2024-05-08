// actions/cartActions.js
export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
  // reducers/cartReducer.js
  const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  