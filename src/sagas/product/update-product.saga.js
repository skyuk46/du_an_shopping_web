import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  updateProductSuccess,
  updateProductFailed,
  UPDATE_PRODUCT_START,
} from "../../stores/product/product.action";
/**
 * update product
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const updateProductApi = (params) => {
  const uri = `/product/update/${params.id}`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doUpdateProduct(action) {
  try {
    const response = yield call(updateProductApi, action?.payload);
    if (response?.data) {
      const { data } = response;

      yield put(updateProductSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(updateProductFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch update product
 */
export default function* watchUpdateProduct() {
  yield takeLatest(UPDATE_PRODUCT_START, doUpdateProduct);
}
