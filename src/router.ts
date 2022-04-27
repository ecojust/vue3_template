/*
 * @Author: 桔子桑
 * @Date: 2021-11-12 21:42:31
 * @FilePath: /vue3_template/src/router.ts
 * @Description: 文件描述
 */
import {
  useRouter,
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Index from "./page/Index.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      beforeEnter: (to, from, next) => {
        next();
      },
    },
  ],
});
