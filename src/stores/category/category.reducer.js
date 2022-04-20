import {
  SEARCH_CATEGORY_START,
  SEARCH_CATEGORY_SUCCESS,
  SEARCH_CATEGORY_FAILED,
  CREATE_CATEGORY_START,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILED,
  UPDATE_CATEGORY_START,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILED,
  DELETE_CATEGORY_START,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED
} from "./category.action";

const initialState = {
  isLoading: false,
  categoryList: [],
  success: false,
};

/**
 * cart reducer
 * @param {object} state
 * @param {object} action
 * @returns
 */
export default function category(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CATEGORY_START:
    case CREATE_CATEGORY_START:
    case UPDATE_CATEGORY_START:
    case DELETE_CATEGORY_START:
      return {
        ...state,
        isLoading: true,
        success: false,
      }
    case SEARCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryList: action.payload,
        isLoading: false,
      }
    case SEARCH_CATEGORY_FAILED:
      return {
        ...state,
        categoryList: [],
        isLoading: false,
      }
    case CREATE_CATEGORY_SUCCESS:
    case UPDATE_CATEGORY_SUCCESS:
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
      }
    case CREATE_CATEGORY_FAILED:
    case UPDATE_CATEGORY_FAILED:
    case DELETE_CATEGORY_FAILED:
      return {
        ...state,
        success: false,
        isLoading: false,
      }
    default:
      return state;
  }
}

