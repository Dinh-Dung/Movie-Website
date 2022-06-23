const { Router } = require('express')
const auth = require('../controllers/auth')
const router = Router()

// Auth
router.post('/signup', auth.register)
router.post('/login', auth.login)
router.post('/users',auth.getUsers)

module.exports = router 