<template>
  <div class="signupForm-div">

       <div class="container col-md-3">
          <h5 class="mb-3">Login</h5>
          <form @submit.prevent="submitData">
            <div class="form-row">
              <div class="form-group col-md-12" >
                <input type="email" v-model="email" class="form-control" id="emailAddress" placeholder="Email">
              </div>
            </div>
            <!-- <hr>
            <div class="form-row">
              <div class="input-group col-md-12 mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">+91</span>
                </div>
                <input type="number" v-model="mobileNumber" class="form-control"  pattern="[7-9]{1}[0-9]{9}" id="mobileNumber" placeholder="Mobile Number" maxlength="10">
              </div>

            </div> -->
            <div class="form-row">

                <div class="form-group col-md-12">
                  <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                </div>
              </div>

            <button type="submit"  class="btn btn-primary mb-3">Signin</button>
          </form>
           <hr>
            <div class="flx spbn">
              <div>
                  <p>Don't have an Account?</p>
                <div>
                  <router-link tag="a" to="/signup">signup</router-link>
                </div>
              </div>
              <div>
               <p>Forget Password ?</p>
                <a href="#">Click here</a>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        email: '',
        password: ''
      }
  },
  computed: {
    /* get user */
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    submitData() {
       this.$store.dispatch('login', {email: this.email, password: this.password})
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped>

* {
  box-sizing: border-box;
 /*  margin: 0;
  padding: 0; */
}

/* Signup form */

.container {
  text-align: start;
  width: 100%;
  height: 100%;
  margin: 100px auto;
}

.btn-primary {
   border: 1px solid #ef6d3c;
    background-color: transparent;
    color: #ef6d3c;
    border-radius: 5px;
    transition: 0.2s ease;
}

.btn-primary:hover,
.btn-primary:visited {
    background: linear-gradient(to right, #ff9966 , #ff5e62);
    color: #fff;
    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.24);
}

.btn-primary:active {
    /* background-color: #ef6d3c; */
    background: linear-gradient(to right, #ff9966 , #ff5e62);
    color: #fff;
    box-shadow: 0 2px #fff;
}

input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  width: 70px;
}
.flx {
  display: flex;
}
.spbn {
  justify-content: space-between;
}
p, a {
  margin: 0;
  font-size: 13px;
}

</style>
