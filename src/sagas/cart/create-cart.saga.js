import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../services/api';
import {
  createCartSuccess,
  createCartFailed,
  CREATE_CART_START
} from '../../stores/cart/cart.action';
/**
 * Create cart
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const createCartApi = (params) => {
  const uri = `/card/store`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doCreateCart(action) {
  try {
    const response = yield call(createCartApi, action?.payload);
    if (response?.status) {
      yield put(createCartSuccess());

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(createCartFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch create cart
 */
export default function* watchCreateCart() {
  yield takeLatest(CREATE_CART_START, doCreateCart);
}
