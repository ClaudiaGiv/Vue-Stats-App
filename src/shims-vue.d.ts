import VueRouter from "vue-router";
/* eslint-disable */
declare module "*.vue" {
  // @ts-ignore
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "vue/types/vue" {
  interface Vue {
    // @ts-ignore
    $router: VueRouter;
  }
}
