<template>
  <div class="login-div">
    <div class="login-input">
      <label for="phone">手机号：
        <input id="phone" type="text" v-model="phone" placeholder="手机号" />
      </label>
    </div>
    <div class="login-input">
      <label for="password">密码：
        <input id="password" type="password" v-model="password" placeholder="密码" />
      </label>
    </div>
    <div class="login-btn">
      <button @click="login">进入</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      phone: '',
      password: ''
    }
  },
  created() {

  },
  methods: {
    login() {
      this.$router.replace('/home');
    }
  }
}
</script>

<style scoped>
@import 'assets/css/login';
</style>
