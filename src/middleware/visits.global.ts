import { RouteLocationNormalized } from "../../.nuxt/vue-router"

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  addToVisits(to)
})


function addToVisits(to: RouteLocationNormalized) {
  if ("ticker" in to.params || "slug" in to.params) {
    // useVisits().value[to.meta.visit.path] = to.meta.visit;
  }
}