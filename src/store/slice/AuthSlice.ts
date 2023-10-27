import {createSlice} from '@reduxjs/toolkit'
import { setAuthToken } from '../../libs/api'

interface IState{
  id: number
  fullname: string,
  password: string,
  email: string,
  username:string,
  profile_decription: string
  profile_picture: string
}
const initialState : IState = {
  id: 0,
  fullname: "",
  password:"",
  email: "",
  username:"",
  profile_decription:"",
  profile_picture: ""
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    AUTH_LOGIN: (_,action)=> {
      const payload = action.payload
      console.log(payload);
      setAuthToken(payload.token)
      localStorage.setItem("token", payload.token)

      const user : IState = {
        id: payload.id,
        email: payload.email,
        fullname: payload.fullname,
        password: payload.password,
        profile_decription: payload.profile_decription,
        profile_picture: payload.profile_picture,
        username: payload.usename
      }
      return user
    },
    AUTH_CHECK : (_,action)=> {
      const payload = action.payload
      const user : IState = {
        id: payload.id,
        email: payload.email,
        fullname: payload.fullname,
        password: payload.password,
        profile_decription: payload.profile_decription,
        profile_picture: payload.profile_picture,
        username: payload.usename
      }
      return user
    },
    AUTH_ERROR : ()=> {
      localStorage.removeItem("token")
    },
    AUTH_LOGOUT: ()=> {
      localStorage.removeItem("token")
    }
  }
})