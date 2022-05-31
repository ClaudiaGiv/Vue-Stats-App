import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Requirement",
    component: () => import("./components/requirement.vue"),
  },
  {
    path: "/solution",
    name: "solution",
    component: () => import("./components/solution.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active-link",
  routes,
});
export default router;
