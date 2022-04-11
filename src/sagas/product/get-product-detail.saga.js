import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../services/api';
import { getProductDetailSuccess, getProductDetailFailed, GET_PRODUCT_DETAIL_START } from '../../stores/product/product.action';
/**
 * get product by category
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const getProductDetailApi = (params) => {
  const uri = `/product/${params}`;
  return api.get(uri);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doGetProductDetail(action) {
  try {
    const response = yield call(getProductDetailApi, action?.payload);
    if (response?.data) {
      const { data } = response;

      yield put(getProductDetailSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(getProductDetailFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch get product by category
 */
export default function* watchGetProductDetail() {
  yield takeLatest(GET_PRODUCT_DETAIL_START, doGetProductDetail);
}
