module.exports = (app) => {
    app.use('/', require('./landing'))
    app.use('/produtos', require('./produtos'))
    app.use('/detalhe-produto', require('./produtos/detalhe_produto'))
}