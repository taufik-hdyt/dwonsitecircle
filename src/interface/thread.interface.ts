import { IUser } from "./user.interface";

export interface IThreads {
  content: string;
  createdAt: string;
  id: number;
  image: string;
  updateAt: string;
  user: IUser
  likes: number
  replies: number
}

export interface ICreateThread {
  content: string
  image?: string
}


