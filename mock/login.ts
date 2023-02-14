import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/login",
    method: "post",
    response: ({ body }) => {
      if (body.username === "admin") {
        return {
          success: true,
          data: {
            username: "admin",
            photo: "https://avatars.githubusercontent.com/u/44761321?v=4",
            tokens: {
              refresh: {
                token: "eyJhbGciOiJIUzUxMiJ9.adminRefresh",
                expires: 2
              },
              auth: { token: "eyJhbGciOiJIUzUxMiJ9.auth", expires: 2 },
              perm: { token: "eyJhbGciOiJIUzUxMiJ9.perm", expires: 2 },
              sessionid: { token: "eyJhbGciOiJIUzUxMiJ9.sessionid", expires: 2 }
            }
          }
        };
      } else {
        return {
          success: true,
          data: {
            username: "common",
            tokens: {
              refresh: {
                token: "eyJhbGciOiJIUzUxMiJ9.commonRefresh",
                expires: 2
              },
              auth: { token: "eyJhbGciOiJIUzUxMiJ9.commonauth", expires: 2 },
              perm: { token: "eyJhbGciOiJIUzUxMiJ9.commonperm", expires: 2 },
              sessionid: {
                token: "eyJhbGciOiJIUzUxMiJ9.commonsessionid",
                expires: 2
              }
            }
          }
        };
      }
    }
  }
] as MockMethod[];
