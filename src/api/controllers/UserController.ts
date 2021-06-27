import { PrismaClient, Prisma } from '@prisma/client';
import express from 'express';
const prisma = new PrismaClient();

const {validateInput} = require('../helpers/validation');

export const UserController = {
    //GET
    singleUser: async (req: express.Request, res: express.Response) => {
        try{
            const id = parseInt(req.params.id);

            const query = await prisma.user.findUnique({
                where: {
                    id
                },
                include: {
                    posts: true,
                    blogs: true
                }
            }) ?? {};
            return res.json(query);
        } catch(e){
            console.log(e);
            return res.json({error: 'Undefined error occurred...'});
        }
    },
    allUsers: async (req: express.Request, res: express.Response) => {
        try{
            const query = await prisma.user.findMany();
            res.json(query);
        } catch(e){
            console.log(e);
            return res.json({error: 'Undefined error occurred...'});
        }
    },
    commentsByUser: async (req: express.Request, res: express.Response) => {
        try{
            const id = parseInt(req.params.id);

            const query = await prisma.comment.findMany({
                where: {
                    authorId: id
                }
            }) ?? {};
            return res.json(query);
        } catch(e){
            console.log(e);
            return res.json({error: 'Undefined error occurred...'});
        }
    },

    //POST
    createUser: async (req: express.Request, res: express.Response) => {
        let errors = validateInput('user', req.body, null, true);
        if(errors) return res.json({error: errors});

        let {email, forename, surname, url} = req.body;

        try{
            const insertion = await prisma.user.create({
                data: {
                    email, 
                    forename, 
                    surname, 
                    url
                }
            })

            res.status(200).json(insertion);
        } catch(e){
            console.log(e);
            return res.status(400).json({error: 'Undefined error occurred...'});
        }
    },

    //PUT
    editUser: async (req: express.Request, res: express.Response) => {
        let errors = validateInput('user', req.body);
        if(errors) return res.json({error: errors});

        let id = +req.params.id;

        try{
            let result = await prisma.user.update({
                where: {
                    id
                },
                data: req.body
            })

            res.status(200).json(result);
        } catch(e){
            console.log(e);
            return res.status(400).json({error: 'Undefined error occurred...'});
        }
    },

    //DELETE
    deleteUser: async (req: express.Request, res: express.Response) => {

        try{
            let id = +req.params.id;

            let result = await prisma.user.delete({
                where: {
                    id
                }
            })

            res.status(200).json({message: `You have deleted the user with ID ${req.params.id}`})
        } catch(e){
            console.log(e);
            return res.status(400).json({error: 'Undefined error occurred...'});
        }

    }
}