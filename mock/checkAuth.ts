import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/check-auth",
    method: "get",
    response: () => {
      return {
        success: true,
        data: { token: false, expires: 124343 }
      };
    }
  }
] as MockMethod[];
