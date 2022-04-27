/*
 * @Author: 桔子桑
 * @Date: 2021-11-12 21:42:31
 * @FilePath: /vue3_template/src/mixin/utilMixin.ts
 * @Description: 文件描述
 */
export const utilMixin = {
  data() {
    return {};
  },
  created() {},
  methods: {
    say() {
      console.log("mixin created");
    },
    formatDateStr(dateStr: string) {
      var dateInput = new Date(dateStr);
      var year = dateInput.getFullYear() as number | string,
        month = (dateInput.getMonth() + 1) as number | string,
        day = dateInput.getDate() as number | string,
        hour = dateInput.getHours() as number | string,
        minute = dateInput.getMinutes() as number | string,
        second = dateInput.getSeconds() as number | string;

      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      hour = hour < 10 ? "0" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      return (
        year + "-" + month + "-" + day + " "
        // hour +
        // ":" +
        // minute +
        // ":" +
        // second
      );
    },
  },
};
