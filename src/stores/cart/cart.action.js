export const GET_CART_DETAIL_START = 'GET_CART_DETAIL_START';
export const GET_CART_DETAIL_SUCCESS = 'GET_CART_DETAIL_SUCCESS';
export const GET_CART_DETAIL_FAILED = 'GET_CART_DETAIL_FAILED';

export const CREATE_CART_START = 'CREATE_CART_START';
export const CREATE_CART_SUCCESS = 'CREATE_CART_SUCCESS';
export const CREATE_CART_FAILED = 'CREATE_CART_FAILED';

export const UPDATE_CART_START = 'UPDATE_CART_START';
export const UPDATE_CART_SUCCESS = 'UPDATE_CART_SUCCESS';
export const UPDATE_CART_FAILED = 'UPDATE_CART_FAILED';

export const DELETE_CART_START = 'DELETE_CART_START';
export const DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS';
export const DELETE_CART_FAILED = 'DELETE_CART_FAILED';

export const DELETE_ALL_CARTS_START = 'DELETE_ALL_CARTS_START';
export const DELETE_ALL_CARTS_SUCCESS = 'DELETE_ALL_CARTS_SUCCESS';
export const DELETE_ALL_CARTS_FAILED = 'DELETE_ALL_CARTS_FAILED';

/**
 * Get cart detail
 */
 export function getCartDetail(payload, onSuccess, onError) {
  return {
    type: GET_CART_DETAIL_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Get cart detail success action
 * @param {*} payload
 * @returns {object}
 */
export function getCartDetailSuccess(payload) {
  return {
    type: GET_CART_DETAIL_SUCCESS,
    payload: payload,
  };
}

/**
 * Get cart detail failed action
 * @returns {object}
 */
export function getCartDetailFailed() {
  return {
    type: GET_CART_DETAIL_FAILED,
  };
}

/**
 * Create cart
 */
 export function createCart(payload, onSuccess, onError) {
  return {
    type: CREATE_CART_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Create cart success action
 * @param {*} payload
 * @returns {object}
 */
export function createCartSuccess(payload) {
  return {
    type: CREATE_CART_SUCCESS,
    payload: payload,
  };
}

/**
 * Create cart failed action
 * @returns {object}
 */
export function createCartFailed() {
  return {
    type: CREATE_CART_FAILED,
  };
}

/**
 * Update cart
 */
 export function updateCart(payload, onSuccess, onError) {
  return {
    type: UPDATE_CART_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Update cart success action
 * @param {*} payload
 * @returns {object}
 */
export function updateCartSuccess(payload) {
  return {
    type: UPDATE_CART_SUCCESS,
    payload: payload,
  };
}

/**
 * Update cart failed action
 * @returns {object}
 */
export function updateCartFailed() {
  return {
    type: UPDATE_CART_FAILED,
  };
}

/**
 * Delete cart
 */
 export function deleteCart(payload, onSuccess, onError) {
  return {
    type: DELETE_CART_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Delete cart success action
 * @param {*} payload
 * @returns {object}
 */
export function deleteCartSuccess(payload) {
  return {
    type: DELETE_CART_SUCCESS,
    payload: payload,
  };
}

/**
 * Delete cart failed action
 * @returns {object}
 */
export function deleteCartFailed() {
  return {
    type: DELETE_CART_FAILED,
  };
}

/**
 * Delete all cart
 */
 export function deleteAllCarts(payload, onSuccess, onError) {
  return {
    type: DELETE_ALL_CARTS_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Delete all cart success action
 * @param {*} payload
 * @returns {object}
 */
export function deleteAllCartsSuccess(payload) {
  return {
    type: DELETE_ALL_CARTS_SUCCESS,
    payload: payload,
  };
}

/**
 * Delete all cart failed action
 * @returns {object}
 */
export function deleteAllCartsFailed() {
  return {
    type: DELETE_ALL_CARTS_FAILED,
  };
}
