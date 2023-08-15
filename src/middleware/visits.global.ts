import { RouteLocationNormalized } from "../../.nuxt/vue-router"

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  addToVisits(to)
})


function addToVisits(to: RouteLocationNormalized) {
  console.log(to.params);
  // useState('visits').value.push({})
}