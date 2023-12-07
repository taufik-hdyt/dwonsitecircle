import axios from "axios";
export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1"
});


// set header yang membutuhkan Authorization token seperti Threads, dll
// kecuali login dan register
// setAuthtoken ini di get ketika login
export function setAuthToken(token: string){
  if(token){
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`
  }else {
    delete API.defaults.headers.common["Authorization"]
  }
}


