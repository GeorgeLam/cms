const express = require('express')
const router = express.Router()

import {UserController} from '../controllers/UserController';

try{
    router.get('/', (req, res) => UserController.allUsers(req, res));
    router.get('/:id', (req, res) => UserController.singleUser(req, res));
    router.get('/:id/comments', (req, res) => UserController.commentsByUser(req, res));
    
    router.post('/', (req, res) => UserController.createUser(req, res));
    router.put('/:id', (req, res) => UserController.editUser(req, res));
    router.delete('/:id', (req, res) => UserController.deleteUser(req, res));
} catch(e){
    console.error(e);
}

module.exports = router;