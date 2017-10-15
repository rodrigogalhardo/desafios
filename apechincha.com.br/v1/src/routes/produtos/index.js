import express from 'express'
import produtos from './../../services/produtos/'

const router = express.Router()
router.get('/', produtos)

module.exports = router