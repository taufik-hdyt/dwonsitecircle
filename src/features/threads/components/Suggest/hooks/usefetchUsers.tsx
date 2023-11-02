import { useQuery } from "@tanstack/react-query";
import { API } from "../../../../../libs/api";

export const useFetchUsersSuggest = () => {
  const { data: users, isLoading,refetch} = useQuery({
    queryFn: async () => {
      const dataUsers = await API.get("/suggest-users");
      return dataUsers.data

    },
    queryKey: ['fetch.users'],
  });
  return {
    data: users,
    isLoading,
    refetch
  };
};
