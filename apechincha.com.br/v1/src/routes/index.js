module.exports = (app) => {
    app.use('/', require('./landing'))
    app.use('/produtos', require('./produtos'))
}