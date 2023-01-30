import axios from "axios";

export type loginResponse = {
  token: string;
};
export const logInCall = (credentials: { email: string; passWord: string }) => {
  // this will be a post request, but ill need a premium account to mock post requests
  // correct would be like this :
  //return axios.post(`${import.meta.env.VITE_API_LINK}/login`, credentials);
  console.log("test credentials", credentials);
  return axios.get<loginResponse[]>(`${import.meta.env.VITE_API_LINK}/login`);
};
