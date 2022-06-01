<<<<<<< HEAD
module.exports = {
    auth: require('./auth'),
    other: require('./other')
} 
=======
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
>>>>>>> 74b2496d18c3a9d1cbfff178ce3bebf2e26812cc
