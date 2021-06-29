<template>
  <div class="center" style="margin-top: 40px">
    <h1>Signup to SPEXT</h1>
    <form @submit.prevent="click" id="submitField">
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
        <input type="text" required v-model="question_answer">
        <span></span>
        <label>What is your favourite type of sports?</label>
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
  data() {
    return {
      username: '',
      email: '',
      password: '',
      question_answer: ''
    }
  },
  methods: {
    async click() {
      const response = await authentication.register({
        username: this.username,
        email: this.email,
        password: this.password,
        question_answer: this.question_answer
      })
      if (!response.data.duplicate) {
        await this.$router.push({path: '/success'})
      } else {
        await this.showErrorMessageRegister("Username already taken, choose another one!")
      }
    },

    async showErrorMessageRegister(errorMessage) {
      let wrongRegister = document.getElementsByClassName('wrongRegister');
      if(wrongRegister.length === 0){ //To check if element already exists in DOM
        let errorDiv = document.createElement("div");
        let errorMessageP = document.createElement("p");
        let error = document.createTextNode(errorMessage);
        errorMessageP.appendChild(error);
        errorDiv.appendChild(errorMessageP);
        errorDiv.className = "wrongRegister";

        let submit = document.getElementById("submitField");
        submit.appendChild(errorDiv);
      }
    }
  }
}
</script>

<style>
.center{
  position: absolute;
  top: 180%;
  left: 25%;
  transform: translate(0%, 0%);
  width: 50%;
  height: auto;
  background: whitesmoke;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .30);
}
.center h1{
  text-align: center;
  padding: 1% 0 30px 0;
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
.pass{
  margin: -5px 0 20px 5px;
  color: #ADADADAD;
  cursor: pointer;
}
.pass:hover{
  text-decoration: underline;
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
  margin-bottom: 15px;
}
input[type="submit"]:hover{
  border-color: #101010;
  transition: .5s;
}
.signup_link{
  margin: 30px 0;
  text-align: center;
  font-size: 17px;
  color: #666666;
}
.signup_link a{
  color: #101010;
  text-decoration: none;
}
.signup_link a:hover{
  text-decoration: underline;
  cursor: pointer;
}
</style>
