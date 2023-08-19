import { RouteLocationNormalized } from "../../.nuxt/vue-router"

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  addToVisits(to)
})


function addToVisits(to: RouteLocationNormalized) {
  console.log(to.params);
  if ("ticker" in to.params) { }
  else if ("slug" in to.params) { }
  // useState('visits').value.push({})
}