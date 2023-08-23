import type { SidebarMenu } from "@/types";

export const LONG_MAX_AGE = 2505600 // 29 days in seconds
export const SHORT_MAX_AGE = 86400 // 1 days in seconds

export const SIDEBAR_MENUS = [
  { title: "Inicio", path: "/" },

  { title: "Screener", path: "/companies" },
  { title: "Portfolio", path: "/portfolio" },

  { title: "Super Inversores", path: "/superinvestors" },
  { title: "Diccionario", path: "/diccionario" },
  // { title: "Blogs", path: "/blogs" },

  // { title: "Roboadvisor", path: "/roboadvisors" },

] as SidebarMenu[];
