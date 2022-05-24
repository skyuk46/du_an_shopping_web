import {
  SEARCH_USER_START,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILED,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED
} from "./user.action";

const initialState = {
  isLoading: false,
  userList: [],
  success: false,
};

/**
 * cart reducer
 * @param {object} state
 * @param {object} action
 * @returns
 */
export default function user(state = initialState, action) {
  switch (action.type) {
    case SEARCH_USER_START:
    case UPDATE_USER_START:
    case DELETE_USER_START:
      return {
        ...state,
        isLoading: true,
        success: false,
      }
    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        userList: action.payload,
        isLoading: false,
      }
    case SEARCH_USER_FAILED:
      return {
        ...state,
        userList: [],
        isLoading: false,
      }
    case UPDATE_USER_SUCCESS:
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
      }
    case UPDATE_USER_FAILED:
    case DELETE_USER_FAILED:
      return {
        ...state,
        success: false,
        isLoading: false,
      }
    default:
      return state;
  }
}

