const Post = require('../models/Mug.model')

const createPost = async (req, res) => {
    try {
        const post = new Post(req.body)
        const resp = await post.save()
        return res.json({
            message: 'Post was created successfully',
            detail: resp
        })
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const getPosts = async (req, res) => {
    try {
        const resp = await Post.find()
        return res.json({
            message: "Posts",
            detail: resp
        })
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

module.exports = { createPost, getPosts }