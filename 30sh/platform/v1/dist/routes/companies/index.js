'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dashboard = require('./../../services/companies/dashboard/');

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/dashboard/employer/:id', _dashboard2.default);

module.exports = router;