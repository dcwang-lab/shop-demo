<template>
  <tab-bar>
    <tab-bar-item>
      <template v-slot:item-icon>
        <img src="~assets/img/home.png" alt="" />
      </template>
      <template v-slot:item-text>
        <p>首页</p>
      </template>
    </tab-bar-item>
    <tab-bar-item>
      <template v-slot:item-icon>
        <img src="~assets/img/category.png" alt="">
      </template>
      <template v-slot:item-text>
        <p>分类</p>
      </template>
    </tab-bar-item>
    <tab-bar-item>
      <template v-slot:item-icon>
        <img src="~assets/img/shopcar.png" alt="">
      </template>
      <template v-slot:item-text>
        <p>购物车</p>
      </template>
    </tab-bar-item>
    <tab-bar-item>
      <template v-slot:item-icon>
        <img src="~assets/img/profile.png" alt="">
      </template>
      <template v-slot:item-text>
        <p>我的</p>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from 'components/common/tabbar/TabBarItem';
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
@import 'assets/css/base';

.tab-bar-item img {
  width: 25px;
  height: 25px;
}
</style>
