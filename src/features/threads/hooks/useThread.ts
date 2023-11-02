import { ChangeEvent, useRef, useState, FormEvent } from "react";
import { ICreateThread } from "../../../interface/thread.interface";
import { API } from "../../../libs/api";


export function useThreads() {
  const [form, setForm] = useState<ICreateThread>({
    content: "",
    image: "",
  });

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

  };
}
