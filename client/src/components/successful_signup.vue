<template>
  <div class="center">
    <h1>Successful Signup</h1>
    <div class="left_about">
      <a> Thank you for signing up for our service! </a> <br>
      <a> You can proceed now to the login page </a><br><br>
      <button class="proceed_login" @click="$router.push('/')">Proceed to Login</button>
    </div>
    <div class="right_about"><img src="./logo.png" alt="Spext Logo"></div>
  </div>
</template>

<script>
export default {
name: "successful_signup"
}
</script>

<style scoped>
  @import "../css/about.css";
</style>
