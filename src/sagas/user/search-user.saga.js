import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  searchUserSuccess,
  searchUserFailed,
  SEARCH_USER_START,
} from "../../stores/user/user.action";
/**
 * search user
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const searchUserApi = (params) => {
  const uri = `/users`;
  return api.get(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doSearchUser(action) {
  try {
    const response = yield call(searchUserApi, action?.payload);
    if (response?.data) {
      const { data } = response;

      yield put(searchUserSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(searchUserFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch search user
 */
export default function* watchSearchUser() {
  yield takeLatest(SEARCH_USER_START, doSearchUser);
}
