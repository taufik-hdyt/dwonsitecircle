import { setAuthToken } from '../../libs/api';
import { IUser } from './../../interface/user.interface';
import {createSlice} from '@reduxjs/toolkit'

const initialState : IUser ={
  id: 0,
  email:"",
  fullname: "",
  password: "",
  createdAt: '',
  profile_description: "",
  profile_picture:"",
  username: ""
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    AUTH_LOGIN: (_,action)=> {
      const payload = action.payload
      console.log(payload);
      setAuthToken(payload.token)
    }
  }
})
