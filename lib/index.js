'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalRoute = exports.ModalLink = exports.ModalContainer = exports.Modal = undefined;

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

var _modal_container = require('./modal_container');

var _modal_container2 = _interopRequireDefault(_modal_container);

var _modal_link = require('./modal_link');

var _modal_link2 = _interopRequireDefault(_modal_link);

var _modal_route = require('./modal_route');

var _modal_route2 = _interopRequireDefault(_modal_route);

require('./polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Modal = _modal2.default;
exports.ModalContainer = _modal_container2.default;
exports.ModalLink = _modal_link2.default;
exports.ModalRoute = _modal_route2.default;
exports.default = { Modal: _modal2.default, ModalContainer: _modal_container2.default, ModalLink: _modal_link2.default, ModalRoute: _modal_route2.default };