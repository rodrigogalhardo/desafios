'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res) {
    return res.render('produtos/index', {
        title: 'Lista de Ofertas',
        title_page: 'Produtos'
    });
};