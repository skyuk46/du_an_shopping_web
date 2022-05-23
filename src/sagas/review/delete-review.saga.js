import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  deleteReviewSuccess,
  deleteReviewFailed,
  DELETE_REVIEW_START,
} from "../../stores/review/review.action";
/**
 * delete review
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const deleteReviewApi = (params) => {
  const uri = `/review/delete/${params}`;
  return api.post(uri);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doDeleteReview(action) {
  try {
    const response = yield call(deleteReviewApi, action?.payload);
    if (response?.status) {
      yield put(deleteReviewSuccess());

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(deleteReviewFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch delete review
 */
export default function* watchDeleteReview() {
  yield takeLatest(DELETE_REVIEW_START, doDeleteReview);
}
