import { useQuery } from "@tanstack/react-query";
import { API } from "../../../libs/api";

export const useFetchThreads = () => {
  const { data: threads, isLoading, refetch} = useQuery({
    queryFn: async () => {
      const dataThreads = await API.get("/threads");
      console.log(dataThreads);
      
      return dataThreads; 
    },
    queryKey: ['threads'],
  });
  return {
    data: threads,
    isLoading,
    refetch
  };
};

