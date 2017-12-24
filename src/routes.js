import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import InfiniteScrollPage from "./pages/InfiniteScrollPage";
import NotFoundPage from "./pages/NotFoundPage";
import ReduxFormDemoPage from "./pages/ReduxFormDemoPage";
import Oauth2Login from "./pages/Oauth2Login";
import {
  authenticate,
  getAccessToken,
  getRefreshToken,
  isAccessTokenExpired,
  isRefreshTokenExpired
} from "./oauth2/TokenService";

//TODO: use validateToken
const isAuthed = () => {
  return !(isAccessTokenExpired(getAccessToken()) && isRefreshTokenExpired(getRefreshToken()));
};
const Routes = () => (
  <routes>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/redux-form" component={ReduxFormDemoPage}/>
      <PrivateRoute path="/redux-form/:id" component={ReduxFormDemoPage}/>
      <PrivateRoute path="/infinite-scroll" component={InfiniteScrollPage}/>
      <Route path="/login" component={Oauth2Login}/>
      <Route path="*" component={NotFoundPage}/>
    </Switch>
  </routes>

);

function PrivateRoute({component: Component, ...rest}) {
  let authed = isAuthed();
  if (authed !== true) {
    //TODO: think ABOUT MOVING TO app
    authenticate(rest.location);
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
