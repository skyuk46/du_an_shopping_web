import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  deleteOrderSuccess,
  deleteOrderFailed,
  DELETE_ORDER_START,
} from "../../stores/order/order.action";
/**
 * delete order
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const deleteOrderApi = (params) => {
  const uri = `/order/delete/${params.id}`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doDeleteOrder(action) {
  try {
    const response = yield call(deleteOrderApi, action?.payload);
    if (response?.status) {
      const { data } = response;

      yield put(deleteOrderSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(deleteOrderFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch delete order
 */
export default function* watchDeleteOrder() {
  yield takeLatest(DELETE_ORDER_START, doDeleteOrder);
}
