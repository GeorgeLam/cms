const express = require('express')
const router = express.Router()

import {PostController} from '../controllers/PostController';

try{
    router.get('/', (req, res) => PostController.allPosts(req, res));
    router.get('/:id', (req, res) => PostController.singlePost(req, res));
    router.get('/:id/comments', (req, res) => PostController.commentsOnPost(req, res));
    
    router.post('/', (req, res) => PostController.submitPost(req, res));
    router.put('/:id', (req, res) => PostController.editPost(req, res));
    router.delete('/:id', (req, res) => PostController.deletePost(req, res));
} catch(e){
    console.error(e);
}

module.exports = router;