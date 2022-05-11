import {
  SEARCH_PRODUCT_START,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILED,
  GET_PRODUCT_BY_CATEGORY_START,
  GET_PRODUCT_BY_CATEGORY_SUCCESS,
  GET_PRODUCT_BY_CATEGORY_FAILED,
  GET_PRODUCT_DETAIL_START,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILED,
  CREATE_PRODUCT_START,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILED,
  UPDATE_PRODUCT_START,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
  SEARCH_PRODUCT_BY_NAME_START,
  SEARCH_PRODUCT_BY_NAME_SUCCESS,
  SEARCH_PRODUCT_BY_NAME_FAILED,
} from "./product.action";

const initialState = {
  isLoading: false,
  productList: [],
  productDetail: {},
  searchProductList: [],
  success: false,
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
    case GET_PRODUCT_DETAIL_START:
    case CREATE_PRODUCT_START:
    case UPDATE_PRODUCT_START:
    case DELETE_PRODUCT_START:
    case SEARCH_PRODUCT_BY_NAME_START:
      return {
        ...state,
        isLoading: true,
        success: false,
      }
    case SEARCH_PRODUCT_SUCCESS:
    case GET_PRODUCT_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        isLoading: false,
      }
    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetail: action.payload,
        isLoading: false,
      }
    case SEARCH_PRODUCT_FAILED:
    case GET_PRODUCT_BY_CATEGORY_FAILED:
      return {
        ...state,
        productList: [],
        isLoading: false,
      }
    case GET_PRODUCT_DETAIL_FAILED:
      return {
        ...state,
        productDetail: {},
        isLoading: false,
      }
    case CREATE_PRODUCT_SUCCESS:
    case UPDATE_PRODUCT_SUCCESS:
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
      }
    case CREATE_PRODUCT_FAILED:
    case UPDATE_PRODUCT_FAILED:
    case DELETE_PRODUCT_FAILED:
      return {
        ...state,
        success: false,
        isLoading: false,
      }
    case SEARCH_PRODUCT_BY_NAME_SUCCESS:
      return {
        ...state,
        success: true,
        searchProductList: action.payload
      }
    case SEARCH_PRODUCT_BY_NAME_FAILED:
      return {
        ...state,
        success: true,
        searchProductList: []
      }
    default:
      return state;
  }
}

