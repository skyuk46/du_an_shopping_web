import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import AppContainer from './containers/app';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import i18n from './common/i18n';
import store from "./stores"

ReactDOM.render(
  <Suspense fallback={() => null}>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <AppContainer />
      </I18nextProvider>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
