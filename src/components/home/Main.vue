<template>
  <main>
    main
    <Item>item</Item>
    <Toprate />
  </main>
</template>

<script>
// 引入项目组件
import Toprate from "@/components/home/Main-Toprate.vue";
// 引入项目组件
import Item from "@/components/home/Main-Item.vue";

export default {
  data() {
    return {};
  },

  components: {
    Item,
    Toprate,
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
main {
  margin-bottom: 50px;
}
</style>
