import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ReduxFormDemoPage from './pages/ReduxFormDemoPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="redux-form" component={ReduxFormDemoPage}/>
    <Route path="redux-form/:id" component={ReduxFormDemoPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
