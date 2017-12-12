import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import InfiniteScrollPage from "./pages/InfiniteScrollPage";
import NotFoundPage from "./pages/NotFoundPage";
import ReduxFormDemoPage from "./pages/ReduxFormDemoPage";

const Routes = () => (
  <routes>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/redux-form" component={ReduxFormDemoPage}/>
      <Route path="/redux-form/:id" component={ReduxFormDemoPage}/>
      <Route path="/about" component={InfiniteScrollPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Switch>
  </routes>

);

export default Routes;
