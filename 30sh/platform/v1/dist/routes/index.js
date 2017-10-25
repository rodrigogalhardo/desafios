'use strict';

module.exports = function(app) {
    app.use('/', require('./landing'));
    app.use('/candidate', require('./candidate'));
    app.use('/employee', require('./companies'));
};