<template>
  <div id="container">
    <div id="app">
      <navigation :key="$route.fullPath"/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import navigation from './components/nav'
import authentication from "./services/authentication";

export default {
  name: 'App',
  components: {
    navigation
  },
  async created(){
    const response = await authentication.getUser({
      headers:{
        Authorization: localStorage.getItem('ID')
      }
    });
    await this.$store.dispatch('user', response.data)
  }
}
</script>

<style>
  @import "./css/login.css";
  @import "./css/about.css";
  @import "./css/dashboard.css";
  @import "./css/contactus.css";
</style>
