import Cookies from "js-cookie";
import { storageSession } from "@pureadmin/utils";
import { useUserStoreHook } from "@/store/modules/user";
import { http } from "@/utils/http";

export interface DataInfo<T> {
  /** token */
  accessToken: string;
  /** `accessToken`的过期时间（时间戳） */
  expires: T;
  /** 用于调用刷新accessToken的接口时所需的token */
  refreshToken: string;
  /** 用户名 */
  username?: string;
  /** 当前登陆用户的角色 */
  roles?: Array<string>;
}

export const sessionKey = "user-info";
export const TokenKey = "authorized-token";

/** 获取`token` */
export function getToken(): DataInfo<number> {
  // 此处与`TokenKey`相同，此写法解决初始化时`Cookies`中不存在`TokenKey`报错
  return Cookies.get(TokenKey)
    ? JSON.parse(Cookies.get(TokenKey))
    : storageSession().getItem(sessionKey);
}

export function setToken(data: DataInfo<Date>) {
  let expires = 0;
  const { accessToken, refreshToken } = data;
  expires = new Date(data.expires).getTime();
  const cookieString = JSON.stringify({ accessToken, expires });

  expires > 0
    ? Cookies.set(TokenKey, cookieString, {
        expires: (expires - Date.now()) / 86400000
      })
    : Cookies.set(TokenKey, cookieString);

  function setSessionKey(username: string, roles: Array<string>) {
    useUserStoreHook().SET_USERNAME(username);
    useUserStoreHook().SET_ROLES(roles);
    storageSession().setItem(sessionKey, {
      refreshToken,
      expires,
      username,
      roles
    });
  }

  if (data.username && data.roles) {
    const { username, roles } = data;
    setSessionKey(username, roles);
  } else {
    const username =
      storageSession().getItem<DataInfo<number>>(sessionKey)?.username ?? "";
    const roles =
      storageSession().getItem<DataInfo<number>>(sessionKey)?.roles ?? [];
    setSessionKey(username, roles);
  }
}

/** 删除`token`以及key值为`user-info`的session信息 */
export function removeToken() {
  Cookies.remove(TokenKey);
  sessionStorage.clear();
}

/** 格式化token（jwt格式） */
export const formatToken = (token: string): string => {
  return "Bearer " + token;
};

interface AuthResponse {
  success: boolean;
  data: { token: string; expires: number };
}

const authenticationTokenKey = "auth";
const permissionTokenKey = "perm";
const sessionTokenKey = "sessionid";

function setCookie(
  key: string,
  authenticationToken: string,
  expires: number
): void {
  const cookieDict = { token: authenticationToken, exp: expires };
  const cookieString = JSON.stringify(cookieDict);
  Cookies.set(key, cookieString);
}

function getAuthResponse(key: string): void {
  const response = http.request<AuthResponse>("get", "/check-auth", {});
  response
    .then(data => {
      if (data.success) {
        setCookie(key, data.data.token, data.data.expires);
      }
    })
    .catch(err => {
      console.error(err);
    });
}

function checkKey(key: string): boolean {
  const cookieKey = Cookies.get(key);
  if (cookieKey === undefined) {
    getAuthResponse(key);
  }
  return true;
}

function checkLocalKeys(): void {
  // Check that the user has either the auth, the perm or both tokens
  // if it has one of them up to date we can assume that is legit, otherwise
  // call the server to verify everything
  checkKey(authenticationTokenKey);
  checkKey(permissionTokenKey);
  checkKey(sessionTokenKey);
}

export function checkAuth(to: toRouteType, router): void {
  checkLocalKeys();
  if (to.meta?.requiresRoles || to.meta?.requiresAuth) {
    const response = http.request<AuthResponse>("get", "/check-auth", {});
    response
      .then(data => {
        if (!data.data) {
          router.push({ name: "403" });
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
}
