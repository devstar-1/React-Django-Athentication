import axios from "axios";

// Backend api base url
const baseUrl = "http://localhost:8000/api/";

// Axios instance for backend api
const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("token")
      ? "Token " + localStorage.getItem("token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
