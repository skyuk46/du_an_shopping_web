import { call, put, takeLatest } from "redux-saga/effects";
import { api } from "../../services/api";
import {
  deleteUserSuccess,
  deleteUserFailed,
  DELETE_USER_START,
} from "../../stores/user/user.action";
/**
 * delete user
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const deleteUserApi = (params) => {
  const uri = `/user/delete/${params.id}`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doDeleteUser(action) {
  try {
    const response = yield call(deleteUserApi, action?.payload);
    if (response?.data.status) {
      yield put(deleteUserSuccess());

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(deleteUserFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch delete user
 */
export default function* watchDeleteUser() {
  yield takeLatest(DELETE_USER_START, doDeleteUser);
}
