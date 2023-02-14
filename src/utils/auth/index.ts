import Cookies from "js-cookie";

import {
  refreshTokenKey,
  authenticationTokenKey,
  permissionTokenKey,
  sessionidKey,
  userInfoKey
} from "./constants";

import { TokensResult, UserResult } from "./types";

export default class Authorization {
  static setResponseTokens(tokens: TokensResult): void {
    for (const [key, value] of Object.entries(tokens)) {
      this.setToken(key, value["token"], value["expires"]);
    }
  }
  static logInUser(result: UserResult["data"]): void {
    this.setResponseTokens(result.tokens);
    this.setUserInfo(result.username, result.photo);
  }
  static setUserInfo(username: string, photo: string): void {
    const value = JSON.stringify({ username: username, photo: photo });
    this.setToken(userInfoKey, value);
  }
  static getUserInfo(): {
    username: string;
    photo: string;
    isLoggedIn: boolean;
  } {
    const userInfo = this.getToken(userInfoKey);
    if (userInfo === undefined) {
      return {
        username: "Únete",
        photo: "src/assets/general/anonymus.WebP",
        isLoggedIn: false
      };
    }
    const result = JSON.parse(userInfo);
    result["isLoggedIn"] = true;
    return result;
  }
  static setToken(
    key: string,
    value: string,
    expires?: number,
    path = "/",
    domain = "localhost",
    secure = true,
    sameSite: "strict" | "Strict" | "lax" | "Lax" | "none" | "None" = "strict"
  ): void {
    Cookies.set(key, value, {
      expires: expires,
      path: path,
      domain: domain,
      secure: secure,
      sameSite: sameSite
    });
  }
  static removeToken(key: string): void {
    Cookies.remove(key);
  }
  static removeAllTokens(): void {
    [
      refreshTokenKey,
      authenticationTokenKey,
      permissionTokenKey,
      sessionidKey
    ].map(key => this.removeToken(key));
  }
  static getAuthToken(): string {
    const token = Cookies.get(authenticationTokenKey);
    if (token === undefined) {
      return undefined;
    }
    return token;
  }
  static getToken(key: string): string {
    return Cookies.get(key);
  }
  static checkKey(key: string, router, redirectTo: string): void {
    const cookie = this.getToken(key);
    if (cookie === undefined) {
      router.push({ name: redirectTo });
    }
  }
  static checkRefreshToken(to: toRouteType, router): void {
    if (to.meta?.requiresRoles) {
      this.checkKey(refreshTokenKey, router, "login");
    }
  }
  static checkPermissions(to: toRouteType, router): void {
    if (to.meta?.requiresRoles) {
      this.checkKey(permissionTokenKey, router, "403");
    }
  }
  static checkAuthentication(to: toRouteType, router): void {
    if (to.meta?.requiresAuth) {
      this.checkKey(authenticationTokenKey, router, "login");
    }
  }
  static checkSessionid(to: toRouteType, router): void {
    this.checkKey(sessionidKey, router, to.path);
  }
  static checkAuthorization(to: toRouteType, router): void {
    // this.checkSessionid(to, router);
    this.checkPermissions(to, router);
    this.checkAuthentication(to, router);
    this.checkRefreshToken(to, router);
  }
}

export const formatToken = (token: string): string => {
  return `Bearer ${token}`;
};

export function checkAuthorization(to: toRouteType, router): void {
  Authorization.checkAuthorization(to, router);
}
