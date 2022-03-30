import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './index.reducer';
import rootSaga from '../sagas/index.saga';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

const { logger } = require('redux-logger');
middlewares.push(logger);

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, ...middlewares),
);
sagaMiddleware.run(rootSaga);

export default store;
