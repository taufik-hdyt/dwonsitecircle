import { useMutation } from "@tanstack/react-query";
import { API } from "../../libs/api";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useLike = ({onSuccess, id}: any)=>{
 return useMutation({
    mutationFn: async ()=> {
      await API.post(`thread/${id}/like`,"", {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjk4NDEzMDIzLCJleHAiOjE2OTg5MTMwMjN9.jbzCl-y1YFHbK4agebqmRogFkWUZh740nBhb49A7yAY"
        }
      })
    },
    onSuccess,

  });
};
