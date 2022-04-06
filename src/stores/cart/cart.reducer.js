import {
  GET_CART_DETAIL_START,
  GET_CART_DETAIL_SUCCESS,
  GET_CART_DETAIL_FAILED
} from "./cart.action";

const initialState = {
  isLoading: false,
  cartDetail: [],
};

/**
 * cart reducer
 * @param {object} state
 * @param {object} action
 * @returns
 */
export default function cart(state = initialState, action) {
  switch (action.type) {
    case GET_CART_DETAIL_START:
      return {
        ...state,
        isLoading: true
      }
    case GET_CART_DETAIL_SUCCESS:
      return {
        ...state,
        cartDetail: action.payload,
        isLoading: false,
      }
    case GET_CART_DETAIL_FAILED:
      return {
        ...state,
        cartDetail: [],
        isLoading: false,
      }
    default:
      return state;
  }
}

