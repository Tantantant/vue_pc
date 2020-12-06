<template>
  <div class="spec-preview" @mousemove="mouseMove($event)">
    <img :src="imgUrl" />
    <div class="event"></div>
    <div class="big">
      <img :src="bigImgUrl" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ["imgUrl", "bigImgUrl"],
  methods: {
  //   // 鼠标移动
  //   mouseMove(e) {
  //     // 获取鼠标 到 放大镜边缘的位置
  //     let mouseToPriview = {
  //       X: e.offsetX,
  //       Y: e.offsetY,
  //     };

  //     // 取蒙版中心的一半
  //     let maskHalf = {
  //       X: this.$refs.mask.offsetWidth / 2,
  //       Y: this.$refs.mask.offsetHeight / 2,
  //     };
  //   },
  },
}
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>