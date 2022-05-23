import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  createCategorySuccess,
  createCategoryFailed,
  CREATE_CATEGORY_START,
} from "../../stores/category/category.action";
/**
 * create category
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const createCategoryApi = (params) => {
  const uri = `/category/store`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doCreateCategory(action) {
  try {
    const response = yield call(createCategoryApi, action?.payload);
    if (response?.status) {
      yield put(createCategorySuccess());

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(createCategoryFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch create category
 */
export default function* watchCreateCategory() {
  yield takeLatest(CREATE_CATEGORY_START, doCreateCategory);
}
