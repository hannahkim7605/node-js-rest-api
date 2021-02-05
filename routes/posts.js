const express = require('express');
const router = express.Router();
const Post = require('../models/Post')


// Get all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json( {message: error} );
    }
});

// Submits a post
router.post('/', async (req, res) => {
    // console.log(req.body); // npm install body-parser

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(error) {
        res.json({ message: error});
    }
    

    // // Save it to DB
    // post.save()
    //     .then(data => {
    //         res.json(data); // to see it on screen
    //     })
    //     .catch(error => {
    //         res.json({ message: error });
    //     });

});

// Get a specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json( {message:error} );
    }
});

// Delete a Post

router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne( {_id:req.params.postId} );
        res.json(removedPost);
    } catch (error) {
        res.json( {message:error} );
    }
});

// Update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id:req.params.postId},
            {$set: {"title":req.body.title}}
            );
        res.json(updatedPost);
    } catch (error) {
        res.json({message: error});
    }
})

module.exports = router;