// api.ts
import axios, {AxiosInstance} from 'axios';

const baseURL = 'http://192.168.1.5:6000'; // Thay đổi URL thành địa chỉ API của bạn

const AxiosInstances: AxiosInstance = axios.create({
  baseURL,
  responseType: 'json',
  timeout: 5000,
  withCredentials: true,
});

export default AxiosInstances;
