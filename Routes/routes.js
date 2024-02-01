const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Controllers/Middlewares/jwtMiddleware')


// route for register
router.post('/register', userController.register)
// login
router.post('/login', userController.login)
// router specific middleware
// addproject
router.post('/add-project',jwtMiddleware, projectController.addProjects)



module.exports = router