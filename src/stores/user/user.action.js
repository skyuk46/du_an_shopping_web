export const SEARCH_USER_START = 'SEARCH_USER_START';
export const SEARCH_USER_SUCCESS = 'SEARCH_USER_SUCCESS';
export const SEARCH_USER_FAILED = 'SEARCH_USER_FAILED';

export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILED = 'DELETE_USER_FAILED';

/**
 * Search user
 */
 export function searchUser(payload, onSuccess, onError) {
  return {
    type: SEARCH_USER_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Search user success action
 * @param {*} payload
 * @returns {object}
 */
export function searchUserSuccess(payload) {
  return {
    type: SEARCH_USER_SUCCESS,
    payload: payload,
  };
}

/**
 * Search user failed action
 * @returns {object}
 */
export function searchUserFailed() {
  return {
    type: SEARCH_USER_FAILED,
  };
}

/**
 * update user
 */
 export function updateUser(payload, onSuccess, onError) {
  return {
    type: UPDATE_USER_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * update user success action
 * @param {*} payload
 * @returns {object}
 */
export function updateUserSuccess(payload) {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: payload,
  };
}

/**
 * update user failed action
 * @returns {object}
 */
export function updateUserFailed() {
  return {
    type: UPDATE_USER_FAILED,
  };
}

/**
 * delete user
 */
 export function deleteUser(payload, onSuccess, onError) {
  return {
    type: DELETE_USER_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * delete user success action
 * @param {*} payload
 * @returns {object}
 */
export function deleteUserSuccess(payload) {
  return {
    type: DELETE_USER_SUCCESS,
    payload: payload,
  };
}

/**
 * delete user failed action
 * @returns {object}
 */
export function deleteUserFailed() {
  return {
    type: DELETE_USER_FAILED,
  };
}
