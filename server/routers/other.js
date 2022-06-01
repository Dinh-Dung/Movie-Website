const { Router } = require('express')
const { newSubCategory, newCategory,getCategory } = require('../controllers/category')
const { newDirector } = require('../controllers/director')
const { newMovie, getTopMovie,getFilm,deleteMovie} = require('../controllers/movie')
const {mostView,getMostView} = require('../controllers/mostview')
const router = Router()

// Category
router.post('/new/subcategory', newSubCategory)
router.post('/new/category', newCategory)
router.get('/nav/category',getCategory)

// Director
router.post('/director/new', newDirector)

// Film
router.post('/film/new', newMovie)
router.delete('/film/:id', deleteMovie)
router.get('/film', getFilm)
router.get('/film/get-top', getTopMovie)

//showfilm


//mostfilm
router.post('/mostview/new',mostView)
router.get('/mostview/film',getMostView)

module.exports = router 