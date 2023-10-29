import { IUser } from "./user.interface";

export interface IThreads {
  content: string;
  createdAt: string;
  id: number;
  image: string;
  updateAt: string;
  user: IUser
  likes: ILike[]
  replies: IReplies[]
}

export interface ICreateThread {
  content: string
  image?: string
}

export interface ILike {
  createdAt: Date;
  id: number;
  updateAt: Date;
  user: IUser
}
export interface IReplies {
  content: string
  createdAt: Date
  id: number
  image: string
  updateAt: Date
}


