import express from 'express';
const router = express.Router()

import {PostController} from '../controllers/PostController';

try{
    router.get('/', (req: express.Request, res: express.Response) => PostController.allPosts(req, res));
    router.get('/:id', (req: express.Request, res: express.Response) => PostController.singlePost(req, res));
    router.get('/:id/comments', (req: express.Request, res: express.Response) => PostController.commentsOnPost(req, res));
    
    router.post('/', (req: express.Request, res: express.Response) => PostController.submitPost(req, res));
    router.put('/:id', (req: express.Request, res: express.Response) => PostController.editPost(req, res));
    router.delete('/:id', (req: express.Request, res: express.Response) => PostController.deletePost(req, res));
} catch(e){
    console.error(e);
}

module.exports = router;