import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  searchReviewSuccess,
  searchReviewFailed,
  SEARCH_REVIEW_START,
} from "../../stores/review/review.action";
/**
 * search review
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const searchReviewApi = (params) => {
  const uri = `/reviews`;
  return api.get(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doSearchReview(action) {
  try {
    const response = yield call(searchReviewApi, action?.payload);
    if (response?.data) {
      const { data } = response;

      yield put(searchReviewSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(searchReviewFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch get review by category
 */
export default function* watchSearchReview() {
  yield takeLatest(SEARCH_REVIEW_START, doSearchReview);
}
