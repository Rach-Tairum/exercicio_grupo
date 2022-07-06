import IPost from "../interfaces/postsReturn"
import postsModel from '../models/post.model'

const getAllPosts = async (): Promise<IPost[]> => {
  const allPosts = await postsModel.getAll();

  return allPosts
}

export default {
  getAllPosts
}