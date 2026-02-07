// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:2000';

export const API_ENDPOINTS = {
  // Auth
  AUTH_LOGIN: '/api/auth/login',
  AUTH_SIGNUP: '/api/auth/signup',
  AUTH_ME: '/api/auth/me',

  // Dashboard
  DASHBOARD: '/api/dashboard/',

  // Files
  FILES_LIST: '/api/files/list',
  FILES_UPLOAD: '/api/files/upload',
  FILES_DELETE: (fileId: string) => `/api/files/${fileId}`,
  FILES_DOWNLOAD: (fileId: string) => `/api/files/${fileId}/download`,

  // Charts
  CHARTS_LIST: '/api/charts',
  CHARTS_CREATE: '/api/charts',
  CHARTS_AUTOGEN: '/api/charts/autogen',
  CHARTS_GET: (chartId: string) => `/api/charts/${chartId}`,
  CHARTS_DELETE: (chartId: string) => `/api/charts/${chartId}`,
  CHARTS_DOWNLOAD: (chartId: string) => `/api/charts/${chartId}/download`,
  CHARTS_UPDATE: (chartId: string) => `/api/charts/${chartId}`,
};

export const getApiUrl = (endpoint: string): string => {
  return `${API_BASE_URL}${endpoint}`;
};
