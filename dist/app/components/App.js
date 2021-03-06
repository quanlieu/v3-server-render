'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'text-center' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/admin' },
          'Admin'
        ),
        '---',
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/admin/one' },
          'Admin One'
        ),
        '---',
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/admin/two' },
          'Admin Two'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/user' },
          'User'
        ),
        '---',
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/user/one' },
          'User One'
        ),
        '---',
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/user/two' },
          'User Two'
        ),
        this.props.children
      );
    }
  }]);

  return App;
}(_react2.default.PureComponent);

exports.default = App;