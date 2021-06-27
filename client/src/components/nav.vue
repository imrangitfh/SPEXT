<template>
    <nav>
      <div class="header">
        <div class="inner_header">
          <div class="spext_header">
            <a @click="$router.push('/')"><h1>SP<span>EXT</span></h1></a>
          </div>
          <ul class="navigation">
            <a @click="$router.push('/dashboard'); location.reload()"><li>Home</li></a>
            <a @click="$router.push('/about-us'); location.reload()"><li>About</li></a>
            <a @click="$router.push('/contact-us'); location.reload()"><li>Contact</li></a>
            <div class="dropdown" v-if="!user">
              <button class = "dropbtn">My Profile</button>
              <div class="dropdown-content">
                <a href="javascript:void(0)" @click="handleDelete">Delete my User</a>
                <a href="javascript:void(0)" @click="handleClick">Logout</a>
              </div>
            </div>
            <a v-if="user" @click="$router.push('/')"><li>Login</li></a>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>

import {mapGetters} from 'vuex'
import authentication from "../services/authentication";

export default {
  name: 'navigation',
  methods: {
    handleClick() {
      localStorage.removeItem('ID');
      this.$store.dispatch('user', null);
      this.$router.push('/');
      location.reload();
    },
    async handleDelete(){
      await this.$router.push('/delete-user')
      const response = await authentication.deleteUser({
        headers: {
          Authorization: localStorage.getItem('ID')
        }
      })
      if(response.data.deleted) {
        await this.$store.dispatch('user', null)
        localStorage.removeItem('ID')
        await this.$router.push('/')
        location.reload()
      } else {
        alert("Something went wrong whilst trying to delete your user")
      }
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>

</style>
