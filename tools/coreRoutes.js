var React = require('react');
var ReactDOMServer = require('react-dom/server');
var App = React.createFactory(require('../src/pages/App'));

module.exports = function(app) {

  app.get('/', function(req, res){
    // React.renderToString takes your component
    // and generates the markup
   var reactHtml = ReactDOMServer.renderToString(<App />);
    // Output html rendered by react
    // console.log(myAppHtml);
    // res.send("hello world " + req.url);
   res.render('../src/index.ejs', {reactOutput: reactHtml});
  });

};
