import axios from "axios";

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: "https://round5-safarnia.huma-volve.com/api",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
    "Accept": "application/json",
  },
});

export default axiosInstance;
