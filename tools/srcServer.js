// This file configures the development web server
// which supports hot reloading and synchronized testing.

// Require Browsersync along with webpack and middleware for it
import browserSync from 'browser-sync';
// Required for react-router browserHistory
// see https://github.com/BrowserSync/browser-sync/issues/204#issuecomment-102623643
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';

const bundler = webpack(config);
import WebpackDevServer from 'webpack-dev-server';

// Run Browsersync and use middleware for Hot Module Replacement
new WebpackDevServer(bundler,{
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  compress: true,
  historyApiFallback: true,
 }).listen(3000, 'localhost', (err,res)=>{
  if (err){
    return console.log(err);
  }
  console.log('server is up on port 3000');
});
