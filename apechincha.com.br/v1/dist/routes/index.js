'use strict';

module.exports = function (app) {
    app.use('/', require('./landing'));
    app.use('/produtos', require('./produtos'));
};