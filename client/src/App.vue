<template>
  <div id="container">
    <div id="app">
      <navigation :key="$route.fullPath"/>
      <router-view :key="$route.fullPath"/>
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
body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  background: #34958A;
}
#container{
  position: relative;
}
</style>
