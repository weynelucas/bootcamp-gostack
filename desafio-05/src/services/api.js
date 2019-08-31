import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  auth: {
    username: process.env.REACT_APP_API_USER,
    password: process.env.REACT_APP_API_PASS,
  },
});

export default api;
