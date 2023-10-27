import { useQuery } from "@tanstack/react-query";
import { API } from "../../../libs/api";

export const useFetchThreads = () => {
  const { data: threads, isLoading,refetch} = useQuery({
    queryFn: async () => {
      const dataThreads = await API.get("/threads");
      return dataThreads;
    },
    queryKey: ['fetch.threads'],
  });
  return {
    data: threads,
    isLoading,
    refetch
  };
};