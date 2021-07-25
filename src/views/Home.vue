<template>
  <div class="home">
    <router-view />
    <!-- 尾部组件 -->
    <Myfooter />
  </div>
</template>

<script>
// 引入尾部组件
import Myfooter from "@/components/common/MYfooter.vue";

export default {
  components: {
    Myfooter,
  },
};
</script>
