import { CookieRef } from "#app";
import { User, Visit } from "@/types";


export const useTheme = (): globalThis.Ref<string> => useState('user', () => "dark");

export const useUser = (): globalThis.Ref<User | void> => useState('user', () => { });

export const useVisits = (): globalThis.Ref<{ [key: string]: Visit }> => useState('visits', () => ({}));

export const useManageCookie = (name: string, maxAge: number): CookieRef<string | null | undefined> => useCookie(name, { sameSite: true, domain: useRuntimeConfig().public.domain, maxAge: maxAge });
