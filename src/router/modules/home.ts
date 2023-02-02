const Layout = () => import("@/layout/index.vue");

export default {
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
      name: "Welcome",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: "Bienvenido"
      }
    }
  ]
} as RouteConfigsTable;
