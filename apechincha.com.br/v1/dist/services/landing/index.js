'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res) {
    return res.render('landing/index', {
        title: 'Indexador de Produtos'
    });
};