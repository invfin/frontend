import { defineStore } from "pinia";
import { store } from "@/store";
import { userType } from "./types";
import { routerArrays } from "@/layout/types";
import { router, resetRouter } from "@/router";
import {
  getLogin,
  getRegister,
  refreshTokenApi,
  RegisterResult,
  UserResult,
  RefreshTokenResult
} from "@/api/user";
import { useMultiTagsStoreHook } from "@/store/modules/multiTags";
import Authorization, { User } from "@/utils/auth";

export const useUserStore = defineStore({
  id: "user",
  state: (): userType => ({
    username: Authorization.getUserInfo().username,
    photo: Authorization.getUserInfo().photo,
    isLoggedIn: Authorization.getUserInfo().isLoggedIn,
    user: Authorization.getUserInfo()
  }),
  actions: {
    async logIn(data) {
      return new Promise<UserResult>((resolve, reject) => {
        getLogin(data)
          .then(data => {
            if (data.success) {
              this.user = Authorization.logInUser(data.data);
              resolve(data);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    async register(data) {
      return new Promise<RegisterResult>((resolve, reject) => {
        getRegister(data)
          .then(data => {
            if (data.success) {
              this.updateUserState(data.data.username, data.data.photo);
              Authorization.logInUser(data.data);
              resolve(data);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    logOut() {
      this.user = new User();
      Authorization.removeAllTokens();
      useMultiTagsStoreHook().handleTags("equal", [...routerArrays]);
      resetRouter();
      router.push("/login");
    },
    redirectRegister() {
      router.push("register");
    },
    /**`token` */
    async handRefreshToken() {
      return new Promise<RefreshTokenResult>((resolve, reject) => {
        refreshTokenApi({ username: this.username })
          .then(data => {
            console.log(data.data);
            if (data) {
              Authorization.setResponseTokens(data.data);
              resolve(data);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
});

export function useUserStoreHook() {
  return useUserStore(store);
}
