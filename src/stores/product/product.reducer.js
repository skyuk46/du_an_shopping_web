import {
  SEARCH_PRODUCT_START,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILED,
  GET_PRODUCT_BY_CATEGORY_START,
  GET_PRODUCT_BY_CATEGORY_SUCCESS,
  GET_PRODUCT_BY_CATEGORY_FAILED
} from "./product.action";

const initialState = {
  isLoading: false,
  productList: [],
};

/**
 * cart reducer
 * @param {object} state
 * @param {object} action
 * @returns
 */
export default function product(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PRODUCT_START:
    case GET_PRODUCT_BY_CATEGORY_START:
      return {
        ...state,
        isLoading: true
      }
    case SEARCH_PRODUCT_SUCCESS:
    case GET_PRODUCT_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        isLoading: false,
      }
    case SEARCH_PRODUCT_FAILED:
    case GET_PRODUCT_BY_CATEGORY_FAILED:
      return {
        ...state,
        productList: [],
        isLoading: false,
      }
    default:
      return state;
  }
}

