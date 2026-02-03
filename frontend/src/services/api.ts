/// <reference types="vite/client" />

// API configuration
const API_BASE_URL = (import.meta.env.VITE_API_URL as string) || 'http://localhost:8000';

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/api/login`,
  LOGOUT: `${API_BASE_URL}/api/logout`,
  GET_USER: `${API_BASE_URL}/api/user`,
  DASHBOARD: `${API_BASE_URL}/api/dashboard`,
  ATTENDANCES: `${API_BASE_URL}/api/attendances`,
  QR_CODE: `${API_BASE_URL}/api/qr-code`,
  PROFILE: `${API_BASE_URL}/api/profile`,
};

// Token management
const TOKEN_KEY = 'auth_token';

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

// Fetch wrapper with authentication
export const apiFetch = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> => {
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(endpoint, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    // Token expired or invalid
    removeToken();
    window.location.href = '/';
  }

  return response;
};

// API methods
export const apiClient = {
  // Auth endpoints
  login: async (email: string, password: string) => {
    const response = await apiFetch(API_ENDPOINTS.LOGIN, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok && data.token) {
      setToken(data.token);
    }
    return { ok: response.ok, data };
  },

  logout: async () => {
    const response = await apiFetch(API_ENDPOINTS.LOGOUT, {
      method: 'POST',
    });
    removeToken();
    return { ok: response.ok };
  },

  getUser: async () => {
    const response = await apiFetch(API_ENDPOINTS.GET_USER);
    const data = await response.json();
    return { ok: response.ok, data };
  },

  // Student endpoints
  getDashboard: async () => {
    const response = await apiFetch(API_ENDPOINTS.DASHBOARD);
    const data = await response.json();
    return { ok: response.ok, data };
  },

  getAttendances: async () => {
    const response = await apiFetch(API_ENDPOINTS.ATTENDANCES);
    const data = await response.json();
    return { ok: response.ok, data };
  },

  getQrCode: async () => {
    const response = await apiFetch(API_ENDPOINTS.QR_CODE);
    const data = await response.json();
    return { ok: response.ok, data };
  },

  getProfile: async () => {
    const response = await apiFetch(API_ENDPOINTS.PROFILE);
    const data = await response.json();
    return { ok: response.ok, data };
  },

  updateProfile: async (profileData: Record<string, unknown>) => {
    const response = await apiFetch(API_ENDPOINTS.PROFILE, {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
    const data = await response.json();
    return { ok: response.ok, data };
  },
};

export default apiClient;
