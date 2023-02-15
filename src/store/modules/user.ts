import { defineStore } from "pinia";
import { store } from "@/store";
import { userType } from "./types";
import { routerArrays } from "@/layout/types";
import { router, resetRouter } from "@/router";
import { getLogin, refreshTokenApi } from "@/api/user";
import { UserResult, RefreshTokenResult } from "@/api/user";
import { useMultiTagsStoreHook } from "@/store/modules/multiTags";
import Authorization from "@/utils/auth";

export const useUserStore = defineStore({
  id: "user",
  state: (): userType => ({
    username: Authorization.getUserInfo().username,
    photo: Authorization.getUserInfo().photo,
    isLoggedIn: Authorization.getUserInfo().isLoggedIn
  }),
  actions: {
    updateUserState(
      username: string,
      photo = "src/assets/general/anonymus.WebP"
    ) {
      this.isLoggedIn = username !== "Únete";
      this.username = username;
      this.photo = photo;
    },
    async logIn(data) {
      return new Promise<UserResult>((resolve, reject) => {
        getLogin(data)
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
      this.updateUserState("Únete");
      Authorization.removeAllTokens();
      useMultiTagsStoreHook().handleTags("equal", [...routerArrays]);
      resetRouter();
      router.push("/login");
    },
    /**`token` */
    async handRefreshToken() {
      return new Promise<RefreshTokenResult>((resolve, reject) => {
        refreshTokenApi({ username: this.usernmae })
          .then(data => {
            if (data) {
              Authorization.setResponseTokens(data.data.tokens);
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
