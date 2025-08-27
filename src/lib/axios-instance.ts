import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://round5-safarnia.huma-volve.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// add token if it available
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized, redirecting to login...");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
