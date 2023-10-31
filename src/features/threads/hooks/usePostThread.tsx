import { useMutation } from "@tanstack/react-query";
import { API } from "../../../libs/api";
import { ICreateThread } from "../../../interface/thread.interface";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePostThread = ({onSuccess,onError}: any)=>{
 return useMutation({
    mutationFn: async (body: ICreateThread)=> {
      await API.post("/thread", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
    },
    onSuccess,
    onError
  });
};
