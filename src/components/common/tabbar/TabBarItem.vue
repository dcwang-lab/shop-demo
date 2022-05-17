<template>
  <div class="tab-bar-item" @click="itemRedirect">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String
  },
  methods: {
    itemRedirect() {
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
</style>