export interface IThreads {
  content: string;
  createdAt: string;
  id: number;
  image: string;
  updateAt: string;
  user: IUser
}

interface IUser {
  createdAt: string
  email:string
  fullname: string
  id: number
  password: string
  profile_description: string
  profile_picture: string
  username: string
}
