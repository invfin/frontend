import { CookieStorage } from "../clientStorage";

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
    if (tokens !== undefined) {
      for (const [key, value] of Object.entries(tokens)) {
        CookieStorage.set(key, value["token"], value["expires"]);
      }
    }
  }
  static logInUser(result: UserResult["data"]): void {
    this.setResponseTokens(result.tokens);
    this.setUserInfo(result.username, result.photo);
  }
  static setUserInfo(username: string, photo: string): void {
    const value = JSON.stringify({ username: username, photo: photo });
    CookieStorage.set(userInfoKey, value);
  }
  static getUserInfo(): {
    username: string;
    photo: string;
    isLoggedIn: boolean;
  } {
    const userInfo = CookieStorage.get(userInfoKey);
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
  static removeAllTokens(): void {
    [
      refreshTokenKey,
      authenticationTokenKey,
      permissionTokenKey,
      sessionidKey
    ].map(key => CookieStorage.remove(key));
  }
  static getAuthToken(): string {
    const token = CookieStorage.get(authenticationTokenKey);
    if (token === undefined) {
      return undefined;
    }
    return token;
  }

  static checkKey(key: string, router, redirectTo: string): void {
    const cookie = CookieStorage.get(key);
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
