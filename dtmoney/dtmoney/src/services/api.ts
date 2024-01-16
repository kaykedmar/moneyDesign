// config axios
import axios from 'axios';

export const api = axios.create({ 
  // baseURL e a parte fixa do URL
  baseURL:  'http://localhost:3000/api', 
  
})