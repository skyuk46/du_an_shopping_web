import { combineReducers } from 'redux';
import auth from './auth/auth.reducer';
import cart from './cart/cart.reducer';

const rootReducer = combineReducers({
  auth,
  cart
});

export default rootReducer;