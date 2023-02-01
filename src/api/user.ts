import { http } from "@/utils/http";

export type UserResult = {
  success: boolean;
  data: {
    username: string;
    roles: Array<string>;
    accessToken: string;
    refreshToken: string;
    expires: Date;
  };
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    accessToken: string;
    refreshToken: string;
    expires: Date;
  };
};

export const getLogin = (data?: object) => {
  return http.request<UserResult>("post", "/login", { data });
};

export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/refreshToken", { data });
};
