import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  updateUserSuccess,
  updateUserFailed,
  UPDATE_USER_START,
} from "../../stores/user/user.action";
/**
 * update user
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const updateUserApi = (params) => {
  const uri = `/user/update/${params.id}`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doUpdateUser(action) {
  try {
    const response = yield call(updateUserApi, action?.payload);
    if (response?.user) {
      yield put(updateUserSuccess());

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(updateUserFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch update user
 */
export default function* watchUpdateUser() {
  yield takeLatest(UPDATE_USER_START, doUpdateUser);
}
