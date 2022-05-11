import {
  GET_REVIEW_BY_PRODUCT_ID_START,
  GET_REVIEW_BY_PRODUCT_ID_SUCCESS,
  GET_REVIEW_BY_PRODUCT_ID_FAILED,
  CREATE_REVIEW_START,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_FAILED
} from "./review.action";

const initialState = {
  isLoading: false,
  reviewList: [],
  success: false,
};

/**
 * cart reducer
 * @param {object} state
 * @param {object} action
 * @returns
 */
export default function review(state = initialState, action) {
  switch (action.type) {
    case GET_REVIEW_BY_PRODUCT_ID_START:
    case CREATE_REVIEW_START:
      return {
        ...state,
        isLoading: true,
        success: false,
      }
    case GET_REVIEW_BY_PRODUCT_ID_SUCCESS:
      return {
        ...state,
        reviewList: action.payload,
        isLoading: false,
      }
    case GET_REVIEW_BY_PRODUCT_ID_FAILED:
      return {
        ...state,
        reviewList: [],
        isLoading: false,
      }
    case CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
      }
    case CREATE_REVIEW_FAILED:
      return {
        ...state,
        success: false,
        isLoading: false,
      }
    default:
      return state;
  }
}

