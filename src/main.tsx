/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {  AxiosError } from "axios";
import toast, { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error: any)=> {
      if(error instanceof AxiosError) {
        if(error.response){
          error.message = error.response.data
        }
      }
      toast(error.message);
    }
  })
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Toaster />
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
