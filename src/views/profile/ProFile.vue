<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>我的</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
  name: 'Profile',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.home-nav {
  background-color: #cdb5cd;
  color: #fff;
}
</style>