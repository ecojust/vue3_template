<!--
 * @Author: 桔子桑
 * @Date: 2021-11-12 21:42:31
 * @FilePath: /vue3_template/src/App.vue
 * @Description: 文件描述
-->


<template>
  <Layout />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "./components/Layout.vue";
export default defineComponent({
  components: { Layout },
});
</script>
