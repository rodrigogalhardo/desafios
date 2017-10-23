import express from 'express'
import cadidate from './../../services/candidate/'
import cadidate_dashboard from './../../services/candidate/dashboard/'


const router = express.Router()
router.get('/resume/new', cadidate)
router.get('/dashboard/me/:id', cadidate_dashboard)

module.exports = router