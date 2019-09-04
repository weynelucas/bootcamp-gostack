import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  auth: {
    username: 'weynelucas',
    password: 'q1ju3c20',
  },
});

export default api;
