/*
 * @Author: 桔子桑
 * @Date: 2022-03-15 15:20:34
 * @FilePath: /vue3_template/src/main.ts
 * @Description: 文件描述
 */
import { createApp } from "vue";
import App from "./App.vue";
import "./index.less";
import "/@/assets/icon-font/iconfont.css";
import "element3/lib/theme-chalk/index.css";

import Element3 from "element3";
import { router } from "./router";
import i18n from "./lang/i18n";
import { utilMixin } from "./mixin/utilMixin";

createApp(App)
  .use(Element3)
  .use(router)
  .use(i18n)
  .mixin(utilMixin)
  .mount("#app");
