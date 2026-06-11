import axios from 'axios';
import { Platform } from 'react-native';

// Get the current local Wi-Fi IP address of the development machine.
// This is needed for physical devices (Android/iOS) to connect to the local backend.
const DEV_IP = '192.168.43.165';

let BASE_URL = 'http://localhost:8000';

// Check if running in a browser environment (Web)
if (Platform.OS === 'web') {
  // If we are on web, use the browser's current hostname dynamically
  if (typeof window !== 'undefined' && window.location) {
    BASE_URL = `http://${window.location.hostname}:8000`;
  } else {
    BASE_URL = 'http://localhost:8000';
  }
} else {
  // If running on a physical mobile device or emulator
  // Android emulator uses 10.0.2.2, physical devices use the machine's IP on the same Wi-Fi network.
  // We will default to the current development machine IP.
  BASE_URL = `http://${DEV_IP}:8000`;
}

console.log('[API] Configured Base URL:', BASE_URL);

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 60000, // 60 seconds for heavy ml predictions
  headers: {
    'Content-Type': 'application/json',
    'Accept':       'application/json',
  },
});

export default api;
