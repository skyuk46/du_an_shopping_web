export const SEARCH_CATEGORY_START = 'SEARCH_CATEGORY_START';
export const SEARCH_CATEGORY_SUCCESS = 'SEARCH_CATEGORY_SUCCESS';
export const SEARCH_CATEGORY_FAILED = 'SEARCH_CATEGORY_FAILED';

/**
 * Search category
 */
 export function searchCategory(payload, onSuccess, onError) {
  return {
    type: SEARCH_CATEGORY_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * Search category success action
 * @param {*} payload
 * @returns {object}
 */
export function searchCategorySuccess(payload) {
  return {
    type: SEARCH_CATEGORY_SUCCESS,
    payload: payload,
  };
}

/**
 * Search category failed action
 * @returns {object}
 */
export function searchCategoryFailed() {
  return {
    type: SEARCH_CATEGORY_FAILED,
  };
}

