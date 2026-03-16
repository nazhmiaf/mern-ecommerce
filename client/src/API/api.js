import axios from 'axios';

const customAPI = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default customAPI;
