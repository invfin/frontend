import Cookies from "js-cookie";

export class SessionStorage {
  get(key: string): string {
    return sessionStorage.getItem(key);
  }
  set(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }
  remove(key: string): void {
    sessionStorage.removeItem(key);
  }
  clear(): void {
    sessionStorage.clear();
  }
}

export class CookieStorage {
  static get(key: string): string {
    return Cookies.get(key);
  }
  static set(
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
  static remove(key: string): void {
    Cookies.remove(key);
  }
}
