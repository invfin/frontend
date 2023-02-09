import Cookies from "js-cookie";
import { storageSession } from "@pureadmin/utils";
import { useUserStoreHook } from "@/store/modules/user";

const refreshTokenKey = "refresh";
const authenticationTokenKey = "auth";
const permissionTokenKey = "perm";
const sessionidKey = "sessionid";

export default class Authorization {
  static setToken(key: string, value: string, expires: number): void {
    Cookies.set(key, value, { expires: expires });
    storageSession();
    useUserStoreHook();
  }
  static removeToken(key: string): void {
    Cookies.remove(key);
  }
  static getToken(key: string): String {
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
  Authorization.checkAuthorization(to, router);
}
