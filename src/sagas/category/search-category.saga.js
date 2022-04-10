import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../services/api';
import { searchCategorySuccess, searchCategoryFailed, SEARCH_CATEGORY_START } from '../../stores/category/category.action';
/**
 * search category
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const searchCategoryApi = (params) => {
  const uri = `/categories`;
  return api.get(uri);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doSearchCategory(action) {
  try {
    const response = yield call(searchCategoryApi, action?.payload);
    if (response?.data) {
      const { data } = response;

      yield put(searchCategorySuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(searchCategoryFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch search category
 */
export default function* watchSearchCategory() {
  yield takeLatest(SEARCH_CATEGORY_START, doSearchCategory);
}
