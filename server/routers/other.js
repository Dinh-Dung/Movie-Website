const { Router } = require('express')
const { newSubCategory, newCategory,getCategory,deleteCategory, editCategory,getCategory1} = require('../controllers/category')
const { newDirector } = require('../controllers/director')
const{getUsers,deleteUsers, editUsers} =require('../controllers/auth')
const { newMovie, getTopMovie,getFilm,deleteMovie,editMovie } = require('../controllers/movie')
const {mostView,getMostView} = require('../controllers/mostview')
const router = Router()

// Category
router.post('/new/subcategory', newSubCategory)
router.post('/new/category', newCategory)
router.get('/nav/category',getCategory)
router.get('/main/category',getCategory1)
router.delete('/delete/category/:id',deleteCategory )
router.put('/category',editCategory)
// Director
router.post('/director/new', newDirector)

// Film
router.post('/film/new', newMovie)
router.put('/film', editMovie)
router.delete('/film/:id', deleteMovie)
router.get('/film', getFilm)
router.get('/film/get-top', getTopMovie)

//users
router.get('/users', getUsers)
router.delete('/users/:id', deleteUsers)
router.put ('/users',editUsers)

//mostfilm
router.post('/mostview/new',mostView)
router.get('/mostview/film',getMostView)

module.exports = router 