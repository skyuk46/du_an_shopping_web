export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILED = 'REGISTER_FAILED'

/**
 * Login
 * @param {any} payload
 * @param {function} onSuccess Callback function on success
 * @param {*} onError Callback function on error
 * @returns {object}
 */
export function login(payload, onSuccess, onError) {
  return {
    type: LOGIN_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Login success action
 * @param {*} payload
 * @returns {object}
 */
export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload: payload,
  };
}

/**
 * Login failed action
 * @returns {object}
 */
export function loginFailed(payload) {
  return {
    type: LOGIN_FAILED,
    payload: payload
  };
}

/**
 * Logout
 * @param {any} callbackUrl
 * @param {function} onSuccess Callback function on success
 * @param {*} onError Callback function on error
 * @returns {object}
 */
export function logout(payload, onSuccess, onError) {
  return {
    type: LOGOUT_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Logout success action
 * @param {*} payload
 * @returns {object}
 */
export function logoutSuccess(payload) {
  return {
    type: LOGOUT_SUCCESS,
    payload: payload,
  };
}

/**
 * Logout failed action
 * @returns {object}
 */
export function logoutFailed() {
  return {
    type: LOGOUT_FAILED,
  };
}

export function register(payload, onSuccess, onError) {
  return {
    type: REGISTER_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Register success action
 * @param {*} payload
 * @returns {object}
 */
export function registerSuccess(payload) {
  return {
    type: REGISTER_SUCCESS,
    payload: payload,
  };
}

/**
 * Register failed action
 * @returns {object}
 */
export function registerFailed(payload) {
  return {
    type: REGISTER_FAILED,
    payload: payload
  };
}
