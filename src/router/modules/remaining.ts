export default [
  {
    path: "/auth",
    component: () => import("@/layout/Auth/index.vue"),
    meta: {
      icon: "homeFilled",
      title: "redireccion",
      showLink: false,
      rank: 104
    },
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/login/index.vue"),
        meta: {
          title: "Ingreso",
          showLink: false,
          rank: 101
        }
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("@/views/register/index.vue"),
        meta: {
          title: "Registro",
          showLink: false,
          rank: 101
        }
      }
    ]
  },
  {
    path: "/redirect",
    component: () => import("@/layout/index.vue"),
    meta: {
      icon: "homeFilled",
      title: "redireccion",
      showLink: false,
      rank: 104
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "Redirect",
        component: () => import("@/layout/redirect.vue")
      }
    ]
  }
] as Array<RouteConfigsTable>;
