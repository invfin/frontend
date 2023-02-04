import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/search",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [
          {
            path: "/home",
            meta: {
              icon: "homeFilled",
              title: "Inicio"
            }
          },
          {
            path: "/explore",
            meta: {
              icon: "homeFilled",
              title: "Explorar"
            }
          },
          {
            path: "/diccionario-financiero",
            meta: {
              icon: "homeFilled",
              title: "Términos"
            }
          }
        ]
      };
    }
  }
] as MockMethod[];
