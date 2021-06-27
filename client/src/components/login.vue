<template>
  <div class="center">
    <h1>Login to Dashboard</h1>

    <form @submit.prevent="click" id="form">
      <!--TODO: replace action with onclick when backend is up, onlick="val()" val is the validation function-->
      <div class="txt_field">
        <input type="text" required v-model="username">
        <span></span>
        <label>Username</label>
      </div>
      <div class="txt_field">
        <input type="password" required v-model="password">
        <span></span>
        <label>Password</label>
      </div>
      <div class="pass" @click="$router.push('/forgot')">
        Forgot Password?
      </div>
      <input type="submit" value="Login"/>
      <div class="signup_link">
        Not a member? <a @click="$router.push('/register')">Signup</a>
      </div>
    </form>
  </div>
</template>

<script>
import authentication from '../services/authentication'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async click () {
      const response = await authentication.signin({
        username: this.username,
        password: this.password
      })
      console.log(response)
      console.log(response.data.successful)
      if(response.data.successful){
        localStorage.setItem('ID', response.data.id)
        this.$store.dispatch('user', response.data.user)
        await this.$router.push('/dashboard')
      }else{
        await this.showErrorMessage("Wrong login credentials, please try again!")
      }

    },
    async showErrorMessage(errorMessage) {
      let wrongLogin = document.getElementsByClassName('wrongLogin');
      if(wrongLogin.length === 0) { //TO check if element already exists in DOM
        let errorDiv = document.createElement("div");
        let errorMessageP = document.createElement("p");
        let error = document.createTextNode(errorMessage);
        errorMessageP.appendChild(error);
        errorDiv.appendChild(errorMessageP);
        errorDiv.className = "wrongLogin";

        let password = document.getElementById("form");
        password.appendChild(errorDiv);
      }

    }
  }
}
</script>

<style scoped>
  @import "../css/login.css";
</style>
