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
import watchCreateCategory from './category/create-category.saga';
import watchUpdateCategory from './category/update-category.saga';
import watchDeleteCategory from './category/delete-category.saga';
// product
import watchSearchProduct from './product/search-product.saga';
import watchGetProductByCategory from './product/get-product-by-category.saga';
import watchGetProductDetail from './product/get-product-detail.saga';
import watchCreateProduct from './product/create-product.saga';
import watchUpdateProduct from './product/update-product.saga';
import watchDeleteProduct from './product/delete-product.saga';

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
    watchCreateCategory(),
    watchUpdateCategory(),
    watchDeleteCategory(),
    // product
    watchSearchProduct(),
    watchGetProductByCategory(),
    watchGetProductDetail(),
    watchCreateProduct(),
    watchUpdateProduct(),
    watchDeleteProduct(),
  ])
}