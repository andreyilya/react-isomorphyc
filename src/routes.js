import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import InfiniteScrollPage from "./pages/InfiniteScrollPage";
import NotFoundPage from "./pages/NotFoundPage";
import ReduxFormDemoPage from "./pages/ReduxFormDemoPage";
import {CLIENT_ID} from "./oauth2/Oauth";
import Oauth2Login from "./pages/Oauth2Login";

const Routes = () => (
  <routes>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/redux-form" component={ReduxFormDemoPage}/>
      <Route path="/redux-form/:id" component={ReduxFormDemoPage}/>
      <PrivateRoute path="/infinite-scroll" component={InfiniteScrollPage}/>
      <Route path="/login" component={Oauth2Login}/>
      <Route path="*" component={NotFoundPage}/>
    </Switch>
  </routes>

);

function PrivateRoute({component: Component, authed, ...rest}) {
  if (authed !== true) {
    //TODO: think ABOUT MOVING TO app
    window.location.href = process.env.AUTH_SERVER_URL + '/uaa/oauth/authorize?client_id=' + CLIENT_ID + '&redirect_uri=' + process.env.LOGIN_URL + '&response_type=code&scope=resource-read';
  }

  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} /> : <div/>}
    />
  );
}

export default Routes;
