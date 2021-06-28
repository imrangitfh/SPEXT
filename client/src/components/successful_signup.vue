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

<style>
.center{
  position: absolute;
  top: 180%;
  left: 25%;
  width: 50%;
  height: auto;
  background: whitesmoke;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .30);
}
.center h1{
  text-align: center;
  padding: 0 0 30px 0;
  border-bottom: 1px solid #ADADADAD;
}
.center form{
  padding: 0 40px;
  box-sizing: border-box;
}
@media (max-width: 600px) {
  .left_about{
    font-size: 10px;
  }
  .center{
    position: absolute;
    top: 180%;
    left: 15%;
    width: 70%;
  }
}

.right_about{
  float: right;
  position: center;
  opacity: 40%;
  height: 50%;
  width: 50%;
  padding-top: 10%;
}
.right_about img{
  width: 50%;
}
.left_about{
  padding-top: 5%;
  padding-left: 2%;
  padding-bottom: 5%;
  float: left;
  position: center;
  width: 50%;
}
</style>
