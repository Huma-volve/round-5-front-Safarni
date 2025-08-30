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
    // Don't redirect for auth-related endpoints
    // const authEndpoints = ['login', 'register', 'forgot-password', 'reset-password', 'otp'];
    // const isAuthEndpoint = authEndpoints.some(endpoint => 
    //   error.config?.url?.includes(endpoint)
    // );
    
    if (error.response && error.response.status === 401 /*&& !isAuthEndpoint*/) {
      console.error("Unauthorized, redirecting to login...");
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
