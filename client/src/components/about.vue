<template>
  <div class="center_about">
    <h1>About us</h1>
    <div class="left_about">
      <p> We are a team of motivated students at the FH Campus in vienna </p>
      <p> and have developed a speech to text software.</p>
      <p> Go ahead and sign up for our service and get rid of the<br>nerve wrecking process of writing transcripts yourself. </p>
    </div>
    <div class="right_about"><img src="../css/logo.png" alt="Spext Logo"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
.center_about{
  position: absolute;
  top: 180%;
  left: 25%;
  width: 50%;
  height: auto;
  background: whitesmoke;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .30);
}
.center_about h1{
  text-align: center;
  padding: 1% 0 30px ;
  border-bottom: 1px solid #ADADADAD;
}
.center_about form{
  padding: 0 40px;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .left_about{
    font-size: 10px;
  }
  .center_about{
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
  text-align: center;
}
</style>
