import express from 'express'
import detalhe_produto from './../../services/produtos/detalhe_produto'

const router = express.Router()
router.get('/produtos/item', detalhe_produto)

module.exports = router