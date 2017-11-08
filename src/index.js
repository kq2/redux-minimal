import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './redux/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/redux-minimal">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
