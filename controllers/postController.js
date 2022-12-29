const Post = require('../models/postModel')

// create post
exports.createPost = async (req, res, next) => {
    const { title, body, username, category, photo } = req.body
    try {
        const post = await Post.create({
            title,
            body,
            username,
            category,
            photo,
        });

        res.status(201).json({
            message: 'Your post is created!',
            post
        })
    } catch (error) {
        res.status(401).json({
            message: "you can't create a post"
        })
    }
}

// get all post
exports.getAllPost = async (req, res, next) => {
    const { username, category } = req.query
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username })
        } else if (category) {
            posts = await Post.find({ category: { $in: [category] } })
        } else {
            posts = await Post.find();
        }
        res.status(200).json({
            message: "All post is here",
            posts
        })
    } catch (error) {
        res.status(401).json({
            message: "something went wrong",
            error
        })
    }
}

// update post 
exports.updatePost = async (req, res, next) => {
    const postId = req.params.postId
    try {
        const post = await Post.findById(postId)
        if (!post) {
            return res.status(404).json({
                message: "Post not found!"
            })
        }

        const postUpdated = await Post.findByIdAndUpdate(postId, req.body, { new: true })
        res.status(200).json({
            message: "post updated succesfull",
            postUpdated
        })

    } catch (error) {
        res.status(401).json({
            message: "you can't update your post"
        })
    }
}

// delete post 
exports.deletePost = async (req, res, next) => {
    const postId = req.params.postId
    try {
        const post = await Post.findById(postId)
        if (!post) {
            return res.status(404).json({
                message: "Post not found!"
            })
        }

        await Post.findByIdAndDelete(postId)
        res.status(200).json({
            message: "post deleted succesfully!"
        })

    } catch (error) {
        res.status(401).json({
            message: "you can't delete the post"
        })
    }
}