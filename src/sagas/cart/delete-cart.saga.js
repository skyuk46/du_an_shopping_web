import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../services/api';
import {
  deleteCartSuccess,
  deleteCartFailed,
  DELETE_CART_START
} from '../../stores/cart/cart.action';
/**
 * Delete cart
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const deleteCartApi = (params) => {
  const id = params.id;
  delete params.id
  const uri = `/card/delete/${id}`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doDeleteCart(action) {
  try {
    const response = yield call(deleteCartApi, action?.payload);
    if (response?.status) {
      yield put(deleteCartSuccess());

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(deleteCartFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch delete cart
 */
export default function* watchDeleteCart() {
  yield takeLatest(DELETE_CART_START, doDeleteCart);
}
