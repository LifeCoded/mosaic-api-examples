import axios from "axios";

const axiosConfig = {
    baseURL : 'https://api-server.us-east-1.prod.mosaicapp.com/api/',
    headers: {
      // Authorization: {api_key},
      // Origin: {domain}
    }, 
    // .. other options
  }

const api = axios.create(axiosConfig);

export default api;