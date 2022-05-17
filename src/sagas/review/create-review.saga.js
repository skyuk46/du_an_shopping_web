import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  createReviewSuccess,
  createReviewFailed,
  CREATE_REVIEW_START,
} from "../../stores/review/review.action";
/**
 * create review
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const createReviewApi = (params) => {
  const uri = `/review/store`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doCreateReview(action) {
  try {
    const response = yield call(createReviewApi, action?.payload);
    if (response?.status) {
      yield put(createReviewSuccess());

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(createReviewFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch create review
 */
export default function* watchCreateReview() {
  yield takeLatest(CREATE_REVIEW_START, doCreateReview);
}
