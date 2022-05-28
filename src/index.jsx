import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// components
import App from './App';

import store from './features/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
