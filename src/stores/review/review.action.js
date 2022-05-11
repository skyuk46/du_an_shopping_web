export const GET_REVIEW_BY_PRODUCT_ID_START = 'GET_REVIEW_BY_PRODUCT_ID_START';
export const GET_REVIEW_BY_PRODUCT_ID_SUCCESS = 'GET_REVIEW_BY_PRODUCT_ID_SUCCESS';
export const GET_REVIEW_BY_PRODUCT_ID_FAILED = 'GET_REVIEW_BY_PRODUCT_ID_FAILED';

export const CREATE_REVIEW_START = 'CREATE_REVIEW_START';
export const CREATE_REVIEW_SUCCESS = 'CREATE_REVIEW_SUCCESS';
export const CREATE_REVIEW_FAILED = 'CREATE_REVIEW_FAILED';


/**
 * Search review
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
 * Search review success action
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
 * Search review failed action
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

