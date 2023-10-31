import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "../../../libs/api";
import { ICreateThread } from "../../../interface/thread.interface";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useThreadReply = ({onSuccess,idThread}: any)=>{
 return useMutation({
    mutationFn: async (body: ICreateThread)=> {
      await API.post(`/thread/${idThread}/reply`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
    },

    onSuccess
  });
};
