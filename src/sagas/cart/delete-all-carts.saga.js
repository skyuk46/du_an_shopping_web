import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../services/api';
import {
  deleteAllCartsSuccess,
  deleteAllCartsFailed,
  DELETE_ALL_CARTS_START
} from '../../stores/cart/cart.action';
/**
 * Delete all cart
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const deleteAllCartsApi = (params) => {
  const uri = `/card/delete/user`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doDeleteAllCarts(action) {
  try {
    const response = yield call(deleteAllCartsApi, action?.payload);
    if (response?.status) {
      const { data } = response;

      yield put(deleteAllCartsSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(deleteAllCartsFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch delete all cart
 */
export default function* watchDeleteAllCarts() {
  yield takeLatest(DELETE_ALL_CARTS_START, doDeleteAllCarts);
}
