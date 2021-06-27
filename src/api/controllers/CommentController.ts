import { PrismaClient, Prisma } from '@prisma/client';
import express from 'express';
const prisma = new PrismaClient();

const {validateInput} = require('../helpers/validation');

export const CommentController = {
    //GET
    singleComment: async (req: express.Request, res: express.Response) => {
        try{
            const id = parseInt(req.params.id);

            const query: {} = await prisma.comment.findUnique({
                where: {
                    id
                }
            }) ?? {};
            return res.json(query);
        } catch(e){
            console.log(e);
            return res.json({error: 'Undefined error occurred...'});
        }
    },
    allComments: async (req: express.Request, res: express.Response) => {
        try{
            const query: {} = await prisma.comment.findMany();
            res.json(query);
        } catch(e){
            console.log(e);
            return res.json({error: 'Undefined error occurred...'});
        }
    },

    //POST
    submitComment: async (req: express.Request, res: express.Response) => {
        let errors: [] = validateInput('comment', req.body, null, true);
        if(errors) return res.json({error: errors});

        let {content, postId, authorId} = req.body;

        try{
            const insertion: {} = await prisma.comment.create({
                data: {
                    content,
                    postId,
                    authorId
                }
            })

            res.status(200).json(insertion);
        } catch(e){
            console.log(e);
            return res.status(400).json({error: 'Undefined error occurred...'});
        }
    },

    //PUT
    editComment: async (req: express.Request, res: express.Response) => {
        let errors: [] = validateInput('comment', req.body);
        if(errors) return res.json({error: errors});

        let commentId = +req.params.id;

        try{
            let result: {} = await prisma.comment.update({
                where: {
                    id: commentId
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
    deleteComment: async (req: express.Request, res: express.Response) => {

        try{
            let commentId = +req.params.id;

            let result = await prisma.comment.delete({
                where: {
                    id: commentId
                }
            })

            res.status(200).json({message: `You have deleted the comment with ID ${req.params.id}`})
        } catch(e){
            console.log(e);
            return res.status(400).json({error: 'Undefined error occurred...'});
        }
    }
}