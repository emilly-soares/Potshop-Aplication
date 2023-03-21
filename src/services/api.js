
import axios from 'axios';

import { getToken } from './auth';

const api = axios.create({
   baseURL: 'https://potshop-7c3u06k0u-marcelinogarcia-na.vercel.app/',
});

api.interceptors.request.use(async config => {
   const token = getToken();
   console.log(config, token);

   if (token) {
      config.headers.Authorization = `Bearer ${token}`;
   }
   return config;
});

export default api;
