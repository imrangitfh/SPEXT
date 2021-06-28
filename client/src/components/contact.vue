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

<style>
.center{
  position: relative;
  margin-top: 10%;
  margin-bottom: 10%;
  left: 25%;
  top: 30%;
  width: 50%;
  height: 50%;
  background: whitesmoke;
  border-radius: 10px;
  text-align: center;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
}
.center h1{
  text-align: center;
  padding: 10px 0 30px 0;
  border-bottom: 1px solid #ADADADAD;
}
.center form{
  padding: 0 40px;
  box-sizing: border-box;
}
form .txt_field{
  position: relative;
  border-bottom: 2px solid #ADADADAD;
  margin: 30px 0;
  font-size: 17px;
}
.txt_field input{
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 17px;
  border: none;
  background-color: whitesmoke;
  outline: none;
}
.txt_field label{
  position: absolute;
  top: 50%;
  left: 5px;
  color: #ADADADAD;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
}
.txt_field span::before{
  content: '';
  position: absolute;
  top: 40px;
  left: 0;
  height: 2px;
  background: #54B5AA;
  width: 0%;
  transition: .5s;
}
.txt_field input:focus ~ label,
.txt_field input:valid ~ label{
  top: -5px;
  color: #54B5AA;
  transition: .5s;
}
.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before{
  width: 100%;
}
input[type="submit"]{
  width: 100%;
  height: 50px;
  border: 1px solid;
  background: #101010;
  border-radius: 25px;
  font-size: 18px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  margin-bottom: 20px;
}
input[type="submit"]:hover{
  border-color: #101010;
  transition: .5s;
}
</style>
