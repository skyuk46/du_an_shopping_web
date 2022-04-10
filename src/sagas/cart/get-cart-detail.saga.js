import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  getCartDetailSuccess,
  getCartDetailFailed,
  GET_CART_DETAIL_START,
} from "../../stores/cart/cart.action";
/**
 * Get cart detail
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const getCartDetailApi = (params) => {
  const uri = `/card/user`;
  return api.get(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doGetCartDetail(action) {
  try {
    const response = yield call(getCartDetailApi, action?.payload);
    if (response?.data) {
      const { data } = response;

      yield put(getCartDetailSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(getCartDetailFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch get cart detail
 */
export default function* watchGetCartDetail() {
  yield takeLatest(GET_CART_DETAIL_START, doGetCartDetail);
}
