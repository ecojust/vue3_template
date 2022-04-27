<!--
 * @Author: 桔子桑
 * @Date: 2021-11-12 22:48:31
 * @FilePath: /vue3_template/src/components/Layout.vue
 * @Description: 文件描述
-->


<template>
  <div class="layout drak">
    <router-view id="main-view" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, reactive, provide } from "vue";
import { useRouter } from "vue-router";
import bus from "../bus";

export default defineComponent({
  props: {
    msg: String,
  },
  setup(props) {
    return {};
  },

  created() {},
  beforeRouteLeave() {},
  mounted() {},
});
</script>

<style lang="less">
@import "../assets/common/skin.less";

.layout {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: left;
  #main-view {
    // flex-grow: 1;
    // border-left: 1px solid #ebebeb;
    height: calc(100% - 0px);
    width: 100%;
    position: relative;
  }
}
</style>
