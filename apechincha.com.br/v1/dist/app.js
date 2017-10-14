'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var ENV = process.env.NODE_ENV || 'development';
var envPath = _path2.default.join(__dirname, './config/env/' + ENV);

require(envPath)(app);
require('./routes/')(app);

app.listen(app.get('port'), function () {
    console.info('Express server has been started');
});