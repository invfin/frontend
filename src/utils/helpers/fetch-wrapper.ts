import { useAuthStore } from '@/stores/auth';

interface temp {
  method: string;
  headers: Record<string, string>;
  body?: string | FormData;
}

export type Result<T> = { message: string; data: null } | { message: null; data: T };

export async function get<T>(url: string): Promise<Result<T>> {
  return request('GET', url);
}

export async function post<T>(url: string, body: object): Promise<Result<T>> {
  return request('POST', url, body);
}

export async function put<T>(url: string, body: object): Promise<Result<T>> {
  return request('PUT', url, body);
}

export async function delete_<T>(url: string): Promise<Result<T>> {
  return request('DELETE', url);
}

async function request<T>(method: string, url: string, body?: object): Promise<Result<T>> {
  const requestOptions: temp = {
    method,
    headers: authHeader()
  };
  if (body) {
    // Check if body is an instance of FormData
    if (body instanceof FormData) {
      requestOptions.body = body;
      // Do not set Content-Type header for FormData
    } else {
      requestOptions.headers['Content-Type'] = 'application/json';
      requestOptions.body = JSON.stringify(body);
    }
  }

  return fetch(`${import.meta.env.VITE_API_URL}/${url}`, requestOptions)
    .then((response) => handleResponse<T>(response))
    .catch((error) => {
      return { message: (error as Error).message, data: null };
    });
}

function authHeader(): Record<string, string> {
  // return auth header with jwt if user is logged in
  const { user } = useAuthStore();
  return user.anonymous ? {} : { Authorization: `Bearer ${user.token}` };
}

async function handleResponse<T>(response: Response): Promise<Result<T>> {
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const { user, logout } = useAuthStore();
      if ([401, 403].includes(response.status) && user) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        logout();
      }
      const error: string = (data && data.message) || response.statusText;
      return { data: null, message: error };
    }

    return { data: data, message: null };
  });
}
