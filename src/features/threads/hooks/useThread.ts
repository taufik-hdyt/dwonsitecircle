import { ChangeEvent, useRef, useState, FormEvent } from "react";
import { ICreateThread } from "../../../interface/thread.interface";
import { API } from "../../../libs/api";
import { useQueryClient } from "@tanstack/react-query"
import {useToast} from '@chakra-ui/react'

export function useThreads() {
  const toast = useToast()
  const queryClient = useQueryClient();
  const [form, setForm] = useState<ICreateThread>({
    content: "",
    image: "",
  });

  async function handlePost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("content", form.content);
    formData.append("image", form.image as File);
    await API.post("/thread-post", formData)
      .then((res) => {
        console.log(res);
        queryClient.invalidateQueries({ queryKey: ["threads"] });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: err.data.response.message,
          status: "error",
          position: "top"
        })
      });
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = event.target;
    if (files) {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  }

  const fileInputRef = useRef<HTMLInputElement>(null);
  function handleButtonClick() {
    fileInputRef.current?.click();
  }

  return {
    form,
    handleChange,
    fileInputRef,
    handleButtonClick,
    handlePost,
  };
}
