<template>
  <div class="center">
    <h1>Login to Dashboard</h1>

    <form method="post" action="dashboard.html">
      <!--TODO: replace action with onclick when backend is up, onlick="val()" val is the validation function-->
      <div class="txt_field">
        <input type="text" required>
        <span></span>
        <label>Username</label>
      </div>
      <div class="txt_field">
        <input type="password" required>
        <span></span>
        <label>Password</label>
      </div>
      <div class="pass">
        Forgot Password?
      </div>
      <input type="submit" value="Login"/>
      <div class="signup_link">
        Not a member? <a href="signup.html">Signup</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>
  @import "../css/login.css";
</style>
