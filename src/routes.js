import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import HomePage from './pages/HomePage';
import FuelSavingsPage from './pages/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ReduxFormDemo from './pages/ReduxFormDemoPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="redux-form" component={ReduxFormDemo}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
