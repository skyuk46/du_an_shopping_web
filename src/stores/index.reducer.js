import { combineReducers } from 'redux';
import auth from './auth/auth.reducer';
import cart from './cart/cart.reducer';
import category from './category/category.reducer';
import product from './product/product.reducer';

const rootReducer = combineReducers({
  auth,
  cart,
  category,
  product
});

export default rootReducer;