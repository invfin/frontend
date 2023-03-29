import { http } from "@/utils/http";
import { TokensInfo, UserInfo } from "@/utils/auth/types";

type RequestResult = {
  success: boolean;
};

export type RegisterResult = RequestResult & {
  data: {
    user: UserInfo;
    errors: { username: string; email: string };
  };
};

export type TokensResult = RequestResult & {
  data: TokensInfo;
};

export type UserResult = RequestResult & {
  data: UserInfo;
};

export type RefreshTokenResult = RequestResult & {
  data: TokensResult;
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
