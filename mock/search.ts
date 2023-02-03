import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/search",
    method: "get",
    response: ({ body, query }) => {
      console.log(body);
      console.log(query);
      return {
        success: true,
        data: {
          username: "admin",
          roles: ["admin"],
          accessToken: "eyJhbGciOiJIUzUxMiJ9.admin",
          refreshToken: "eyJhbGciOiJIUzUxMiJ9.adminRefresh",
          expires: "2023/10/30 00:00:00"
        }
      };
    }
  }
] as MockMethod[];
