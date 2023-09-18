import axios from "axios";

const api = axios.create({
  baseURL: "YOUR_API_BASE_URL",
});

// Add a request interceptor to include the access token in the request headers
api.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => Promise.reject(error)
);

// Add a response interceptor to handle token expiration and refresh
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      // Attempt to refresh the token
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        try {
          const refreshedToken = await refreshAccessToken(refreshToken);

          // Store the new access token
          localStorage.setItem("accessToken", refreshedToken);

          // Retry the original request
          originalRequest.headers["Authorization"] = `Bearer ${refreshedToken}`;
          return axios(originalRequest);
        } catch (refreshError) {
          // Handle refresh error (e.g., redirect to login)
          console.error("Error refreshing token:", refreshError);
        }
      } else {
        // Handle no refresh token (e.g., redirect to login)
      }
    }

    return Promise.reject(error);
  }
);

const refreshAccessToken = async refreshToken => {
  // Send a request to your server to refresh the access token using the refresh token
  // Return the new access token received from the server
};

export default api;
