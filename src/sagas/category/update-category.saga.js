import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  updateCategorySuccess,
  updateCategoryFailed,
  UPDATE_CATEGORY_START,
} from "../../stores/category/category.action";
/**
 * update category
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const updateCategoryApi = (params) => {
  const uri = `/category/update/${params.id}`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doUpdateCategory(action) {
  try {
    const response = yield call(updateCategoryApi, action?.payload);
    if (response?.status) {
      yield put(updateCategorySuccess());

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(updateCategoryFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch update category
 */
export default function* watchUpdateCategory() {
  yield takeLatest(UPDATE_CATEGORY_START, doUpdateCategory);
}
