import { ChangeEvent, useState } from "react";
import { ILogin } from "../../../interface/user.interface";
import { API } from "../../../libs/api";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

export function useLogin() {
  const navigate = useNavigate();
  const toast = useToast();

  const [form, setForm] = useState<ILogin>({
    emailOrUsername: "",
    password: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleLogin() {
    try {
      const response = await API.post("/login", form);
      localStorage.setItem("token", response.data.token)
      toast({
        title: response?.data.message,
        status: "success",
        position: "top",
        duration: 1000
      });
      navigate('/')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast({
          title: error?.response?.data.message,
          status: "error",
          position: "top",
          duration: 1000
        });
      }
    }
  }

  return {
    handleChange,
    handleLogin,
    form,
  };
}