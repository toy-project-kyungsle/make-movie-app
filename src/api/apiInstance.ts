import axios from 'axios';

const apiInstance = axios.create({
  baseURL: `https://yts.mx/api/v2`,
  headers: {
    'Content-type': 'application/json',
  },
  maxRedirects: 0,
  timeout: 200000,
});

export default apiInstance;
