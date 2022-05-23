<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:left>
        <img class="btn-return" src="~assets/img/common/return.png" alt="">
      </template>
      <template v-slot:center>
        <input id="search" type="text" placeholder="搜索~" />
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
  name: 'Category',
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

#search {
  width: 250px;
  height: 27px;
  font-size: 5px;
  border: 0;
  outline: none;
  border-radius: 15px;
  background: url(~assets/img/common/search.png) no-repeat;
  background-size: 18px 18px;
  background-position: 5px;
  text-indent: 10%;
  background-color: #fff;
}
</style>