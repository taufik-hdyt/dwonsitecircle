export interface IUser {
  createdAt: string
  email:string
  fullname: string
  id: number
  password: string
  profile_description: string
  profile_picture: string
  username: string
}

export interface IRegister {
  email:string
  fullname: string
  password: string
}

export interface ILogin{
  email:string
  password: string
}


