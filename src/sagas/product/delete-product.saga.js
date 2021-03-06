import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  deleteProductSuccess,
  deleteProductFailed,
  DELETE_PRODUCT_START,
} from "../../stores/product/product.action";
/**
 * delete product
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const deleteProductApi = (params) => {
  const id = params.id;
  delete params.id;
  const uri = `/product/delete/${id}`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doDeleteProduct(action) {
  try {
    const response = yield call(deleteProductApi, action?.payload);
    if (response?.status) {
      const { data } = response;

      yield put(deleteProductSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(deleteProductFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch delete product
 */
export default function* watchDeleteProduct() {
  yield takeLatest(DELETE_PRODUCT_START, doDeleteProduct);
}
