import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../services/api';
import {
  loginFailed,
  loginSuccess,
  LOGIN_START,
} from '../../stores/auth/auth.action';
/**
 * Login
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const loginApi = (params) => {
  const uri = `/login`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doLogin(action) {
  try {
    const response = yield call(loginApi, action?.payload);
    if (response?.status) {
      const { data, token } = response;

      // Save token to local storage
      localStorage.setItem('token', 'Bearer ' + token);
      // Save refresh to ken to local storage
      // Save user infomation to local storage
      localStorage.setItem('userInfo', data);
      localStorage.setItem('userId', data.id)
      yield put(loginSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(loginFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch login
 */
export default function* watchLogin() {
  yield takeLatest(LOGIN_START, doLogin);
}
