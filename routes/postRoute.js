const { createPost, getAllPost, updatePost, deletePost } = require('../controllers/postController')
const { authMiddleware } = require('../middleware/auth')

const postRoute = require('express').Router()

postRoute.post('/', authMiddleware, createPost)
postRoute.get('/', getAllPost)
postRoute.put('/:postId', authMiddleware, updatePost)
postRoute.delete('/:postId', authMiddleware, deletePost)

module.exports = postRoute