import express from 'express';
import postController from './controllers/post.controller'

const routers = express.Router();

routers.get('/posts', postController.getAll)

export default routers;