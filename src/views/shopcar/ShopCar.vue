<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:left>
        <img class="btn-return" src="~assets/img/common/return.png" alt="">
      </template>
      <template v-slot:center>
        <div>购物车({{total}})</div>
      </template>
      <template v-slot:right>
        <img class="btn-more" src="~assets/img/common/more.png" alt="">
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
  name: 'ShopCar',
  components: {
    NavBar
  },
  data() {
    return {
      total: 0
    }
  }
}
</script>

<style scoped>
.home-nav {
  background-color: #fff;
  color: #000;
}
</style>