import axios from "axios";
import config from "../config";

// Api service file for creating an axios baseUrl
const axiosInstance = axios.create({
  baseURL: config.baseURL,
});

export default axiosInstance;
