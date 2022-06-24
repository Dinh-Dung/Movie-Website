const { Router } = require('express')
const auth = require('../controllers/auth')

const router = Router()
//auth
router.post('/signup', auth.register)
router.post('/login', auth.login)

module.exports = router 