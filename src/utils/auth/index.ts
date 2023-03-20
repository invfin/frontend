import { CookieStorage } from "../clientStorage";

import {
  refreshTokenKey,
  authenticationTokenKey,
  permissionTokenKey,
  sessionidKey,
  userInfoKey
} from "./constants";

import { TokensResult, UserResult } from "./types";

export class User {
  username = "Únete";
  image = "src/assets/general/anonymus.WebP";
  isLoggedIn = false;
  tokens: TokensResult;

  updateStatus(
    username: string,
    image: string,
    isLoggedIn: boolean,
    tokens: TokensResult
  ): void {
    this.username = username;
    this.image = image;
    this.isLoggedIn = isLoggedIn;
    this.tokens = tokens;
  }
  setUserInfoCookies(): void {
    const value = JSON.stringify({
      username: this.username,
      photo: this.image
    });
    CookieStorage.set(userInfoKey, value);
  }
}

export default class Authorization {
  static setResponseTokens(tokens: TokensResult): void {
    if (tokens !== undefined) {
      for (const [key, value] of Object.entries(tokens)) {
        CookieStorage.set(key, value["token"], value["expires"]);
      }
    }
  }
  static logInUser(result: UserResult["data"]): void {
    const user = new User();
    this.setResponseTokens(result.tokens);
    user.setUserInfoCookies();
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
