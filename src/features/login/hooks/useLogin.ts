/* eslint-disable @typescript-eslint/no-explicit-any */
import { API } from "../../../libs/api";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { ChangeEvent, useState } from "react";
import { AUTH_LOGIN } from "../../../store/RootReducer";


interface IUserLogin {
  email: string,
  password: string
}
export const useLogin = ()=>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState<IUserLogin>({
    email: "",
    password: ""
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    setForm({
      ...form,[e.target.value]: e.target.value
    })
  }

  async function handleLogin(){
    try {
      const response = await API.post("/auth/login", form)
      console.log(response.data);
      dispatch(AUTH_LOGIN(response?.data))
      navigate("/")
    } catch (error) {
      console.log(error);

    }
  }



  return {
    handleChange,
    handleLogin,
    form
  }
};
