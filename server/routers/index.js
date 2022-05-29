const { Router } = require('express')
const { newSubCategory, newCategory } = require('../controllers/category')
const { newDirector } = require('../controllers/director')
const { newMovie, getTopMovie } = require('../controllers/movie')
const { register } = require('../controllers/user')
const router = Router()

// Category
router.post('/new/subcategory', newSubCategory)
router.post('/new/category', newCategory)

// Director
router.post('/director/new', newDirector)

// User
router.post('/user/register', register)

// Film
router.post('/film/new', newMovie)
router.get('/film/get-top', getTopMovie)

module.exports = router