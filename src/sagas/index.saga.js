import { all } from 'redux-saga/effects';

// auth
import watchLogin from './auth/login.saga';
import watchLogout from './auth/logout.saga';

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchLogout()
  ])
}