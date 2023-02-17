import { http } from "@/utils/http";

type TokensResult = {
  tokens: {
    refresh: { token: string; expires: string };
    auth: { token: string; expires: string };
    perm: { token: string; expires: string };
    sessionid: { token: string; expires: string };
  };
};

export type RegisterResult = {
  success: boolean;
  data: {
    username: string;
    photo: string;
    tokens: TokensResult;
    errors: { username: string; email: string };
  };
};

export type UserResult = {
  success: boolean;
  data: {
    username: string;
    photo: string;
    tokens: TokensResult;
  };
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    tokens: TokensResult;
  };
};

export function getRegister(data?: object) {
  return http.request<RegisterResult>("post", "/register", { data });
}

export const getLogin = (data?: object) => {
  return http.request<UserResult>("post", "/login", { data });
};

export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/refreshToken", { data });
};
