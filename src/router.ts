import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/solution",
    name: "solution",
    component: () => import("./components/solution.vue")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
