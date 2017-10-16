import express from 'express'
import produtos from './../../services/produtos/'
import detalhes_produtos from './../../services/produtos/detalhe_produto'

const router = express.Router()
router.get('/', produtos)
router.get('/:id/detalhes', detalhes_produtos)

module.exports = router