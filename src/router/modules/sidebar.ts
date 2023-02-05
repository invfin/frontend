const Layout = () => import("@/layout/index.vue");

const sidebarRoutes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: "/home",
    meta: {
      icon: "homeFilled",
      title: "Inicio",
      rank: 0
    },
    children: [
      {
        path: "/home",
        name: "Inicio",
        component: () => import("@/views/welcome/index.vue"),
        meta: {
          title: "Inicio"
        }
      }
    ]
  },
  {
    path: "/explore",
    name: "Explorar",
    component: () => import("@/views/welcome/index.vue"),
    meta: {
      icon: "homeFilled",
      title: "Explorar",
      rank: 1
    }
  },
  {
    path: "/diccionario-financiero",
    name: "Términos",
    component: () => import("@/views/terms/index.vue"),
    meta: {
      icon: "homeFilled",
      title: "Términos",
      rank: 2
    }
  },
  {
    path: "/send-to",
    name: "youtube.com",
    component: () => import("@/views/terms/index.vue"),
    meta: {
      icon: "homeFilled",
      title: "reeee",
      rank: 2,
      requiresRoles: true
    }
  }
];

export default sidebarRoutes as Array<RouteConfigsTable>;
