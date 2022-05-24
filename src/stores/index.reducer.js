import { combineReducers } from 'redux';
import auth from './auth/auth.reducer';
import cart from './cart/cart.reducer';
import category from './category/category.reducer';
import product from './product/product.reducer';
import order from './order/order.reducer'
import review from './review/review.reducer';
import user from './user/user.reducer';

const rootReducer = combineReducers({
  auth,
  cart,
  category,
  product,
  order,
  review,
  user
});

export default rootReducer;