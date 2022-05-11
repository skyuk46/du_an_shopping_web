import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from './auth.action';

const initialState = {
  isLoading: false,
  userInfo: {},
  message: ''
};

/**
 * auth reducer
 * @param {object} state
 * @param {object} action
 * @returns
 */
export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
    case LOGOUT_START:
    case REGISTER_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        userInfo: {},
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
        message: ''
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: ''
      }
    case LOGIN_FAILED:
    case LOGOUT_FAILED:
    case REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        message: action.payload
      };
    default:
      return state;
  }
}
