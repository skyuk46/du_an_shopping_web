export const SEARCH_CATEGORY_START = 'SEARCH_CATEGORY_START';
export const SEARCH_CATEGORY_SUCCESS = 'SEARCH_CATEGORY_SUCCESS';
export const SEARCH_CATEGORY_FAILED = 'SEARCH_CATEGORY_FAILED';

export const CREATE_CATEGORY_START = 'CREATE_CATEGORY_START';
export const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS';
export const CREATE_CATEGORY_FAILED = 'CREATE_CATEGORY_FAILED';

export const UPDATE_CATEGORY_START = 'UPDATE_CATEGORY_START';
export const UPDATE_CATEGORY_SUCCESS = 'UPDATE_CATEGORY_SUCCESS';
export const UPDATE_CATEGORY_FAILED = 'UPDATE_CATEGORY_FAILED';

export const DELETE_CATEGORY_START = 'DELETE_CATEGORY_START';
export const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';
export const DELETE_CATEGORY_FAILED = 'DELETE_CATEGORY_FAILED';

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

/**
 * create category
 */
 export function createCategory(payload, onSuccess, onError) {
  return {
    type: CREATE_CATEGORY_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * create category success action
 * @param {*} payload
 * @returns {object}
 */
export function createCategorySuccess(payload) {
  return {
    type: CREATE_CATEGORY_SUCCESS,
    payload: payload,
  };
}

/**
 * create category failed action
 * @returns {object}
 */
export function createCategoryFailed() {
  return {
    type: CREATE_CATEGORY_FAILED,
  };
}

/**
 * update category
 */
 export function updateCategory(payload, onSuccess, onError) {
  return {
    type: UPDATE_CATEGORY_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * update category success action
 * @param {*} payload
 * @returns {object}
 */
export function updateCategorySuccess(payload) {
  return {
    type: UPDATE_CATEGORY_SUCCESS,
    payload: payload,
  };
}

/**
 * update category failed action
 * @returns {object}
 */
export function updateCategoryFailed() {
  return {
    type: UPDATE_CATEGORY_FAILED,
  };
}

/**
 * delete category
 */
 export function deleteCategory(payload, onSuccess, onError) {
  return {
    type: DELETE_CATEGORY_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
}

/**
 * delete category success action
 * @param {*} payload
 * @returns {object}
 */
export function deleteCategorySuccess(payload) {
  return {
    type: DELETE_CATEGORY_SUCCESS,
    payload: payload,
  };
}

/**
 * delete category failed action
 * @returns {object}
 */
export function deleteCategoryFailed() {
  return {
    type: DELETE_CATEGORY_FAILED,
  };
}
