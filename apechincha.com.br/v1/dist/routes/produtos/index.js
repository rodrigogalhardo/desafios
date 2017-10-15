'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _produtos = require('./../../services/produtos/');

var _produtos2 = _interopRequireDefault(_produtos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/', _produtos2.default);

module.exports = router;