import { connectRouter } from 'connected-react-router';
import investmentsReducer from './investmentsReducer';
import { combineReducers } from 'redux';

/**
 * Root reducer for the application
 * @param {object} history - History object to be used for the router
 */
const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  investments: investmentsReducer,
});

export default rootReducer;