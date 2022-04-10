import {
  SEARCH_CATEGORY_START,
  SEARCH_CATEGORY_SUCCESS,
  SEARCH_CATEGORY_FAILED
} from "./category.action";

const initialState = {
  isLoading: false,
  categoryList: [],
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
      return {
        ...state,
        isLoading: true
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
    default:
      return state;
  }
}

