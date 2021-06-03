import { ADD_TO_CART } from '../action-types/cart-action-types';

const intitalState = [];

const cart = (state = intitalState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      const cartList = [...state];
      cartList.push(action.payload);
      return cartList;

    default:
      return state;
  }
}

export default cart;