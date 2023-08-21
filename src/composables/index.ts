import { User, Visit } from "@/types";

export const useUser = (): globalThis.Ref<User | void> => useState('user', () => { });

export const useVisits = (): globalThis.Ref<{ [key: string]: Visit }> => useState('visits', () => ({}));

