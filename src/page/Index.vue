<!--
 * @Author: 桔子桑
 * @Date: 2021-11-12 23:11:38
 * @FilePath: /vue3_template/src/page/Index.vue
 * @Description: 文件描述
-->

<template>
  <div class="index">
    <el-carousel height="100%">
      <el-carousel-item v-for="(item, index) in banner" :key="index">
        <iframe class="sourcePage" :src="item.src" frameborder="0"></iframe>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, unref, onMounted } from "vue";
import { Msgbox, Message, ElLoading } from "element3";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import md5 from "md5";

export default defineComponent({
  props: {
    msg: String,
  },
  setup(props) {
    const router = useRouter();
    const banner = ref(window.config.banner);
    onMounted(() => {});
    return { banner };
  },
});
</script>

<style lang="less">
.index {
  height: 100%;
  .el-carousel {
    height: 100%;
    .sourcePage {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
