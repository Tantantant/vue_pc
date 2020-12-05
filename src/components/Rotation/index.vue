<template>
  <!-- <div class="swiper-container" id="mySwiper"> -->
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="rotation in categoryList"
        :key="rotation.id"
      >
        <img :src="rotation.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
// import Swiper from "swiper";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "Rotation",
  props: {
    categoryList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    categoryList() {
      if (this.swiper) return;
      this.$nextTick(() => {
        this.initswiper()
      });
    },
  },
  methods: {
    initswiper() {
      this.swiper = new Swiper(this.$refs.swiper, {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      });
    },
  },
  mounted(){
    if(!this.categoryList.length) return
    this.initswiper()
  }
};
</script>

<style lang="less" scoped>
</style>
