import webpack from "webpack";
import Express from "express";
import React from "react";
import path from "path";
import webpackDevMiddleware from "webpack-dev-middleware";

import fs from "fs";
import compression from "compression";
import config from "../webpack/webpack.config.prod";
const compiler = webpack(config);

const app = new Express();
const port = 3000;

app.use(compression());
// app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
// app.use(webpackHotMiddleware(compiler));
app.use(Express.static(path.resolve(__dirname, '..', 'dist')));
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});
//TODO: create proxy
app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
