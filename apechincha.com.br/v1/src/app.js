import path from 'path'
import express from 'express'


const app = express()
const ENV = process.env.NODE_ENV || 'development'
const envPath = path.join(__dirname, `./config/env/${ENV}`)

require(envPath)(app)
require('./routes/')(app)

app.listen(app.get('port'), () => {
    console.info('Express server has been started')
})