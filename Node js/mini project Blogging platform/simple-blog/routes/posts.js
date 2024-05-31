const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Show all posts
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.render('index', { posts });
});

// Form to create new post
router.get('/new', (req, res) => {
    res.render('new');
});

// Create new post
router.post('/', async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.redirect('/posts');
});

// Show single post
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('show', { post });
});

// Form to edit post
router.get('/:id/edit', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('edit', { post });
});

// Update post
router.post('/:id', async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/posts/${req.params.id}`);
});

// Delete post
router.post('/:id/delete', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/posts');
});

module.exports = router;
