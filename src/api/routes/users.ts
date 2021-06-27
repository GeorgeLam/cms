import express from 'express';
const router = express.Router()

import {UserController} from '../controllers/UserController';

try{
    router.get('/', (req: express.Request, res: express.Response) => UserController.allUsers(req, res));
    router.get('/:id', (req: express.Request, res: express.Response) => UserController.singleUser(req, res));
    router.get('/:id/comments', (req: express.Request, res: express.Response) => UserController.commentsByUser(req, res));
    
    router.post('/', (req: express.Request, res: express.Response) => UserController.createUser(req, res));
    router.put('/:id', (req: express.Request, res: express.Response) => UserController.editUser(req, res));
    router.delete('/:id', (req: express.Request, res: express.Response) => UserController.deleteUser(req, res));
} catch(e){
    console.error(e);
}

module.exports = router;