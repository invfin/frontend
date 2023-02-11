// import "@/utils/sso";
import NProgress from "@/utils/progress";
import { getConfig } from "@/config";
import Authorization, { checkAuthorization } from "@/utils/auth";
import { useMultiTagsStoreHook } from "@/store/modules/multiTags";
import { usePermissionStoreHook } from "@/store/modules/permission";
import {
  Router,
  createRouter,
  RouteRecordRaw,
  RouteComponent
} from "vue-router";
import {
  ascending,
  initRouter,
  getHistoryMode,
  findRouteByPath,
  handleAliveRoute,
  formatTwoStageRoutes,
  formatFlatteningRoutes
} from "./utils";
import { buildHierarchyTree } from "@/utils/tree";
import { isUrl, openLink } from "@pureadmin/utils";

import remainingRouter from "./modules/remaining";
import sidebarRoutes from "./modules/sidebar";
import errorRoutes from "./modules/error";

export const constantRoutes: Array<RouteRecordRaw> = formatTwoStageRoutes(
  formatFlatteningRoutes(buildHierarchyTree(ascending(sidebarRoutes)))
);

export const constantMenus: Array<RouteComponent> = ascending(
  sidebarRoutes
).concat(...remainingRouter);

export const remainingPaths = Object.keys(remainingRouter).map(v => {
  return remainingRouter[v].path;
});

// @ts-ignore
const routes = constantRoutes.concat(...(remainingRouter as any), errorRoutes);

export const router: Router = createRouter({
  history: getHistoryMode(),
  routes: routes,
  strict: true,
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      if (savedPosition) {
        return savedPosition;
      } else {
        if (from.meta.saveSrollTop) {
          const top: number =
            document.documentElement.scrollTop || document.body.scrollTop;
          resolve({ left: 0, top });
        }
      }
    });
  }
});

export function resetRouter() {
  router.getRoutes().forEach(route => {
    const { name, meta } = route;
    if (name && router.hasRoute(name) && meta?.backstage) {
      router.removeRoute(name);
      router.options.routes = formatTwoStageRoutes(
        formatFlatteningRoutes(buildHierarchyTree(ascending(routes)))
      );
    }
  });
  usePermissionStoreHook().clearAllCachePage();
}

const whiteList = ["/login"];

// Si ya ha iniciado sesión y tiene información de inicio de sesión,
// no puede saltar a la lista blanca de enrutamiento, sino permanecer en la página actual.
function toCorrectRoute(to: toRouteType, _from, next): void {
  whiteList.includes(to.fullPath) ? next(_from.fullPath) : next();
}

function manageAliveRoute(to: toRouteType, _from): void {
  if (to.meta?.keepAlive) {
    const newMatched = to.matched;
    handleAliveRoute(newMatched, "add");
    // Actualización general de la página y actualización de la pestaña del clic
    if (_from.name === undefined || _from.name === "Redirect") {
      handleAliveRoute(newMatched);
    }
  }
}

function refreshRoutes(to: toRouteType, _from, next): void {
  checkAuthorization(to, router);
  console.log("refreshRoutes");
  console.log(
    "************************************************************************************************"
  );
  if (
    // refrescar
    usePermissionStoreHook().wholeMenus.length === 0 &&
    to.path !== "/login"
  )
    initRouter().then((router: Router) => {
      if (!useMultiTagsStoreHook().getMultiTagsCache) {
        const { path } = to;
        const route = findRouteByPath(path, router.options.routes[0].children);
        // query、params模式路由传参数的标签页不在此处处理
        if (route && route.meta?.title) {
          useMultiTagsStoreHook().handleTags("push", {
            path: route.path,
            name: route.name,
            meta: route.meta
          });
        }
      }
      router.push(to.fullPath);
    });
  toCorrectRoute(to, _from, next);
}

function setPageTitle(to: toRouteType, externalLink: boolean): void {
  if (!externalLink) {
    to.matched.some(item => {
      if (!item.meta.title) return "";
      const Title = getConfig().Title;
      if (Title) document.title = `${item.meta.title} | ${Title}`;
      else document.title = item.meta.title as string;
    });
  }
}

router.beforeEach((to: toRouteType, _from, next) => {
  manageAliveRoute(to, _from);
  const userInfo = Authorization.getUserInfo();
  NProgress.start();
  const externalLink = isUrl(to?.name as string);
  setPageTitle(to, externalLink);
  if (userInfo) {
    // checkAuthorization(to, router);
    if (_from?.name) {
      // el nombre es un hipervínculo
      if (externalLink) {
        openLink(to?.name as string);
        NProgress.done();
      } else {
        toCorrectRoute(to, _from, next);
      }
    } else {
      refreshRoutes(to, _from, next);
    }
  } else {
    // if user isn't logged it, do something
    console.log("next");
    console.log(
      "************************************************************************************************"
    );
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
