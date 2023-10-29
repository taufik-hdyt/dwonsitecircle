import { useMutation } from "@tanstack/react-query";
import { API } from "../../../libs/api";
import { ICreateThread } from "../../../interface/thread.interface";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePostThread = ({onSuccess,onError}: any)=>{
 return useMutation({
    mutationFn: async (body: ICreateThread)=> {
      await API.post("/thread", body, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjk4NDEzMDIzLCJleHAiOjE2OTg5MTMwMjN9.jbzCl-y1YFHbK4agebqmRogFkWUZh740nBhb49A7yAY"
        }
      })
    },
    onSuccess,
    onError
  });
};
