<template>
  <tab-bar v-if="$route.meta.isShowTabBar">
    <tab-bar-item path="/home" @click="imgChange">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/home.png" alt="" />
      </template>
      <template v-slot:item-text>
        <p>首页</p>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" @click="imgChange">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/category.png" alt="" />
      </template>
      <template v-slot:item-text>
        <p>分类</p>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/shopcar" @click="imgChange">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/shopcar.png" alt="" />
      </template>
      <template v-slot:item-text>
        <p>购物车</p>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" @click="imgChange">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/profile.png" alt="" />
      </template>
      <template v-slot:item-text>
        <p>我的</p>
      </template>
    </tab-bar-item>
  </tab-bar>
  <router-view />
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
@import 'assets/css/tabbaritem';
</style>
