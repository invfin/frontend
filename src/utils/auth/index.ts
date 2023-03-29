import { CookieStorage } from "../clientStorage";

import {
  refreshTokenKey,
  authenticationTokenKey,
  permissionTokenKey,
  sessionidKey,
  userInfoKey
} from "./constants";

import { TokensInfo, UserInfo } from "@/utils/auth/types";

export class User {
  username = "Únete";
  image = "src/assets/general/anonymus.WebP";
  isLoggedIn = false;
  tokens = {} as TokensInfo;
  constructor() {
    this.checkStorage();
  }

  checkStorage(): void {
    this.checkStorageUserInfo();
    this.checkStorageUserTokens();
  }
  checkStorageUserInfo(): boolean {
    const baseUserInfo = CookieStorage.get(userInfoKey);
    try {
      const userInfo = JSON.parse(baseUserInfo);
      this.username = userInfo["username"];
      this.image = userInfo["image"];
      this.isLoggedIn = true;
      return true;
    } catch {
      return false;
    }
  }
  checkStorageUserTokens(): void {
    [
      refreshTokenKey,
      authenticationTokenKey,
      permissionTokenKey,
      sessionidKey
    ].map(key => this.setToken(key, CookieStorage.get(key)));
  }

  setToken(token: string, value: string): void {
    this.tokens[token] = value;
  }

  needsRefreshTokens(): boolean {
    return !this.isLoggedIn
      ? this.isLoggedIn
      : parseInt(this.tokens.refresh.expires) > 0;
  }

  logIn(response: UserInfo): void {
    this.saveUserInfo(response);
    this.setUserInfoCookies();
  }
  saveUserInfo(response: UserInfo): void {
    this.username = response.username;
    this.image = response.image;
    this.isLoggedIn = true;
    this.tokens = response.tokens;
  }
  setUserInfoCookies(): void {
    const value = JSON.stringify({
      username: this.username,
      image: this.image
    });
    CookieStorage.set(userInfoKey, value);
  }
}

export default class Authorization {
  static setResponseTokens(tokens: TokensInfo): void {
    if (tokens !== undefined) {
      for (const [key, value] of Object.entries(tokens)) {
        CookieStorage.set(key, value.token, value.expires);
      }
    }
  }
  static logInUser(result: UserInfo): User {
    this.setResponseTokens(result.tokens);
    const user = new User();
    user.logIn(result);
    return user;
  }
  static removeAllTokens(): void {
    [
      userInfoKey,
      refreshTokenKey,
      authenticationTokenKey,
      permissionTokenKey,
      sessionidKey
    ].map(key => CookieStorage.remove(key));
  }
  static getAuthToken(): string {
    return CookieStorage.get(authenticationTokenKey);
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
