import axios from "axios";
const env = import.meta.env;
import { useSessionStore } from "../store/Session.store";
const authApi = axios.create({
  baseURL: env.VITE_URL_BACKEND,
  withCredentials: true,
});
authApi.interceptors.request.use((config) => {
  config.headers = {
    Authorization: useSessionStore.getState().token,
  };
  return config;
});
export default authApi;
