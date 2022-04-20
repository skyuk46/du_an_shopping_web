import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../services/api';
import {
  logoutFailed,
  logoutSuccess,
  LOGOUT_START,
} from '../../stores/auth/auth.action';

/**
 * Handle get data request and response
 * @param {object} action
 */
const logoutApi = (params) => {
  const uri = `/logout`;
  return api.post(uri, params);
};

function* doLogout(action) {
  try {
    const response = yield call(logoutApi, action?.payload);
    // Remove token from local storage
    window.localStorage.removeItem('token');

    // Save refresh token from local storage
    window.localStorage.removeItem('userInfo');

    // Redirect to home
    window.location.reload();

    if (response?.status) {
      yield put(logoutSuccess());
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(logoutFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }

  }
}

/**
 * Watch search users
 */
export default function* watchLogout() {
  yield takeLatest(LOGOUT_START, doLogout);
}
