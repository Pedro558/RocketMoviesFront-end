import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-rocketnotes-buub.onrender.com'
})