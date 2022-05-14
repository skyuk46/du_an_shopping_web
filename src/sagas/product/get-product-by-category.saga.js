import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  getProductByCategorySuccess,
  getProductByCategoryFailed,
  GET_PRODUCT_BY_CATEGORY_START,
} from "../../stores/product/product.action";
/**
 * get product by category
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const getProductByCategoryApi = (params) => {
  const id = params.id;
  delete params.id
  const uri = `/product/category/${id}`;
  return api.get(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doGetProductByCategory(action) {
  try {
    const response = yield call(getProductByCategoryApi, action?.payload);
    if (response?.status) {
      const { data } = response;

      yield put(getProductByCategorySuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(getProductByCategoryFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch get product by category
 */
export default function* watchGetProductByCategory() {
  yield takeLatest(GET_PRODUCT_BY_CATEGORY_START, doGetProductByCategory);
}
