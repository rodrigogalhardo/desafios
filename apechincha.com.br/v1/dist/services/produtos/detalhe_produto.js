'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res) {
    return res.render('produtos/detalhe_produto', {
        title: 'oferta :: produto 1',
        title_page: 'produto video cassete.'
    });
};