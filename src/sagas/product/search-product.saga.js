import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../services/api';
import { searchProductSuccess, searchProductFailed, SEARCH_PRODUCT_START } from '../../stores/product/product.action';
/**
 * search product
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const searchProductApi = (params) => {
  const uri = `/products`;
  return api.get(uri);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doSearchProduct(action) {
  try {
    const response = yield call(searchProductApi, action?.payload);
    if (response?.data) {
      const { data } = response;

      yield put(searchProductSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(searchProductFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch search product
 */
export default function* watchSearchProduct() {
  yield takeLatest(SEARCH_PRODUCT_START, doSearchProduct);
}
