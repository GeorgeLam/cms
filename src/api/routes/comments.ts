import express from 'express';
const router = express.Router()

import {CommentController} from '../controllers/CommentController';

try{
    router.get('/', (req: express.Request, res: express.Response) => CommentController.allComments(req, res));
    router.get('/:id', (req: express.Request, res: express.Response) => CommentController.singleComment(req, res));
    
    router.post('/', (req: express.Request, res: express.Response) => CommentController.submitComment(req, res));
    router.put('/:id', (req: express.Request, res: express.Response) => CommentController.editComment(req, res));
    router.delete('/:id', (req: express.Request, res: express.Response) => CommentController.deleteComment(req, res));
} catch(e){
    console.error(e);
}

module.exports = router;