/*
 * @Author: 桔子桑
 * @Date: 2021-11-12 21:42:31
 * @FilePath: /vue3_template/src/lang/i18n.ts
 * @Description: 文件描述
 */
import { createI18n } from "vue-i18n";
import en from "./en";
import zh from "./zh";
var messages = {
  en: en,
  zh: zh,
};
const i18n = createI18n<any>({
  legacy: false,
  locale: "zh",
  messages,
});

export default i18n;
