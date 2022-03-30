// @ts-nocheck
import axios from 'axios';
import { NOTIFICATION_TYPE } from '../../common/constant';
import i18n from "../../common/i18n"
import addNotification from '../../common/toast';
import history from "../../services/history"
import store from "../../stores"
import { logout } from '../../stores/auth/auth.action';
import { validateStatus } from '../../utils/api';

// common base instance
const BASE_URL = process.env.REACT_APP_HOST + '/api';
const HEADERS_MULTIPLE_PART = {
  'Content-Type': 'multipart/form-data; boundary=something',
};
const REFRESH_TOKEN_URL = '/v1/auth/token/refresh';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    contentType: 'application/json',
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    if (config.url !== REFRESH_TOKEN_URL && localStorage.getItem('token')) {
      config.headers['Authorization'] = localStorage.getItem('token');
      config.headers['x-auth-token'] = localStorage.getItem('token');
    }
    return config;
  },
  function (error) {
    // Các trường hợp lỗi 5xx, 4xx, network xử lý ở đây
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  async function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response
    if (validateStatus(response.status)) {
      return response.data;
    } else if (response.status === 500) {
      addNotification(i18n.t('message.unknownError'), NOTIFICATION_TYPE.ERROR);
    } else {
      addNotification('unauthorized', NOTIFICATION_TYPE.ERROR);
    }
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const response = error.response;

    if (
      response.status === 403 &&
      response.config &&
      !response.config._isRefreshBefore &&
      response.config.url !== REFRESH_TOKEN_URL
    ) {
      return refreshAccessToken()
        .then((refresh) => {
          if (refresh.statusCode === 200) {
            axios.defaults.headers.common['Authorization'] =
              refresh.data.accessToken.token;

            // save to localStorage
            localStorage.setItem(
              'token',
              'Bearer ' + refresh.data.accessToken.token,
            );
            localStorage.setItem(
              'refreshToken',
              'Bearer ' + refresh.data.refreshToken.token,
            );
            response.config._isRefreshBefore = true;
            return instance(response.config);
          } else {
            startLogout();
          }
        })
        .catch(() => {
          startLogout();
        });
    } else if (response.status === 401) {
      startLogout();
    } else {
      return Promise.reject(error);
    }
  },
);

const startLogout = () => {
  if (history.location.pathname !== '/login') {
    const callbackUrl = history.location.pathname;
    store.dispatch(logout(callbackUrl));
  }
};

const api = {
  instance,
  post: (endpoint, params) => {
    return instance
      .post(endpoint, params, {
        validateStatus: (status) => validateStatus(status),
      })
      .then(
        (response) => {
          return response;
        },
        (err) => {
          return err.response || err;
        },
      )
      .catch(
        (response) => {
          return response;
        },
        (err) => {
          return err.response || err;
        },
      );
  },

  postMultiplePart: (endpoint, params) => {
    return instance
      .post(endpoint, params, {
        headers: { ...HEADERS_MULTIPLE_PART },
        validateStatus: (status) => validateStatus(status),
      })
      .then(
        (response) => {
          return response;
        },
        (err) => {
          return err.response || err;
        },
      )
      .catch(
        (response) => {
          return response;
        },
        (err) => {
          return err.response || err;
        },
      );
  },

  getFile: (endpoint) => {
    return instance
      .get(endpoint, {
        validateStatus: (status) => validateStatus(status),
      })
      .then(
        (response) => {
          return response;
        },
        (err) => {
          return err.response || err;
        },
      )
      .catch(
        (response) => {
          return response;
        },
        (err) => {
          return err.response || err;
        },
      );
  },
  get: (endpoint, params = {}) => {
    return instance
      .get(endpoint, {
        params: params,
        validateStatus: (status) => validateStatus(status),
      })
      .then(
        (response) => {
          return response;
        },
        (err) => {
          return err.response || err;
        },
      )
      .catch(
        (response) => {
          return response;
        },
        (err) => {
          return err.response || err;
        },
      );
  },

  put: (endpoint, params) => {
    return instance
      .put(endpoint, params, {
        validateStatus: (status) => validateStatus(status),
      })
      .then(
        (response) => {
          return response;
        },
        (err) => {
          return err.response || err;
        },
      )
      .catch(
        (response) => {
          return response;
        },
        (err) => {
          return err.response || err;
        },
      );
  },

  delete: (endpoint, params) => {
    return instance
      .delete(endpoint, {
        data: params,
        validateStatus: (status) => validateStatus(status),
      })
      .then(
        (response) => {
          return response;
        },
        (err) => {
          return err.response || err;
        },
      )
      .catch(
        (response) => {
          return response;
        },
        (err) => {
          return err.response || err;
        },
      );
  },
};

/**
 *
 * @returns {Promise}
 */
export const refreshAccessToken = () => {
  return instance.get(REFRESH_TOKEN_URL, {
    headers: {
      Authorization: localStorage.getItem('refreshToken'),
      'x-auth-token': localStorage.getItem('refreshToken'),
    },
  });
};

export { api };
