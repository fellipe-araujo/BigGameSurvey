import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ds1-fellipe.herokuapp.com',
});

export default api;