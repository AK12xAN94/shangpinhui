<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in initData" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" v-if="showPagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev" v-if="showButton"></div>
    <div class="swiper-button-next" v-if="showButton"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar" v-if="showScrollBar"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  props: {
    initData: {
      type: Array,
      default: [],
      required: true,
    },
    showPagination: {
      type: Boolean,
      default: false,
    },
    showButton: {
      type: Boolean,
      default: false,
    },
    showScrollBar: {
      type: Boolean,
      default: false,
    },
    loop: {
        type: Boolean,
        default: true
    }
  },
  watch: {
    initData: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.cur, {
            // direction: "vertical", // 垂直切换选项
            loop: this.loop, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // 如果需要滚动条
            scrollbar: {
              el: ".swiper-scrollbar",
            },
          });
        });
      },
    },
  },
};
</script>

<style lang="less" scoped>
</style>