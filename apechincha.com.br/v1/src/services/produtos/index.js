export default (req, res) => {
    return res.render('produtos/index', {
        title: 'Lista de Ofertas',
        title_page: 'Produtos'
    })
}