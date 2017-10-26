'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Admin = require('./components/Admin');

var _Admin2 = _interopRequireDefault(_Admin);

var _AdminOne = require('./components/AdminOne');

var _AdminOne2 = _interopRequireDefault(_AdminOne);

var _AdminTwo = require('./components/AdminTwo');

var _AdminTwo2 = _interopRequireDefault(_AdminTwo);

var _User = require('./components/User');

var _User2 = _interopRequireDefault(_User);

var _UserOne = require('./components/UserOne');

var _UserOne2 = _interopRequireDefault(_UserOne);

var _UserTwo = require('./components/UserTwo');

var _UserTwo2 = _interopRequireDefault(_UserTwo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _App2.default },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/admin', component: _Admin2.default },
    _react2.default.createElement(_reactRouter.Route, { path: '/admin/one', component: _AdminOne2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/admin/two', component: _AdminTwo2.default })
  ),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/user', component: _User2.default },
    _react2.default.createElement(_reactRouter.Route, { path: '/user/one', component: _UserOne2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/user/two', component: _UserTwo2.default })
  )
);