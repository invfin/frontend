import { defineStore } from 'pinia';
import { router } from '@/router';
import { post } from '@/utils/helpers/fetch-wrapper';
import type { User } from '@/interfaces';

function setDefaultState(localStorage: Storage): User {
  const userLocalStorage = localStorage.getItem('user');
  if (userLocalStorage === null) {
    return { username: '', token: '', anonymous: true, image: '/inversorinteligente.svg' };
  }
  const user = JSON.parse(userLocalStorage);
  if (user === null) {
    return { username: '', token: '', anonymous: true, image: '/inversorinteligente.svg' };
  }
  return user;
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    user: setDefaultState(localStorage),
    returnUrl: null
  }),
  actions: {
    async login(email: string, password: string) {
      const result = await post<User>('login', { email, password });
      if (result.message === null) {
        const user = result.data;
        user.anonymous = false;
        user.image = '/inversorinteligente.svg';

        // update pinia state
        this.user = user;
        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        // redirect to previous url or default to home page
        router.push(this.returnUrl || '/dashboard/default');
      }
      return result.message;
    },
    async register(username: string, email: string, password: string) {
      const result = await post<User>('register', { username, email, password });
      if (result.message === null) {
        const user = result.data;
        user.anonymous = false;
        //TODO: delete once we get the image from the server
        user.image = '/inversorinteligente.svg';

        // update pinia state
        this.user = user;
        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        // redirect to previous url or default to home page
        router.push(this.returnUrl || '/dashboard/default');
      }
      return result.message;
    },
    logout() {
      this.user = { username: '', token: '', anonymous: true, image: '/inversorinteligente.svg' };
      localStorage.removeItem('user');
      router.push('/auth/login');
    }
  }
});
