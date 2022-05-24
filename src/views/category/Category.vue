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
  <div class="sort">
    <ul>
      <li>热门推荐</li>
      <li>手机数码</li>
      <li>家用电器</li>
      <li>电脑办公</li>
      <li>玩具乐器</li>
      <li>家具厨具</li>
      <li>家居家装</li>
      <li>男装</li>
      <li>男鞋</li>
      <li>女装</li>
      <li>女鞋</li>
      <li>美妆护肤</li>
      <li>医药保健</li>
      <li>酒水饮料</li>
    </ul>
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
.sort {
  position: relative;
  z-index: 1;
  width: 25%;
  text-align: center;
  background-color: #f8f8f8;
}
.sort li {
  height: 50px;
  line-height: 50px;
}
.home-nav {
  background-color: #fff;
  color: #fff;
}

#search {
  width: 250px;
  height: 27px;
  font-size: 14px;
  border: 0;
  outline: none;
  border-radius: 15px;
  background: url(~assets/img/common/search.png) no-repeat;
  background-size: 18px 18px;
  background-position: 5px;
  text-indent: 10%;
  background-color: #f5f5f5;
  vertical-align: middle;
}
</style>