<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>首页</div>
      </template>
    </nav-bar>
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>商品名称</th>
          <th>商品价格</th>
        </tr>
        <tr v-for="(item, index) in commodityList" :key="index">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import { listCommodities } from 'api/commodity/commodity';
export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() {
    return {
      commodityList: [],
      queryParams: {
        name: null
      }
    }
  },
  created() {
    this.listCommodities();
  },
  methods: {
    /** 商品列表查询 */
    listCommodities() {
      listCommodities(this.queryParams).then(res => {
        this.commodityList = res.data;
      });
    }
  }
}
</script>

<style scoped>
.home-nav {
  background-color: #cdb5cd;
  color: #fff;
}
th,
td {
  text-align: center;
}
</style>