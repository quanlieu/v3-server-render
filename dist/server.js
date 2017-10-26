'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _routes = require('./app/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 3000;
var server = (0, _express2.default)();
var renderBody = function renderBody(body) {
  return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>Hello</title>\n      </head>\n      \n      <body>\n        <div id="root">' + body + '</div>\n      </body>\n      <script src="/bundle.js"></script>\n    </html>\n  ';
};

server.use(_express2.default.static(_path2.default.resolve(__dirname)));
server.get('/', function (req, res) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
    var body = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
    res.send(renderBody(body));
  });
});

server.get('*', function (req, res) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
    var body = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
    res.send(renderBody(body));
  });
});
// server.get('*', (req, res) => {
//   res.render('index');
// });

server.listen(PORT, function () {
  console.log('Express server running at localhost:' + PORT);
});