import { defineStore } from "pinia";
import { store } from "@/store";
import { userType } from "./types";
import { routerArrays } from "@/layout/types";
import { router, resetRouter } from "@/router";
import { getLogin, refreshTokenApi } from "@/api/user";
import { UserResult, RefreshTokenResult } from "@/api/user";
import { useMultiTagsStoreHook } from "@/store/modules/multiTags";
import Authorization from "@/utils/auth";

Authorization.getToken("");
export const useUserStore = defineStore({
  id: "user",
  state: (): userType => ({
    username: Authorization.getUserInfo()?.username ?? "Únete",
    isLoggedIn: false
  }),
  actions: {
    updateUserState(username: string) {
      if (username === "Únete") {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
      this.username = username;
    },
    async loginByUsername(data) {
      return new Promise<UserResult>((resolve, reject) => {
        getLogin(data)
          .then(data => {
            if (data) {
              this.updateUserState(data.data.username);
              Authorization.setResponseTokens(data.data.tokens);
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
    async handRefreshToken(data) {
      return new Promise<RefreshTokenResult>((resolve, reject) => {
        refreshTokenApi(data)
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
