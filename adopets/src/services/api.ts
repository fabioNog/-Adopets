import axios from 'axios';

const api = axios.create({
  baseURL: 'https://test.adopets.app/v1/auth/session-request',
});

export default api;