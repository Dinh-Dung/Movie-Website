const { Router } = require('express')
const { newSubCategory, newCategory,getCategory } = require('../controllers/category')
const { newDirector } = require('../controllers/director')
const { newMovie, getTopMovie,showFilm} = require('../controllers/movie')
const { register } = require('../controllers/user')
const {mostView,getMostView} = require('../controllers/mostview')
const router = Router()

// Category
router.post('/new/subcategory', newSubCategory)
router.post('/new/category', newCategory)
router.get('/nav/category',getCategory)

// Director
router.post('/director/new', newDirector)

// User
router.post('/user/register', register)

// Film
router.post('/film/new', newMovie)
router.get('/film/get-top', getTopMovie)

//showfilm
router.get('/showfilm/film',showFilm)

//mostfilm
router.post('/mostview/new',mostView)
router.get('/mostview/film',getMostView)

module.exports = router 