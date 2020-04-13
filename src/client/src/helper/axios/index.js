import axios from "axios";
import { useSelector } from "react-redux";
// import config from "";

export default (token='') => {
  const axiosApp = axios.create({
    baseURL: process.env.API_URL,
    timeout: 3000,
    headers: { "x-auth-token": token },
  });
  return axiosApp;
};
