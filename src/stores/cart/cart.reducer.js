import {
  GET_CART_DETAIL_START,
  GET_CART_DETAIL_SUCCESS,
  GET_CART_DETAIL_FAILED,
  CREATE_CART_START,
  CREATE_CART_SUCCESS,
  CREATE_CART_FAILED,
  UPDATE_CART_START,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILED
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
    case CREATE_CART_START:
    case UPDATE_CART_START:
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
    case CREATE_CART_SUCCESS:
    case CREATE_CART_FAILED:
    case UPDATE_CART_SUCCESS:
    case UPDATE_CART_FAILED:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state;
  }
}

