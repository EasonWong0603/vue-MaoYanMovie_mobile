<template>
  <div class="toprate">
    <p>最受好评电影</p>
    <ul>
      <li v-for="item in rateList" :key="item._id">
        <div>
          <!-- 海报图片 -->
          <img :src="item.imgUrl" alt="" />
          <!-- 遮盖层 -->
          <span class="bg"></span>
          <!-- 观众评分 -->
          <span class="score" v-if="item.score"
            >观众评分 &nbsp;{{ item.score }}
          </span>
          <!-- 想看数量 -->
          <span class="wish" v-if="item.wishNum"
            >{{ item.wishNum }} 人想看
          </span>
        </div>
        <!-- 电影名称 -->
        <span class="name">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// 引入接口函数
import { getToprateDateApi } from "@/utils/api";

export default {
  data() {
    return {
      rateList: [], //数据列表
    };
  },
  mounted() {
    this.getdate(); //调用获取数据方法
  },
  methods: {
    // 请求数据
    async getdate() {
      const res = await getToprateDateApi();
      this.rateList = res.result;
    },
  },
};
</script>

<style lang="less" scoped>
// 引入自定义变量css样式
@import "../../../assets/css/var.less";

.toprate {
  width: 100%;
  height: 200px;
  background: white;
  padding: 12px 0 12px 15px;
  margin-bottom: 10px;
  p {
    font-size: @s-font;
    margin-bottom: 12px;
  }
  ul {
    width: 100%;
    height: 150px;
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    li {
      width: 85px;
      height: 100%;
      margin-right: 13px;
      span {
        font-size: @xs-font;
        width: 85px;
        font-weight: 900;
      }
      div {
        width: 85px;
        height: 115px;
        position: relative;
        // 海报图片
        img {
          width: 85px;
          height: 115px;
          vertical-align: middle;
        }
        span {
          position: absolute;
          bottom: 0;
          left: 0;
        }
        // 遮盖层
        .bg {
          height: 30px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0)
          );
        }
        // 分数和想看
        .score,
        .wish {
          color: #faaf00;
          text-align: center;
        }
      }
      // 电影名称
      .name {
        display: block;
        .textof();
        margin-top: 13px;
      }
    }
  }
}
</style>
