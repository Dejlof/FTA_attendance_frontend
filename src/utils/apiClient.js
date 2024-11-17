import axios from "axios";
import { Logger } from "./logger";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const authToken = sessionStorage.getItem("authToken");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      // If unauthorized, remove auth token and redirect to login page
      sessionStorage.removeItem("authToken");
      window.location.href = `${import.meta.env.VITE_BASE_URL}/login`;
    } else if (response.status === 200) {
      return { status: response.status, data: response.data };
    } else {
      return { status: response.status, data: response.data.detail };
    }
  },
  (error) => {
    console.error(error);
    if (error.response) {
      Logger.error("API request error:", error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      Logger.error("API request error:", error.request);
      return Promise.reject({ message: "Network error. Please try again!" });
    } else if (error.response.status === 401) {
      // If unauthorized, remove auth token and redirect to login page
      sessionStorage.removeItem("authToken");
      window.location.href = `${import.meta.env.VITE_BASE_URL}/login`;
    } else if (error.response.data) {
      Logger.error("Error:", error.response.data.title);
      return Promise.reject(error.response.data.title);
    } else {
      Logger.error("Other error:", error.message);
      return Promise.reject({
        message:
          error.message || "An error occurred while processing your request!",
      });
    }
  }
);

export const apiCall = async (method, url, data = {}, config = {}) => {
  try {
    const response = await apiClient({ method, url, data, ...config });
    return response;
  } catch (error) {
    throw error;
  }
};
