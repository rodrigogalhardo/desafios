"use strict";

var express = require('express');
var path = require('path');
var app = express();
var ENV = process.env.NODE_ENV || 'development';
var envPath = path.join(__dirname, './config/env/' + ENV);

require(envPath)(app);
require('./routes/')(app);

app.listen(app.get('port'), function () {
    console.info(':: Express server has been started ::');
    console.info(":: Listen::Port :: ", app.get('port'));
});

//template from: http://jobpress.wecookcode.com/demo/post-resume-form.html#0