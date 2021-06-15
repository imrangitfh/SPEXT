<template>
  <div class="center">
    <h1>Contact Us</h1>
    <p>If you have any questions or any other concerns, please do not hesitate to contact us!</p>

    <form method="post" action="dashboard.html">
      <div class="txt_field">
        <input type="text" required>
        <span></span>
        <label>Your Name</label>
      </div>
      <div class="txt_field">
        <input type="text" required>
        <span></span>
        <label>Your E-Mail</label>
      </div>
      <div class="txt_field">
        <input type="text" required>
        <span></span>
        <label>Your Message</label>
      </div>
      <input type="submit" value="Submit"/>
    </form>
  </div>
</template>

<script>
import authentication from '../services/authentication'
export default {
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
      console.log(response.data)
    }
  }
}
</script>

<style scoped>
  @import "../css/contactus.css";
</style>
