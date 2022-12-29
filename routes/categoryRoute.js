const { createCategory, getCategory } = require('../controllers/categoryController')

const categoryRoute = require('express').Router()

categoryRoute.post('/', createCategory)
categoryRoute.get('/', getCategory)

module.exports = categoryRoute