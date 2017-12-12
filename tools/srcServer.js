// This file configures the development web server
// which supports hot reloading and synchronized testing.
// Require Browsersync along with webpack and middleware for it
// Required for react-router browserHistory
// see https://github.com/BrowserSync/browser-sync/issues/204#issuecomment-102623643
import webpack from 'webpack';
import config from '../webpack.config.dev';
import WebpackDevServer from 'webpack-dev-server';

const bundler = webpack(config);

// Run Browsersync and use middleware for Hot Module Replacement
new WebpackDevServer(bundler, {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  compress: true,
  historyApiFallback: true,
}).listen(3000, 'localhost', (err, res) => {
  if (err) {
    return console.log(err);
  }
  console.log('server is up on port 3000');
});
