import React from 'react';
import {ConnectedRouter} from 'connected-react-router';
import routes from './routes';

/**
 * Router wrapped app component
 * @param {object} history - History object to be used for the router
 */
const App = ({history}) => {
  return (
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  )
};

export default App;
