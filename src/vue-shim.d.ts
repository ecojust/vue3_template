/*
 * @Author: 桔子桑
 * @Date: 2021-11-12 21:42:31
 * @FilePath: /vue3_template/src/vue-shim.d.ts
 * @Description: 文件描述
 */
declare module "*.vue" {
  import { Component } from "vue";
  const component: Component;
  export default component;
}

declare module "axios";

interface Window {
  config: any;
}
