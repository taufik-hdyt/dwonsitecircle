import { useQuery } from "@tanstack/react-query";
import { API } from "../../../libs/api";

export const useFetchDetailThread = (id:number) => {
  const { data: thread, isLoading,refetch} = useQuery({
    queryFn: async () => {
      const dataThreads = await API.get(`/thread/${id}`);
      return dataThreads;
    },
    queryKey: ['fetch.threads'],
  });
  return {
    data: thread,
    isLoading,
    refetch
  };
};
