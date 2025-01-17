'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalPortalDestination = function (_React$Component) {
  _inherits(ModalPortalDestination, _React$Component);

  function ModalPortalDestination() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ModalPortalDestination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalPortalDestination.__proto__ || Object.getPrototypeOf(ModalPortalDestination)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.onDiv = function (container) {
      if (!_this.state.container) {
        _this.setState({ container: container });
        _this.props.onRef(container);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ModalPortalDestination, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var container = this.state.container;

      if (container && container.parentNode) {
        // IE lacks element.remove() ...
        container.parentNode.removeChild(container);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          ariaProps = _props.ariaProps;


      if (this.props.frozenContent) {
        return _react2.default.createElement('div', _extends({
          className: className,
          role: 'dialog',
          'aria-modal': true
        }, ariaProps, {
          dangerouslySetInnerHTML: { __html: this.props.frozenContent }
        }));
      }

      return _react2.default.createElement('div', _extends({
        className: className,
        role: 'dialog',
        'aria-modal': true
      }, ariaProps, {
        ref: this.onDiv
      }));
    }
  }]);

  return ModalPortalDestination;
}(_react2.default.Component);

exports.default = ModalPortalDestination;
module.exports = exports['default'];