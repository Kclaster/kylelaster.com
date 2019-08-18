// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

// Internal Dependencies
import App from './App';
import reducer from './redux/reducers';
import registerServiceWorker from './registeredServiceWorker';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxThunk)
  ));


  ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>,
      document.querySelector('#root')
  );
  registerServiceWorker();
