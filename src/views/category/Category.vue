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
      <li v-for="item in listCategorys" :key="item.id" @click="liClick(item.id)" :class="{active: item.id==id}">
        {{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
  name: 'Category',
  components: {
    NavBar
  },
  data() {
    return {
      id: 0,
      listCategorys: [
        { id: 1, name: '热门推荐' },
        { id: 2, name: '手机数码' },
        { id: 3, name: '家用电器' },
        { id: 4, name: '电脑办公' },
        { id: 5, name: '玩具乐器' },
        { id: 6, name: '家具厨具' },
        { id: 7, name: '家居家装' },
        { id: 8, name: '男装' },
        { id: 9, name: '男鞋' },
        { id: 10, name: '女装' },
        { id: 11, name: '女鞋' },
        { id: 12, name: '美妆护肤' },
        { id: 13, name: '医药保健' },
        { id: 14, name: '酒水饮料' },
        { id: 15, name: '户外运动' },
        { id: 16, name: '二手商品' },
        { id: 17, name: '生活旅行' }
      ]
    }
  },
  methods: {
    liClick(id) {
      this.id = id;
    }
  }
}
</script>

<style scoped>
.active {
  color: #cd5c5c;
  background-color: #fff;
  border: 1px solid #f8f8f8;
}
.sort {
  position: relative;
  z-index: 1;
  width: 25%;
  text-align: center;
  background-color: #f8f8f8;
  height: 540px;
  overflow-y: auto;
}
/* 去掉滚动条 */
.sort::-webkit-scrollbar {
  display: none;
}
.sort li {
  height: 50px;
  line-height: 50px;
  white-space: nowrap; /*不让文字内容换行*/
  overflow: hidden; /*文字溢出的部分隐藏起来*/
  text-overflow: ellipsis; /*用...替代溢出的部分*/
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