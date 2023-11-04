const express = require('express')
const router = express.Router()

const User = require('../models/user-model.js')

//All admins route
router.get('/', (req, res) => {
    res.render('admin/index')
})

//New Admin Route
router.get('/new', (req, res) => {
    res.render('admin/new', {user: new User()})
})

//Create Admin Route
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router