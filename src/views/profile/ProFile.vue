<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>我的</div>
      </template>
    </nav-bar>
  </div>
  <div id="info">
    <tr>
      <th>姓名</th>
      <th>性别</th>
      <th>头像</th>
      <th>电话</th>
      <th>余额</th>
    </tr>
    <tr>
      <td>{{user.name}}</td>
      <td>{{user.sex}}</td>
      <td>{{user.photo}}</td>
      <td>{{user.phone}}</td>
      <td>{{user.balance}}</td>
    </tr>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import { getUser } from 'api/user/user';
export default {
  name: 'Profile',
  components: {
    NavBar
  },
  data() {
    return {
      user: {},
      id: 1
    }
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      getUser(this.id).then(res => {
        this.user = res.data;
      });
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