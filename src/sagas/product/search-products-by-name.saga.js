import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  searchProductsByNameSuccess,
  searchProductsByNameFailed,
  SEARCH_PRODUCT_BY_NAME_START,
} from "../../stores/product/product.action";
/**
 * get product by category
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const searchProductsByNameApi = (params) => {
  const uri = `/products`;
  return api.get(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doSearchProductsByName(action) {
  try {
    const response = yield call(searchProductsByNameApi, action?.payload);
    if (response?.data) {
      const { data } = response;

      yield put(searchProductsByNameSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(searchProductsByNameFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch get product by category
 */
export default function* watchSearchProductsByName() {
  yield takeLatest(SEARCH_PRODUCT_BY_NAME_START, doSearchProductsByName);
}
