<template>
  <div id="app">
    <navigation/>
    <router-view/>
  </div>
</template>

<script>
import navigation from './components/nav'

export default {
  name: 'App',
  components: {
    navigation
  }
}
</script>

<style>
  @import "./css/login.css";
  @import "./css/about.css";
  @import "./css/dashboard.css";
  @import "./css/contactus.css";
</style>
