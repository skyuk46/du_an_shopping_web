export const GET_CART_DETAIL_START = 'GET_CART_DETAIL_START';
export const GET_CART_DETAIL_SUCCESS = 'GET_CART_DETAIL_SUCCESS';
export const GET_CART_DETAIL_FAILED = 'GET_CART_DETAIL_FAILED';

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

