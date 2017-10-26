'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import routes from './src/app/routes';

var PORT = process.env.PORT || 3000;
var server = (0, _express2.default)();
var renderBody = function renderBody(body) {
  return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>Hello</title>\n        <link rel="stylesheet" href="/assets/index.css" />\n      </head>\n      \n      <body>\n        <div id="root">' + body + '</div>\n      </body>\n      <script src="bundle.js"></script>\n    </html>\n  ';
};

server.use(_express2.default.static(_path2.default.resolve(__dirname, 'dist')));
// server.get('/', (req, res) => {
//   match({ routes, location: req.url }, (err, redirect, props) => {
//     const body = renderToString(<RouterContext {...props} />);
//     res.send(renderBody(body));
//   });
// });
server.get('*', function (req, res) {
  res.render('index');
});

server.listen(PORT, function () {
  console.log('Express server running at localhost:' + PORT);
});
