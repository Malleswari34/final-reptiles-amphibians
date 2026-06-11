import axios from 'axios';
import { Platform } from 'react-native';

const DEV_IP = '192.168.43.165';

let BASE_URL = 'http://localhost:8000';

if (Platform.OS === 'web') {
  if (typeof window !== 'undefined' && window.location) {
    BASE_URL = `http://${window.location.hostname}:8000`;
  } else {
    BASE_URL = 'http://localhost:8000';
  }
} else {
  BASE_URL = `http://${DEV_IP}:8000`;
}

console.log('[API] Configured Base URL:', BASE_URL);

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default api;
