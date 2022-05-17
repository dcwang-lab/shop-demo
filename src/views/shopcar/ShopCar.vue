<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物车({{total}})</div>
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
  background-color: #cdb5cd;
  color: #fff;
}
</style>