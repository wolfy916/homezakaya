import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/lounge/login/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/lounge/signup/SignUpView.vue"),
    },
    {
      path: "/rooms",
      name: "rooms",
      component: () => import("../views/lounge/main/RoomsView.vue"),
    },
  ],
})

export default router
