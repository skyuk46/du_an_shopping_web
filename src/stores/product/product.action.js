export const SEARCH_PRODUCT_START = 'SEARCH_PRODUCT_START';
export const SEARCH_PRODUCT_SUCCESS = 'SEARCH_PRODUCT_SUCCESS';
export const SEARCH_PRODUCT_FAILED = 'SEARCH_PRODUCT_FAILED';

export const GET_PRODUCT_BY_CATEGORY_START = 'GET_PRODUCT_BY_CATEGORY_START';
export const GET_PRODUCT_BY_CATEGORY_SUCCESS = 'GET_PRODUCT_BY_CATEGORY_SUCCESS';
export const GET_PRODUCT_BY_CATEGORY_FAILED = 'GET_PRODUCT_BY_CATEGORY_FAILED';

/**
 * Search product
 */
 export function searchProduct(payload, onSuccess, onError) {
  return {
    type: SEARCH_PRODUCT_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Search product success action
 * @param {*} payload
 * @returns {object}
 */
export function searchProductSuccess(payload) {
  return {
    type: SEARCH_PRODUCT_SUCCESS,
    payload: payload,
  };
}

/**
 * Search product failed action
 * @returns {object}
 */
export function searchProductFailed() {
  return {
    type: SEARCH_PRODUCT_FAILED,
  };
}

/**
 * Get product by category
 */
 export function getProductByCategory(payload, onSuccess, onError) {
  return {
    type: GET_PRODUCT_BY_CATEGORY_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Get product by category success action
 * @param {*} payload
 * @returns {object}
 */
export function getProductByCategorySuccess(payload) {
  return {
    type: GET_PRODUCT_BY_CATEGORY_SUCCESS,
    payload: payload,
  };
}

/**
 * Get product by category failed action
 * @returns {object}
 */
export function getProductByCategoryFailed() {
  return {
    type: GET_PRODUCT_BY_CATEGORY_FAILED,
  };
}
