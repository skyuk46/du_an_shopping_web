import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  getReviewByProductIdSuccess,
  getReviewByProductIdFailed,
  GET_REVIEW_BY_PRODUCT_ID_START,
} from "../../stores/review/review.action";
/**
 * get review by product id
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const getReviewByProductIdApi = (params) => {
  const uri = `/review/product/${params}`;
  return api.get(uri);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doGetReviewByProductId(action) {
  try {
    const response = yield call(getReviewByProductIdApi, action?.payload);
    if (response?.data) {
      const { data } = response;

      yield put(getReviewByProductIdSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(getReviewByProductIdFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch get review by category
 */
export default function* watchGetReviewByProductId() {
  yield takeLatest(GET_REVIEW_BY_PRODUCT_ID_START, doGetReviewByProductId);
}
