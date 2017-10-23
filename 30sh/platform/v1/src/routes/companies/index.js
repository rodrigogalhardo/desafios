import express from 'express'
import company_dashboard from './../../services/companies/dashboard/'

const router = express.Router();
router.get('/dashboard/employer/:id', company_dashboard);

module.exports = router;