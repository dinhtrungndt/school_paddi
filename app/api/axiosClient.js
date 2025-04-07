import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosClient = (contentType = 'application/json') => {
  const axiosClient = axios.create({
    // baseURL: 'https://api.dinhtrungndt.id.vn/',
    baseURL: 'http://172.16.10.103:8080/', // home (T)
  });

  axiosClient.interceptors.request.use(
    async config => {
      const token = await AsyncStorage.getItem('token');
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': contentType,
      };
      return config;
    },
    err => Promise.reject(err),
  );

  axiosClient.interceptors.response.use(
    res => res.data,
    err => Promise.reject(err),
  );
  return axiosClient;
};

export default AxiosClient;
