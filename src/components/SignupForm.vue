<template>
  <div class="signupForm-div">

       <div class="container col-md-3">
          <h5 class="mb-3">Signup Form</h5>
          <form  @submit.prevent="submitData" >
            <div class="form-row">
              <div class="form-group col-md-12">
                <input type="email" v-model="email" class="form-control" id="emailAddress" placeholder="Email">
              </div>
            </div>
            <div class="form-row">
              <div class="input-group col-md-12 mb-2">
                <div class="input-group-prepend">
                  <span class="input-group-text">+91</span>
                </div>
                <input type="number" v-model="mobileNumber" class="form-control"  pattern="[7-9]{1}[0-9]{9}" id="mobileNumber" placeholder="Number" maxlength="10">
              </div>

            </div>
            <div class="form-row">

                <div class="form-group col-md-12">
                  <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <input type="password" v-model="confirmPassword" class="form-control" id="confirmpassword" placeholder="Confirm Password">
                </div>
            </div>

            <button type="submit" class="btn btn-primary mb-3">Signup</button>

          </form>
            <router-link tag="a" to="/login">Back</router-link>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
      return {
        modal: false,
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: ''
      }
  },
  computed: {
    comparePasword() {
      return this.password !== this.confirmPassword? 'password didn\'t match' : '';
    },

    /* get user */
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    submitData() {

      /* axios.post('../../static/accounts.json', {
          email: this.email,
          mobileNumbe: this.mobileNumber,
          password: this.password
      })
      .then(res => console.log(res) )
      .catch(err => console.log(err)) */
      if(this.password !== this.confirmPassword){
        alert('password baraaber naakh')
      } else {
        this.$store.dispatch('signUp', {
          email: this.email,
          password: this.password
        })
      }

      axios.post('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)
        })
      .catch(err => console.log(err))

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
h1 {
  margin: 0 0 20px 0;
}
a {
  font-size: 13px;
}
/* Signup form */

.container {
  text-align: start;
  width: 100%;
  height: 100%;
  padding: 100px 0 150px 0;
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

</style>
