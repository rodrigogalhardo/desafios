"use strict";

const express = require('express')
const path = require('path')
const app = express()
const ENV = process.env.NODE_ENV || 'development'
const envPath = path.join(__dirname, `./config/env/${ENV}`)

require(envPath)(app)
require('./routes/')(app)

app.listen(app.get('port'), () => {
    console.info(':: Express server has been started ::')
    console.info(":: Listen::Port :: ", app.get('port'))
})

//template from: http://jobpress.wecookcode.com/demo/post-resume-form.html#0