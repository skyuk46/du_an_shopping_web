import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../services/api';
import {
  updateCartSuccess,
  updateCartFailed,
  UPDATE_CART_START
} from '../../stores/cart/cart.action';
/**
 * Update cart
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const updateCartApi = (params) => {
  const uri = `/card/update`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doUpdateCart(action) {
  try {
    const response = yield call(updateCartApi, action?.payload);
    if (response?.status) {
      const { data } = response;

      yield put(updateCartSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(updateCartFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch update cart
 */
export default function* watchUpdateCart() {
  yield takeLatest(UPDATE_CART_START, doUpdateCart);
}
