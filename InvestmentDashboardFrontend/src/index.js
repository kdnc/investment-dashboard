import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import {AppContainer} from 'react-hot-loader';
import createSagaMiddleware from 'redux-saga'
import App from './App';
import rootReducer from './reducers';
import rootSaga from './sagas'
import './assets/styles.css';

const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const defaultState = {};
const sagaMiddleware = createSagaMiddleware()

/**
 * Configure the redux store
 */
export const store = createStore(
  rootReducer(history),
  defaultState,
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ),
  ),
);
sagaMiddleware.run(rootSaga)

/**
 * Render the Root DOM node
 */
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history}/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render();
