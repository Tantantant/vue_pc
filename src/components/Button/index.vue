<template>
  <button @click="handleClick"><slot /></button>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      isClick: false,
    };
  },
  methods: {
    handleClick(event) {
      let { isClick } = this;
      if (isClick) return;
      isClick = true;
      this.$listeners.click(event).finally(() => {
        isClick = false;
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
