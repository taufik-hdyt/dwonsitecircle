import { ChangeEvent, useState } from "react";
import { IRegister } from "../../interface/user.interface";
import { API } from "../../libs/api";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

export function useRegister() {
  const navigate = useNavigate();
  const toast = useToast();
  const [form, setForm] = useState<IRegister>({
    email: "",
    fullname: "",
    password: "",
  });
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleRegister() {
    try {
      const response = await API.post("/register", form);
      navigate("/login");
      toast({
        title: response.data.message,
        status: "success",
        position: "top",
      });

    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast({
          title: error?.response?.data.message,
          status: "error",
          position: "top",
        });
      }
    }
  }

  return {
    handleChange,
    handleRegister,
    form,
  };
}
