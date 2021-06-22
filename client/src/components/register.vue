<template>
  <div class="center" style="margin-top: 40px">
    <h1>Signup to SPEXT</h1>
    <form @submit.prevent="click">
      <div class="txt_field">
        <input type="text" required v-model="username">
        <span></span>
        <label>Username</label>
      </div>
      <div class="txt_field">
        <input type="text" required v-model="email">
        <span></span>
        <label>E-Mail</label>
      </div>
      <div class="txt_field">
        <input type="password" required v-model="password">
        <span></span>
        <label>Password</label>
      </div>
      <input type="submit" value="Sign Up">
    </form>
  </div>
</template>

<script>
import authentication from '../services/authentication'
export default {
  name: 'register',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async click () {
      const response = await authentication.register({
        username: this.username,
        email: this.email,
        password: this.password
      })
      console.log(response)
      await this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
  @import "../css/login.css";
</style>
