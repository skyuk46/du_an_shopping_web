export const GET_REVIEW_BY_PRODUCT_ID_START = 'GET_REVIEW_BY_PRODUCT_ID_START';
export const GET_REVIEW_BY_PRODUCT_ID_SUCCESS = 'GET_REVIEW_BY_PRODUCT_ID_SUCCESS';
export const GET_REVIEW_BY_PRODUCT_ID_FAILED = 'GET_REVIEW_BY_PRODUCT_ID_FAILED';

export const CREATE_REVIEW_START = 'CREATE_REVIEW_START';
export const CREATE_REVIEW_SUCCESS = 'CREATE_REVIEW_SUCCESS';
export const CREATE_REVIEW_FAILED = 'CREATE_REVIEW_FAILED';

export const SEARCH_REVIEW_START = 'SEARCH_REVIEW_START';
export const SEARCH_REVIEW_SUCCESS = 'SEARCH_REVIEW_SUCCESS';
export const SEARCH_REVIEW_FAILED = 'SEARCH_REVIEW_FAILED';

export const DELETE_REVIEW_START = 'DELETE_REVIEW_START';
export const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS';
export const DELETE_REVIEW_FAILED = 'DELETE_REVIEW_FAILED';

/**
 * Get review by product id
 */
 export function getReviewByProductId(payload, onSuccess, onError) {
  return {
    type: GET_REVIEW_BY_PRODUCT_ID_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Get review by product id success action
 * @param {*} payload
 * @returns {object}
 */
export function getReviewByProductIdSuccess(payload) {
  return {
    type: GET_REVIEW_BY_PRODUCT_ID_SUCCESS,
    payload: payload,
  };
}

/**
 * Get review by product id failed action
 * @returns {object}
 */
export function getReviewByProductIdFailed() {
  return {
    type: GET_REVIEW_BY_PRODUCT_ID_FAILED,
  };
}

/**
 * create review
 */
 export function createReview(payload, onSuccess, onError) {
  return {
    type: CREATE_REVIEW_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * create review success action
 * @param {*} payload
 * @returns {object}
 */
export function createReviewSuccess(payload) {
  return {
    type: CREATE_REVIEW_SUCCESS,
    payload: payload,
  };
}

/**
 * create review failed action
 * @returns {object}
 */
export function createReviewFailed() {
  return {
    type: CREATE_REVIEW_FAILED,
  };
}

/**
 * Search review
 */
 export function searchReview(payload, onSuccess, onError) {
  return {
    type: SEARCH_REVIEW_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Search review success action
 * @param {*} payload
 * @returns {object}
 */
export function searchReviewSuccess(payload) {
  return {
    type: SEARCH_REVIEW_SUCCESS,
    payload: payload,
  };
}

/**
 * Search review failed action
 * @returns {object}
 */
export function searchReviewFailed() {
  return {
    type: SEARCH_REVIEW_FAILED,
  };
}

/**
 * delete review
 */
 export function deleteReview(payload, onSuccess, onError) {
  return {
    type: DELETE_REVIEW_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * delete review success action
 * @param {*} payload
 * @returns {object}
 */
export function deleteReviewSuccess(payload) {
  return {
    type: DELETE_REVIEW_SUCCESS,
    payload: payload,
  };
}

/**
 * delete review failed action
 * @returns {object}
 */
export function deleteReviewFailed() {
  return {
    type: DELETE_REVIEW_FAILED,
  };
}
