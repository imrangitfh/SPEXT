<template>
  <div id="navigation">
    <nav>
      <div class="header">
        <div class="inner_header">
          <div class="spext_header">
            <a @click="$router.push('/')"><h1>SP<span>EXT</span></h1></a>
          </div>
          <ul class="navigation">
            <a class="navA" v-if="currentUser" @click="$router.push('/dashboard'); location.reload()"><li>Home</li></a>
            <a class="navA" @click="$router.push('/about-us'); location.reload()"><li>About</li></a>
            <a class="navA" @click="$router.push('/contact-us'); location.reload()"><li>Contact</li></a>
            <div class="dropdown" v-if="currentUser">
              <button class = "dropbtn">My Profile</button>
              <div class="dropdown-content">
                <a href="javascript:void(0)" @click="handleDelete">Delete my User</a>
                <a href="javascript:void(0)" @click="handleClick">Logout</a>
              </div>
            </div>
            <a class="navA" v-if="!currentUser" @click="$router.push('/')"><li>Login</li></a>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import authentication from "../services/authentication";

export default {
  name: 'navigation',
  data () {
    return {
      currentUser: null
    }
  },
  async created() {
    const response = await authentication.getUser({
      headers: {
        Authorization: localStorage.getItem('ID')
      }
    });
    this.currentUser = response.data.result[0].username
    console.log(this.user)
  },
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

<style>
.header{
  width: 100%;
  height: 80px;
  display: block;
  background-color: #101010;
}
.inner_header{
  width: 100vw;
  height: 100%;
  display: block;
  margin: 0 auto;
}
.spext_header{
  height: 100%;
  display: table;
  float: left;
  padding-left: 10%;
}
.spext_header h1:hover{
  cursor: pointer;
}
.spext_header h1{
  color: white;
  height: 100%;
  display: table-cell;
  padding-top: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-weight: 200;
}
.spext_header h1 span{
  font-weight: 800;
  color: #54B5AA;
}
.spext_header a{
  text-decoration: none;
}
.navigation{
  float: right;
  height: 50%;
  padding-right: 5%;
}
.navA{
  height: 100%;
  display: table;
  float: left;
  padding: 0 20px;
  cursor: pointer;
  text-decoration: none;
  background-color: #101010;
}
.navigation a:last-child{
  padding-right: 0;
}
.navigation a li{
  display: table-cell;
  padding-top: 20px;
  height: 100%;
  width: 80px;
  color: white;
  font-size: 17px;
  font-family: 'Montserrat', sans-serif;
}
.navigation li:hover{
  color: #54B5AA;
  text-decoration: none;
}
.dropbtn {
  background-color: #101010;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  color: white;
  padding: 20px;
  font-size: 17px;
  border: none;
  cursor: pointer;
}
@media (max-width: 600px) {
  .header{
    width: 100%;
    display: block;
    background-color: #101010;

    height: 160px;
  }

  .navigation a li{
    display: table-cell;
    padding-bottom: 10px;
    height: 100%;
    width: 80px;
    color: white;
    font-size: 17px;
    font-family: 'Montserrat', sans-serif;
  }
  .spext_header{
    height: 50%;
    width: 100%;
  }

  .dropdown{

  }

}
@media (max-width: 800px) {
  .header{
    width: 100%;
    display: block;
    background-color: #101010;
  }
  .navigation a{
    padding: 0 5px;
  }
  .navigation a li{
    width: 60px;
    font-size: 13px;
  }
  .dropdown{
    width: 115px;
  }
  .dropbtn {
    font-size: 13px;
  }


}

@media (max-width: 420px) {
  .header{
    width: 100%;
    display: block;
    background-color: #101010;
    height: 120px;
  }
  .navigation a li{
    display: table-cell;
    padding-bottom: 10px;
    height: 100%;
    width: 50px;
    color: white;
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
  }
  .navigation a{
    height: 100%;
    display: table;
    float: left;
    padding: 0 2px;
    cursor: pointer;
    text-decoration: none;
  }
  .dropdown{
    width: 100px;
  }
  .dropbtn {
    font-size: 10px;
  }
}

.dropbtn :hover {
  color: #54B5AA;
}
/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}
/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 20vh;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #54B5AA;
  width: 100%;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropdown-content #deleteUserButton {
  width: 100%;
  float: left;
}

.dropdown:hover .dropdown-content #logoutButton {
  width: 100%;
  float: left;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  transition: .5s;
}
</style>
