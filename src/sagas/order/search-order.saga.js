import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../services/api';
import { searchOrderSuccess, searchOrderFailed, SEARCH_ORDER_START } from '../../stores/order/order.action';
/**
 * search order
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const searchOrderApi = (params) => {
  const uri = `/orders`;
  return api.get(uri);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doSearchOrder(action) {
  try {
    const response = yield call(searchOrderApi, action?.payload);
    if (response?.data) {
      const { data } = response;

      yield put(searchOrderSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(searchOrderFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch search order
 */
export default function* watchSearchOrder() {
  yield takeLatest(SEARCH_ORDER_START, doSearchOrder);
}
