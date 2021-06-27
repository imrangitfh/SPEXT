<template>
  <div class="center">
    <h1>Reset Password</h1>

    <form @submit.prevent="click" id="form">
      <!--TODO: replace action with onclick when backend is up, onlick="val()" val is the validation function-->
      <div class="txt_field">
        <input type="text" required v-model="username">
        <span></span>
        <label>Username</label>
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
      <input type="submit" value="Reset Password"/>
      <div class="signup_link">
        Not a member? <a @click="$router.push('/register')">Signup</a>
      </div>
    </form>
  </div>
</template>

<script>
import authentication from "../services/authentication";

export default {
name: "forgot",
  data(){
    return {
      username: '',
      question_answer: '',
      password: ''
    }
  },
  methods: {
    async click() {
        const response = authentication.changeUser({
          username: this.username,
          question_answer: this.question_answer,
          password: this.password
        })
      if(!(await response).data.changed){
        await this.showErrorMessageForgot("User was not found or credentials are wrong, please try again!")
      } else {
        await this.$router.push('/')
      }
    },
    async showErrorMessageForgot(errorMessage) {
      let wrongRegister = document.getElementsByClassName('wrongRegister');
      if(wrongRegister.length === 0){ //To check if element already exists in DOM
        let errorDiv = document.createElement("div");
        let errorMessageP = document.createElement("p");
        let error = document.createTextNode(errorMessage);
        errorMessageP.appendChild(error);
        errorDiv.appendChild(errorMessageP);
        errorDiv.className = "wrongRegister";

        let submit = document.getElementById("form");
        submit.appendChild(errorDiv);
      }
    }

  }
}
</script>

<style scoped>
  @import "../css/login.css";
</style>
