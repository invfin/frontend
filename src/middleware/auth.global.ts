import { RouteLocationNormalized } from "../../.nuxt/vue-router"

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  // From time to time check if jwt is expired or not, refresh it if needed
})
