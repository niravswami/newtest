<template>
  <div class="login-div">
        <button
                id="login-btn"
                type="button"
                value="Login"
                name="login"
                title="Login"
                @click="goLogin"
                v-if="okLogin">
                  Login
                </button>
          <div v-else class="ctrl">
              <div class="dropdown">
            <a class="nav-link forOverflow" :title="user.email" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{user.email}}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link tag="a"  class="dropdown-item" to="/profile">setting</router-link>
              <router-link tag="a" class="dropdown-item" to="/shoplook">Shop look</router-link>
              <a class="dropdown-item" @click="logout" href="#">Logout</a>
            </div>
          </div>
          </div>


  </div>
</template>

<script>
export default {
    data() {
      return {
        okLogin: true,
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
      }
  },
  methods: {
    goLogin() {
      this.$router.push('/login');
    },
    logout() {
     this.$store.dispatch('logout')
     this.okLogin = true,
      this.goLogin()
    }
  },
  computed: {
    /* get user */
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/');
        this.okLogin = false;
      }
    }
  },
  components: {

  }
}
</script>

<style scoped>

#login-btn {
    margin: 6px 0 0 0;
    background-color: transparent;
    /* Blue background */
    border: 1px solid #ef6c3c;
    /* Remove borders */
    color: #ef6c3c;
    /* White text */
    border-radius: 5px;
    padding: 6px 20px;
    /* Some padding */
    font-size: 14px;  /* Set a font size */
    -webkit-transition-duration: 0.4s;
    /* Safari */
    transition-duration: 0.3s;
    cursor: pointer;
    /* Mouse pointer on hover */
    outline: none;
}

/* Darker background on mouse-over */

#login-btn:hover,
#login-btn:visited {
    background: linear-gradient(to right, #ff9966 , #ff5e62);
    color: #fff;
    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.24);
}

#login-btn:active {
    /* background-color: #ef6d3c; */
    background: linear-gradient(to right, #ff9966 , #ff5e62);
    color: #fff;
    box-shadow: 0 2px #fff;
}

/* dropdown for logedIn user */
.nav-item {
  width: 100px;
}
.dropdown-item, .navbar-nav .nav-link  {
  font-size: 14px;
  color: #555;
}
.dropdown:hover .dropdown-menu,
.dropdown:active .dropdown-menu {
  display: block;
  margin: 0;
}

.dropdown:hover .nav-link,
.dropdown-menu .dropdown-item:hover {
  color: #ef6c3c;
  cursor: pointer;
}

.dropdown-menu .dropdown-item:active {
  background-color: #ef6c3c;
  color: #fff;
}

.navbar-custom {
    background-color: #ff5500;
}
.ctrl{
  width: 120px;
}
.forOverflow {
  text-overflow: ellipsis;
    overflow: hidden;
}

</style>
