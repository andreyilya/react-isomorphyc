// This file configures the development web server
// which supports hot reloading and synchronized testing.
// Require Browsersync along with webpack and middleware for it
// Required for react-router browserHistory
// see https://github.com/BrowserSync/browser-sync/issues/204#issuecomment-102623643
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';
import Express from 'express';
import path from "path";
import ReactDOMServer from "react-dom/server";
import React from "react";

import {WaitingLayer} from "../src/components/WaitingLayer";
var App = React.createFactory(WaitingLayer);
const compiler = webpack(config);
const app = new Express();
const port = 3000;

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get("*", function (req, res) {
  console.log(req.originalUrl);
  console.log(path.resolve(__dirname, '../src/client.js'));
  var html = ReactDOMServer.renderToStaticMarkup(App({showWaiting:true}));
  res.send(html);
  // res.sendFile(path.resolve(__dirname, '../src/webpack-public-path'));
  res.end();
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
