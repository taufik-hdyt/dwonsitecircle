import { useMutation } from "@tanstack/react-query";
import { API } from "../../../libs/api";

interface ILogin{
  email: string
  password: string
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePostLogin = ({onSuccess,onError}: any)=>{
 return useMutation({
    mutationFn: async (body: ILogin)=> {
      await API.post("/auth/login", body)
    },
    onSuccess,
    onError
  });
};
