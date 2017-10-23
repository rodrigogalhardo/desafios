'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res) {
    return res.render('companies/dashboard/index', {
        title_page: 'Company dashboard'
    });
};