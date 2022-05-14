import { all } from 'redux-saga/effects';

// auth
import watchLogin from './auth/login.saga';
import watchLogout from './auth/logout.saga';
import watchRegister from './auth/register.saga';
// cart
import watchGetCartDetail from './cart/get-cart-detail.saga';
import watchCreateCart from './cart/create-cart.saga';
import watchUpdateCart from './cart/update-cart.saga';
import watchDeleteCart from './cart/delete-cart.saga';
import watchDeleteAllCarts from './cart/delete-all-carts.saga';
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
import watchSearchProductsByName from './product/search-products-by-name.saga';
//order
import watchSearchOrder from './order/search-order.saga';
import watchCreateOrder from './order/create-order.saga';
import watchUpdateOrder from './order/update-order.saga';
import watchDeleteOrder from './order/delete-order.saga';
// review
import watchCreateReview from './review/create-review.saga';
import watchGetReviewByProductId from './review/get-review-by-product.saga';
import watchSearchReview from './review/search-review.saga';
import watchDeleteReview from './review/delete-review.saga';

export default function* rootSaga() {
  yield all([
    // auth
    watchLogin(),
    watchLogout(),
    watchRegister(),
    // cart
    watchGetCartDetail(),
    watchCreateCart(),
    watchUpdateCart(),
    watchDeleteCart(),
    watchDeleteAllCarts(),
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
    watchSearchProductsByName(),
    // order
    watchSearchOrder(),
    watchCreateOrder(),
    watchUpdateOrder(),
    watchDeleteOrder(),
    // review
    watchCreateReview(),
    watchGetReviewByProductId(),
    watchSearchReview(),
    watchDeleteReview(),
  ])
}