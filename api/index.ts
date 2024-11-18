import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const axiosConfig = {
  baseURL: 'https://api-server.us-east-1.prod.mosaicapp.com',
  headers: {
    Authorization: process.env.MOSAIC_API_KEY,
    Origin: process.env.DOMAIN
  },
  // .. other options
}

const api = axios.create(axiosConfig);

export default api;