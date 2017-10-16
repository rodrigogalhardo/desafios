'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _produtos = require('./../../services/produtos/');

var _produtos2 = _interopRequireDefault(_produtos);

var _detalhe_produto = require('./../../services/produtos/detalhe_produto');

var _detalhe_produto2 = _interopRequireDefault(_detalhe_produto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/', _produtos2.default);
router.get('/:id/detalhes', _detalhe_produto2.default);

module.exports = router;