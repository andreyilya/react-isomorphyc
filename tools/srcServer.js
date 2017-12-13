import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../webpack.config.dev";
import Express from "express";
import ReactDOMServer from "react-dom/server";
import React from "react";

import {WaitingLayer} from "../src/components/WaitingLayer";
const compiler = webpack(config);
const app = new Express();
const port = 3000;

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));


app.get("*", function (req, res) {
  const html = ReactDOMServer.renderToString(<WaitingLayer showWaiting={true}/>);
  res.send(html);
});

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
