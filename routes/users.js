const express = require('express')
const router = express.Router()
const db = require('../models/userModel')
const validationMiddleware = require('../middlewares/validationMiddleware')
const userController = require('../controllers/userController')

router.post('/', validationMiddleware, userController.createUser)

router.get('/', userController.getUsers)

router.get('/:id', userController.getUserById)

router.put('/:id', userController.updateUserById)

router.delete('/:id', userController.deleteUser)

module.exports = router