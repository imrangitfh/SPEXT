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

<style scoped>
@import "../css/login.css";
</style>
