import Cookies from "js-cookie";
// import { useUserStoreHook } from "@/store/modules/user";
const refreshTokenKey = "refresh";
const authenticationTokenKey = "auth";
const permissionTokenKey = "perm";
const sessionidKey = "sessionid";
const userInfoKey = "userinfo";

type TokensResult = {
  tokens: {
    refresh: { token: string; expires: string };
    auth: { token: string; expires: string };
    perm: { token: string; expires: string };
    sessionid: { token: string; expires: string };
  };
};

export type UserResult = {
  success: boolean;
  data: {
    username: string;
    tokens: TokensResult;
  };
};

export default class Authorization {
  static setResponseTokens(tokens: TokensResult): void {
    for (const [key, value] of Object.entries(tokens)) {
      this.setToken(key, value["token"], value["expires"]);
    }
  }
  static getUserInfo(): UserResult["data"] {
    const userInfo = this.getToken(userInfoKey);
    // TODO Fix that. Retreive the data at some moment
    if (userInfo === undefined) {
      return undefined;
    }
    return JSON.parse(userInfo).data;
  }
  static setToken(
    key: string,
    value: string,
    expires: number,
    path = "/login",
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
  static getAuthToken(): TokensResult["tokens"]["auth"] {
    const token = Cookies.get(authenticationTokenKey);
    if (token === undefined) {
      return undefined;
    }
    return JSON.parse(token);
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
    this.checkSessionid(to, router);
    this.checkPermissions(to, router);
    this.checkAuthentication(to, router);
  }
}

export const formatToken = (token: string): string => {
  return `Bearer ${token}`;
};

export function checkAuthorization(to: toRouteType, router): void {
  console.log("checkAuthorization");
  Authorization.checkAuthorization(to, router);
}
