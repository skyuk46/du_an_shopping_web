export const SEARCH_ORDER_START = 'SEARCH_ORDER_START';
export const SEARCH_ORDER_SUCCESS = 'SEARCH_ORDER_SUCCESS';
export const SEARCH_ORDER_FAILED = 'SEARCH_ORDER_FAILED';

export const CREATE_ORDER_START = 'CREATE_ORDER_START';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILED = 'CREATE_ORDER_FAILED';

export const UPDATE_ORDER_START = 'UPDATE_ORDER_START';
export const UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS';
export const UPDATE_ORDER_FAILED = 'UPDATE_ORDER_FAILED';

export const DELETE_ORDER_START = 'DELETE_ORDER_START';
export const DELETE_ORDER_SUCCESS = 'DELETE_ORDER_SUCCESS';
export const DELETE_ORDER_FAILED = 'DELETE_ORDER_FAILED';

/**
 * Search order
 */
 export function searchOrder(payload, onSuccess, onError) {
  return {
    type: SEARCH_ORDER_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Search order success action
 * @param {*} payload
 * @returns {object}
 */
export function searchOrderSuccess(payload) {
  return {
    type: SEARCH_ORDER_SUCCESS,
    payload: payload,
  };
}

/**
 * Search order failed action
 * @returns {object}
 */
export function searchOrderFailed() {
  return {
    type: SEARCH_ORDER_FAILED,
  };
}

/**
 * create order
 */
 export function createOrder(payload, onSuccess, onError) {
  return {
    type: CREATE_ORDER_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * create order success action
 * @param {*} payload
 * @returns {object}
 */
export function createOrderSuccess(payload) {
  return {
    type: CREATE_ORDER_SUCCESS,
    payload: payload,
  };
}

/**
 * create order failed action
 * @returns {object}
 */
export function createOrderFailed() {
  return {
    type: CREATE_ORDER_FAILED,
  };
}

/**
 * update order
 */
 export function updateOrder(payload, onSuccess, onError) {
  return {
    type: UPDATE_ORDER_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * update order success action
 * @param {*} payload
 * @returns {object}
 */
export function updateOrderSuccess(payload) {
  return {
    type: UPDATE_ORDER_SUCCESS,
    payload: payload,
  };
}

/**
 * update order failed action
 * @returns {object}
 */
export function updateOrderFailed() {
  return {
    type: UPDATE_ORDER_FAILED,
  };
}

/**
 * delete order
 */
 export function deleteOrder(payload, onSuccess, onError) {
  return {
    type: DELETE_ORDER_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * delete order success action
 * @param {*} payload
 * @returns {object}
 */
export function deleteOrderSuccess(payload) {
  return {
    type: DELETE_ORDER_SUCCESS,
    payload: payload,
  };
}

/**
 * delete order failed action
 * @returns {object}
 */
export function deleteOrderFailed() {
  return {
    type: DELETE_ORDER_FAILED,
  };
}
