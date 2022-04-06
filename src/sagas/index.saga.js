import { all } from 'redux-saga/effects';

// auth
import watchLogin from './auth/login.saga';
import watchLogout from './auth/logout.saga';
// get cart detail
import watchGetCartDetail from './cart/get-cart-detail.saga';

export default function* rootSaga() {
  yield all([
    // auth
    watchLogin(),
    watchLogout(),
    // get cart detail
    watchGetCartDetail()
  ])
}