'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res) {
    return res.render('candidate/dashboard/index', {
        title_page: 'Candidate dashboard'
    });
};