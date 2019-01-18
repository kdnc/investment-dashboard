import React from 'react';
import {Route, Switch} from 'react-router';
import NavBar from '../components/navbar/NavBar';
import AboutContainer from '../containers/aboutContainer/AboutContainer';
import InvestmentsContainer from '../containers/investmentsContainer/InvestmentsContainer';

/**
 * Defined routes for the application
 */
const routes = (
  <div>
    <NavBar/>
    <div className={'rightContentContainer'}>
      <Switch>
        <Route exact path="/" component={InvestmentsContainer}/>
        <Route path="/about" component={AboutContainer}/>
      </Switch>
    </div>
  </div>
);

export default routes;