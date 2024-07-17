import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from "../redux/Cart-System"

const rootReducer = combineReducers({
  cart:cartReducer
});

export default rootReducer;
