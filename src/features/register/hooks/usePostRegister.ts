import { useMutation } from "@tanstack/react-query";
import { API } from "../../../libs/api";
import { IRegister } from "../../../interface/user.interface";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePostRegister = ({onSuccess,onError}: any)=>{
 return useMutation({
    mutationFn: async (body: IRegister)=> {
      await API.post("/auth/register", body)
    },
    onSuccess,
    onError
  });
};
