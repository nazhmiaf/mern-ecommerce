import axios from 'axios';

const customAPI = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default customAPI;
