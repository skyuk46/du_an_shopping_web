import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../services/api';
import {
  registerSuccess,
  registerFailed,
  REGISTER_START
} from '../../stores/auth/auth.action';
/**
 * Register
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const registerApi = (params) => {
  const uri = `/register`;
  return api.post(uri, params);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doRegister(action) {
  try {
    const response = yield call(registerApi, action?.payload);
    if (response?.status) {
      const { data } = response;

      yield put(registerSuccess(data));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    } else {
      throw new Error(response?.message);
    }
  } catch (error) {
    yield put(registerFailed());
    // Call callback action if provided
    if (action.onError) {
      yield action.onError();
    }
  }
}

/**
 * Watch create cart
 */
export default function* watchRegister() {
  yield takeLatest(REGISTER_START, doRegister);
}
