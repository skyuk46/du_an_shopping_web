export const SEARCH_PRODUCT_START = 'SEARCH_PRODUCT_START';
export const SEARCH_PRODUCT_SUCCESS = 'SEARCH_PRODUCT_SUCCESS';
export const SEARCH_PRODUCT_FAILED = 'SEARCH_PRODUCT_FAILED';

export const GET_PRODUCT_BY_CATEGORY_START = 'GET_PRODUCT_BY_CATEGORY_START';
export const GET_PRODUCT_BY_CATEGORY_SUCCESS = 'GET_PRODUCT_BY_CATEGORY_SUCCESS';
export const GET_PRODUCT_BY_CATEGORY_FAILED = 'GET_PRODUCT_BY_CATEGORY_FAILED';

export const GET_PRODUCT_DETAIL_START = 'GET_PRODUCT_DETAIL_START';
export const GET_PRODUCT_DETAIL_SUCCESS = 'GET_PRODUCT_DETAIL_SUCCESS';
export const GET_PRODUCT_DETAIL_FAILED = 'GET_PRODUCT_DETAIL_FAILED';

export const CREATE_PRODUCT_START = 'CREATE_PRODUCT_START';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILED = 'CREATE_PRODUCT_FAILED';

export const UPDATE_PRODUCT_START = 'UPDATE_PRODUCT_START';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILED = 'UPDATE_PRODUCT_FAILED';

export const DELETE_PRODUCT_START = 'DELETE_PRODUCT_START';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILED = 'DELETE_PRODUCT_FAILED';

export const SEARCH_PRODUCT_BY_NAME_START = 'SEARCH_PRODUCT_BY_NAME_START';
export const SEARCH_PRODUCT_BY_NAME_SUCCESS = 'SEARCH_PRODUCT_BY_NAME_SUCCESS';
export const SEARCH_PRODUCT_BY_NAME_FAILED = 'SEARCH_PRODUCT_BY_NAME_FAILED';

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

/**
 * Get product detail
 */
 export function getProductDetail(payload, onSuccess, onError) {
  return {
    type: GET_PRODUCT_DETAIL_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Get product detail success action
 * @param {*} payload
 * @returns {object}
 */
export function getProductDetailSuccess(payload) {
  return {
    type: GET_PRODUCT_DETAIL_SUCCESS,
    payload: payload,
  };
}

/**
 * Get product detail failed action
 * @returns {object}
 */
export function getProductDetailFailed() {
  return {
    type: GET_PRODUCT_DETAIL_FAILED,
  };
}

/**
 * create product
 */
 export function createProduct(payload, onSuccess, onError) {
  return {
    type: CREATE_PRODUCT_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * create product success action
 * @param {*} payload
 * @returns {object}
 */
export function createProductSuccess(payload) {
  return {
    type: CREATE_PRODUCT_SUCCESS,
    payload: payload,
  };
}

/**
 * create product failed action
 * @returns {object}
 */
export function createProductFailed() {
  return {
    type: CREATE_PRODUCT_FAILED,
  };
}

/**
 * update product
 */
 export function updateProduct(payload, onSuccess, onError) {
  return {
    type: UPDATE_PRODUCT_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * update product success action
 * @param {*} payload
 * @returns {object}
 */
export function updateProductSuccess(payload) {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: payload,
  };
}

/**
 * update product failed action
 * @returns {object}
 */
export function updateProductFailed() {
  return {
    type: UPDATE_PRODUCT_FAILED,
  };
}

/**
 * delete product
 */
 export function deleteProduct(payload, onSuccess, onError) {
  return {
    type: DELETE_PRODUCT_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * delete product success action
 * @param {*} payload
 * @returns {object}
 */
export function deleteProductSuccess(payload) {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: payload,
  };
}

/**
 * delete product failed action
 * @returns {object}
 */
export function deleteProductFailed() {
  return {
    type: DELETE_PRODUCT_FAILED,
  };
}

/**
 * search product
 */
 export function searchProductsByName(payload, onSuccess, onError) {
  return {
    type: SEARCH_PRODUCT_BY_NAME_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * search product success action
 * @param {*} payload
 * @returns {object}
 */
export function searchProductsByNameSuccess(payload) {
  return {
    type: SEARCH_PRODUCT_BY_NAME_SUCCESS,
    payload: payload,
  };
}

/**
 * search product failed action
 * @returns {object}
 */
export function searchProductsByNameFailed() {
  return {
    type: SEARCH_PRODUCT_BY_NAME_FAILED,
  };
}
