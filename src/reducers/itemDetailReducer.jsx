import { GET_ITEM_DETAILS } from '../action-types/itemDetail-action-types';

const initialState = [];

const itemDetails = (state = initialState, action) => {
  switch(action.type) {
    case GET_ITEM_DETAILS:


    default:
      return state;
  }

}