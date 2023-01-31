import axios from "axios";

export type profileResponse = {
  username: string;
  email: string;
  id: string;
  password: string;
  city: string;
};

export const getProfileCall = () => {
  const token = localStorage.getItem("token");
  // I need a premium account to mock put request
  return axios.get<profileResponse>(`${import.meta.env.VITE_API_LINK}/user/1`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const putProfileCall = (data: {
  username: string;
  email: string;
  city: string;
  password?: string;
}) => {
  const token = localStorage.getItem("token");
  // I need a premium account to mock put request
  return axios.post<profileResponse>(
    `${import.meta.env.VITE_API_LINK}/user`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
