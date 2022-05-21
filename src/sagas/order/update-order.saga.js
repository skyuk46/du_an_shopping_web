import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  updateOrderSuccess,
  updateOrderFailed,
  UPDATE_ORDER_START,
} from "../../stores/order/order.action";
/**
 * update order
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const updateOrderApi = (params) => {
  const uri = `/order/update/${params.id}`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doUpdateOrder(action) {
  try {
    const response = yield call(updateOrderApi, action?.payload);
    if (response?.status) {
      yield put(updateOrderSuccess());

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(updateOrderFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch update order
 */
export default function* watchUpdateOrder() {
  yield takeLatest(UPDATE_ORDER_START, doUpdateOrder);
}
