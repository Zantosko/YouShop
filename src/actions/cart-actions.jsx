import { ADD_TO_CART } from '../action-types/cart-action-types';

export const addItemToCart = (dispatch, item) => {
  return dispatch({ type: ADD_TO_CART, payload: item })
}