'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _candidate = require('./../../services/candidate/');

var _candidate2 = _interopRequireDefault(_candidate);

var _dashboard = require('./../../services/candidate/dashboard/');

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/resume/new', _candidate2.default);
router.get('/dashboard/me/:id', _dashboard2.default);

module.exports = router;