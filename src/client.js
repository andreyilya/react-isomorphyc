import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {browserHistory} from "react-router";
import App from "./pages/App";
import {BrowserRouter} from "react-router-dom";
import configureStore from "./store/configureStore";
if (process.env.BROWSER) {
  require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');
  require('./styles/styles.scss');
}
require('./favicon.ico'); // Tell webpack to loadSupplier favicon.ico

const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('app')
);
