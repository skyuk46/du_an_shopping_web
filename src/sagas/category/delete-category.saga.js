import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  deleteCategorySuccess,
  deleteCategoryFailed,
  DELETE_CATEGORY_START,
} from "../../stores/category/category.action";
/**
 * delete category
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const deleteCategoryApi = (params) => {
  const uri = `/category/delete/${params.id}`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doDeleteCategory(action) {
  try {
    const response = yield call(deleteCategoryApi, action?.payload);
    if (response?.data) {
      const { data } = response;

      yield put(deleteCategorySuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(deleteCategoryFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch delete category
 */
export default function* watchDeleteCategory() {
  yield takeLatest(DELETE_CATEGORY_START, doDeleteCategory);
}
