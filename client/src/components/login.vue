<template>
  <div class="center">
    <h1>Login to Dashboard</h1>

    <form @submit.prevent="click">
      <!--TODO: replace action with onclick when backend is up, onlick="val()" val is the validation function-->
      <div class="txt_field">
        <input type="text" required v-model="username">
        <span></span>
        <label>Username</label>
      </div>
      <div class="txt_field">
        <input type="password" required v-model="password">
        <span></span>
        <label>Password</label>
      </div>
      <div class="pass">
        Forgot Password?
      </div>
      <input type="submit" value="Login"/>
      <div class="signup_link">
        Not a member? <a @click="$router.push('/register')">Signup</a>
      </div>
    </form>
  </div>
</template>

<script>
import authentication from '../services/authentication'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async click () {
      const response = await authentication.signin({
        username: this.username,
        password: this.password
      })
      await this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped>
  @import "../css/login.css";
</style>
