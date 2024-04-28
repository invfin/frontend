import { CookieRef } from "#app";


export const useTheme = (): globalThis.Ref<string> => useState('theme', () => "dark");

export const useUser = (): globalThis.Ref<User | void> => useState('user', () => { });

export const useVisits = (): globalThis.Ref<{ [key: string]: Visit }> => useState('visits', () => ({}));

export const useManageCookie = (name: string, maxAge: number): CookieRef<string | null | undefined> => useCookie(name, { sameSite: true, domain: ".example.com", maxAge: maxAge });
