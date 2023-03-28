import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/register",
    method: "post",
    response: ({ body }) => {
      if (body.username === "admin") {
        return {
          success: true,
          data: {
            username: "admin",
            image: "https://avatars.githubusercontent.com/u/44761321?v=4",
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
      } else if (body.email === "admin@gmail.com") {
        return {
          success: false,
          data: {
            errors: {
              email: "Email already in use"
            }
          }
        };
      } else {
        return {
          success: false,
          data: {
            errors: {
              username: "Username already in use"
            }
          }
        };
      }
    }
  }
] as MockMethod[];
