<template>
  <div class="spec-preview" @mousemove="mouseMove">
    <img :src="imgUrl" />
    <div class="event" ref="fangdajing"></div>
    <div class="big" ref="big">
      <img :src="bigImgUrl" ref="bigImg" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ["imgUrl", "bigImgUrl"],
  methods: {
    mouseMove(e) {
      console.log(e);
      // 获取mask
      let mask = this.$refs.mask;
      console.log(mask);
      // 获取放大镜
      let fangdajing = this.$refs.fangdajing;
      console.log(fangdajing);
      // 获取大图容器
      let big = this.$refs.big;
      console.log(big);
      // 获取大图
      let bigImg = this.$refs.bigImg;
      console.log(bigImg);

      // 获取鼠标到放大镜边缘的位置
      // 公式：鼠标到屏幕边缘的距离 - 放大镜边缘到屏幕的距离
      let mouselocations = {
        x: e.clientX - fangdajing.getBoundingClientRect().left,
        y: e.clientY - fangdajing.getBoundingClientRect().top,
      };

      // 解构出鼠标到放大镜边缘的距离
      let { x, y } = mouselocations;

      // 因为鼠标一直保持在蒙版中心，所以需要获取蒙版的一半
      let maskXY = {
        maskW: mask.offsetWidth / 2,
        maskH: mask.offsetHeight / 2,
      };

      // 结构出蒙版的一半的长度
      let { maskW, maskH } = maskXY;

      // 计算蒙版根据鼠标移动的距离
      let maskMove = {
        maskLeft: x - maskW,
        maskTop: y - maskH,
      };
      // 解构出蒙版根据鼠标移动的距离
      let { maskLeft, maskTop } = maskMove;

      // 判断临界值
      if (maskLeft >= fangdajing.offsetWidth - mask.offsetWidth) {
        maskLeft = fangdajing.offsetWidth - mask.offsetWidth;
      } else if (maskLeft <= 0) {
        maskLeft = 0;
      }

      if (maskTop >= fangdajing.offsetHeight - mask.offsetHeight) {
        maskTop = fangdajing.offsetHeight - mask.offsetHeight;
      } else if (maskTop <= 0) {
        maskTop = 0;
      }

      // 赋值
      mask.style.left = maskLeft + "px";
      mask.style.top = maskTop + "px";

      // 计算比例
      let scale =
        (big.clientWidth - bigImg.clientWidth) /
        (fangdajing.clientWidth - mask.offsetWidth);
      
      let bigImgMove={
        bigImgX:maskLeft * scale,
        bigImgY:maskTop * scale
      };
      let {bigImgX,bigImgY} = bigImgMove

      //赋值
      bigImg.style.left = bigImgX + 'px'
      bigImg.style.top = bigImgY + 'px'
    },
  },
};
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