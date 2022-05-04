import {
  SEARCH_ORDER_START,
  SEARCH_ORDER_SUCCESS,
  SEARCH_ORDER_FAILED,
  CREATE_ORDER_START,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  UPDATE_ORDER_START,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAILED,
  DELETE_ORDER_START,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAILED
} from "./order.action";

const initialState = {
  isLoading: false,
  orderList: [],
  success: false,
};

/**
 * cart reducer
 * @param {object} state
 * @param {object} action
 * @returns
 */
export default function order(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ORDER_START:
    case CREATE_ORDER_START:
    case UPDATE_ORDER_START:
    case DELETE_ORDER_START:
      return {
        ...state,
        isLoading: true,
        success: false,
      }
    case SEARCH_ORDER_SUCCESS:
      return {
        ...state,
        orderList: action.payload,
        isLoading: false,
      }
    case SEARCH_ORDER_FAILED:
      return {
        ...state,
        orderList: [],
        isLoading: false,
      }
    case CREATE_ORDER_SUCCESS:
    case UPDATE_ORDER_SUCCESS:
    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
      }
    case CREATE_ORDER_FAILED:
    case UPDATE_ORDER_FAILED:
    case DELETE_ORDER_FAILED:
      return {
        ...state,
        success: false,
        isLoading: false,
      }
    default:
      return state;
  }
}

