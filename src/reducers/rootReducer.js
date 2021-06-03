import { combineReducers } from "redux";
import products from './productReducer';
// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({
  products,
});

export default rootReducer;
