<template>
  <div>详情页--{{ id }}</div>
</template>

<script>
// import { getDetailDataApi } from "@/utils/api";

export default {
  props: ["id"],
  data() {
    return {
      detailData: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {},
  },
};
</script>

<style lang="less" scoped></style>
