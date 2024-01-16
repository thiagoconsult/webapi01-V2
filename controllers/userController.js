const userModel = require('../models/userModel')

createUser = (req, res) => {
    let user = req.body
    res.status(201).json(userModel.insertUser(user))
}

getUsers = (req, res) => {
    res.status(200).json(userModel.findUsers())
}

getUserById = (req, res) => {
    let id = req.params.id
    res.status(200).json(userModel.findUser(id))
}

updateUserById = (req, res) => {
    let id = req.params.id
    let user = req.body
    res.status(200).json(userModel.updateUser(id, user))
}

deleteUser = (req, res) => {
    let id = req.params.id
    res.status(200).json(userModel.deleteUser(id))
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUser
}