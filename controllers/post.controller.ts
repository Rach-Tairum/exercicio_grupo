import express, { Request, Response } from 'express';
import postsServices from '../services/post.service'

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const posts = await postsServices.getAllPosts()
  return res.status(200).json(posts);
}

export default {
  getAll
}