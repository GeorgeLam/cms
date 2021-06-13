import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

const {validateInput} = require('../helpers/validation');

export const PostController = {
    //GET
    singlePost: async (req, res) => {
        try{
            const id = parseInt(req.params.id);

            const query = await prisma.post.findUnique({
                where: {
                    id
                },
                include: {
                    comments: true
                }
            }) ?? {};
            return res.json(query);
        } catch(e){
            console.log(e);
            return res.json({error: 'Undefined error occurred...'});
        }
    },
    allPosts: async (req, res) => {
        try{
            const query = await prisma.post.findMany();
            res.json(query);
        } catch(e){
            console.log(e);
            return res.json({error: 'Undefined error occurred...'});
        }
    },

    //POST
    submitPost: async (req, res) => {
        let errors = validateInput('post', req.body, null, true);
        if(errors) return res.json({error: errors});

        let {title, content, blogId, authorId} = req.body;

        try{
            const insertion = await prisma.post.create({
                data: {
                    title,
                    content,
                    blogId,
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
    editPost: async (req, res) => {
        let errors = validateInput('post', req.body);
        if(errors) return res.json({error: errors});

        let postId = +req.params.id;

        try{
            let result = await prisma.post.update({
                where: {
                    id: postId
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
    deletePost: async (req, res) => {

        try{
            let postId = +req.params.id;

            let result = await prisma.post.delete({
                where: {
                    id: postId
                }
            })

            res.status(200).json({message: `You have deleted the post with ID ${req.params.id}`})
        } catch(e){
            console.log(e);
            return res.status(400).json({error: 'Undefined error occurred...'});
        }

    }
}