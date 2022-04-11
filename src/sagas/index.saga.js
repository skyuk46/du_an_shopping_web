import { all } from 'redux-saga/effects';

// auth
import watchLogin from './auth/login.saga';
import watchLogout from './auth/logout.saga';
// cart
import watchGetCartDetail from './cart/get-cart-detail.saga';
import watchCreateCart from './cart/create-cart.saga';
import watchUpdateCart from './cart/update-cart.saga';
// category
import watchSearchCategory from './category/search-category.saga';
// product
import watchSearchProduct from './product/search-product.saga';
import watchGetProductByCategory from './product/get-product-by-category.saga';
import watchGetProductDetail from './product/get-product-detail.saga';

export default function* rootSaga() {
  yield all([
    // auth
    watchLogin(),
    watchLogout(),
    // cart
    watchGetCartDetail(),
    watchCreateCart(),
    watchUpdateCart(),
    //category 
    watchSearchCategory(),
    // product
    watchSearchProduct(),
    watchGetProductByCategory(),
    watchGetProductDetail(),
  ])
}