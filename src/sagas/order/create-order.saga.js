import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  createOrderSuccess,
  createOrderFailed,
  CREATE_ORDER_START,
} from "../../stores/order/order.action";
/**
 * create order
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const createOrderApi = (params) => {
  const uri = `/order/store`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doCreateOrder(action) {
  try {
    const response = yield call(createOrderApi, action?.payload);
    if (response?.data) {
      const { data } = response;

      yield put(createOrderSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(createOrderFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch create order
 */
export default function* watchCreateOrder() {
  yield takeLatest(CREATE_ORDER_START, doCreateOrder);
}
