import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/refreshToken",
    method: "post",
    response: ({ body }) => {
      if (body.refreshToken) {
        return {
          success: true,
          data: {
            accessToken: "eyJhbGciOiJIUzUxMiJ9.refAdmin",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.refAdminRefresh",
            expires: "2025/10/30 23:59:59"
          }
        };
      } else {
        return {
          success: true,
          data: {
            accessToken: "eyJhbGciOiJIUzUxMiJ9.newAdmin",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.newAdminRefresh",
            expires: "2025/10/30 23:59:59"
          }
        };
      }
    }
  }
] as MockMethod[];
