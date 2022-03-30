const { default: history } = require('../services/history');

/**
 * Redirect to path with state
 * @param {string} path
 * @param {object} state
 */
export const redirectRouter = (path, state) => {
  history.push(path, state);
};
