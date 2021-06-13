const express = require('express')
const router = express.Router()

import {CommentController} from '../controllers/CommentController';

try{
    router.get('/', (req, res) => CommentController.allComments(req, res));
    router.get('/:id', (req, res) => CommentController.singleComment(req, res));
    
    router.post('/', (req, res) => CommentController.submitComment(req, res));
    router.put('/:id', (req, res) => CommentController.editComment(req, res));
    router.delete('/:id', (req, res) => CommentController.deleteComment(req, res));
} catch(e){
    console.error(e);
}

module.exports = router;