import { defineStore } from "pinia";
import { store } from "@/store";
import { cacheType } from "./types";
import { constantMenus } from "@/router";
import { ascending, filterTree, filterNoPermissionTree } from "@/router/utils";

export const usePermissionStore = defineStore({
  id: "pure-permission",
  state: () => ({
    constantMenus,
    wholeMenus: [],
    cachePageList: []
  }),
  actions: {
    handleWholeMenus(routes: any[]) {
      this.wholeMenus = filterNoPermissionTree(
        filterTree(ascending(this.constantMenus.concat(routes)))
      );
    },
    cacheOperate({ mode, name }: cacheType) {
      switch (mode) {
        case "add":
          this.cachePageList.push(name);
          this.cachePageList = [...new Set(this.cachePageList)];
          break;
        case "delete":
          // eslint-disable-next-line no-case-declarations
          const delIndex = this.cachePageList.findIndex(v => v === name);
          delIndex !== -1 && this.cachePageList.splice(delIndex, 1);
          break;
      }
    },
    clearAllCachePage() {
      this.wholeMenus = [];
      this.cachePageList = [];
    }
  }
});

export function usePermissionStoreHook() {
  return usePermissionStore(store);
}
