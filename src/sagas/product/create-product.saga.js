import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  createProductSuccess,
  createProductFailed,
  CREATE_PRODUCT_START,
} from "../../stores/product/product.action";
/**
 * create product
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const createProductApi = (params) => {
  const uri = `/product/store`;
  return api.postMultiplePart(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doCreateProduct(action) {
  try {
    const response = yield call(createProductApi, action?.payload);
    if (response?.data) {
      const { data } = response;

      yield put(createProductSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(createProductFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch create product
 */
export default function* watchCreateProduct() {
  yield takeLatest(CREATE_PRODUCT_START, doCreateProduct);
}
