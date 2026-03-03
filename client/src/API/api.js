import axios from 'axios';

const customAPI = axios.create({
  baseURL: '/api/v1',
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default customAPI;
