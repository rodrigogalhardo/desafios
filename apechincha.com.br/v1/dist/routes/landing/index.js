'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _landing = require('./../../services/landing/');

var _landing2 = _interopRequireDefault(_landing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _landing2.default);

module.exports = router;