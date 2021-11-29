import axios from 'axios';
import {Platform} from 'react-native';

const ip = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';

const axiosInstance = axios.create({
  baseURL: `http://${ip}:3000`,
});

export default axiosInstance;
