import axios from 'axios';
import { Platform } from 'react-native';

// ─── BASE URL ────────────────────────────────────────────────────────────────
// Now our backend is live on Railway! 🚀
// ─────────────────────────────────────────────────────────────────────────────
const IP_URL      = 'http://192.168.1.5:8000';
const RAILWAY_URL = 'https://final-reptiles-amphibians-production.up.railway.app';

// ── Use IP_URL for local development (phone/web) 🚀 ──
export const BASE_URL = RAILWAY_URL;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 60000, // 60 seconds for heavy ml predictions
  headers: {
    'Content-Type': 'application/json',
    'Accept':       'application/json',
  },
});

export default api;
