import { Pool, ResultSetHeader, RowDataPacket } from "mysql2";
import IPost from "../interfaces/postsReturn";
import conection from "./conection";

const getAll = async (): Promise<IPost[]> => {
  const [result] = await conection.execute<RowDataPacket[]>('SELECT * FROM Posts');

  return result as IPost[]
}

export default {
  getAll
};