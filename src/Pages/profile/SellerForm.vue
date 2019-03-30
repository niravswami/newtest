<template>
  <div class="sellerFormContainer p-5">
    <div class="col-md-6 forCenter">
    <h5>Seller/Service provider Form</h5><hr>
    <form @submit.prevent="submitForm">
    <div class="form-row">
      <div class="form-group col-md-12">
        <label for="firstnamel44">Name of Shop/Company/Person</label>
        <input type="text" class="form-control" v-model="value.name" id="firstnamel44" placeholder="Shop/Company">
      </div>
   </div>

    <div class="form-group">
      <label for="inputAddress">Address</label>
      <input type="text" class="form-control" v-model="value.address" id="inputAddress" placeholder="Address">
    </div>

    <div class="form-row">
      <div class="form-group col-md-5">
        <label for="inputCountry">Country</label>
        <select v-model="value.country" id="inputCountry" class="form-control">
          <option value="" selected disabled>Choose...</option>
          <option>India</option>
        </select>
      </div>

        <div class="form-group col-md-7">
        <label for="inputState">State</label>
        <select v-model="value.state" id="inputState" class="form-control">
          <option value="" selected disabled>Choose...</option>
          <option v-for="(val, i) in stateList" :key="i" :value="val">{{ val }}</option>

        </select>
      </div>
    </div>

    <div class="form-row">
        <div class="form-group col-md-5 ">
        <label for="inputCity">City</label>
        <input type="text" v-model="value.city" class="form-control" id="inputCity">
      </div>
        <div class="form-group col-md-5">
        <label for="inputCity">Area</label>
        <input type="text" v-model="value.area" class="form-control" id="inputArea">
      </div>
      <div class="form-group col-md-2">
        <label for="inputZip">Pincode</label>
        <input type="text" v-model="value.pincode" class="form-control" id="inputZip">
      </div>
    </div>
       <div class="form-group">
        <label for="formGroupExampleInput">Contact</label>
        <input type="text" class="form-control" v-model="value.contact" id="website" placeholder="Web Address">
      </div>
       <div class="form-group">
        <label for="formGroupExampleInput">Email</label>
        <input type="text" class="form-control" v-model="value.email" id="website" placeholder="Web Address">
      </div>
       <div class="form-group">
        <label for="formGroupExampleInput">Web Site</label>
        <input type="text" class="form-control" v-model="value.website" id="website" placeholder="Web Address">
      </div>
     <div class="form-group">
       <label for="exampleFormControlTextarea1">Write Somthing About Your Service</label>
       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="value.about"></textarea>
     </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck">
        <label class="form-check-label" for="gridCheck">
          Check me out
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
  </div>
</template>

<script>
import { eventBus } from '../../main.js'
  export default {
    created(){
        /* eventBus.$on('sellerForm', (select) => {
         this.value = select;
        console.log(this.value)
       }); */
    },
    props:['value'],
    data() {
      return {

        name: '',
        address: '',
        country: '',
        state: '',
        city: '',
        area: '',
        pincode: '',
        contact: '',
        eamil: '',
        website: '',
        about: '',
        stateList: ['Andhra Pradesh','Arunachal Pradesh','Andaman and Nicobar Islands','Assam','Bihar','Chandigarh','Chhattisgarh','Dadra and Nagar Haveli','Daman and Diu','Delhi','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Lakshadweep','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'],

      }
    },
    methods: {
      submitForm() {
        const newId = new Date().getTime()

        const product = {
          SellerID: newId,
          name: this.value.name,
          address: this.value.address,
          country: this.value.country,
          state: this.value.state,
          city: this.value.city,
          area: this.value.area,
          pincode: this.value.pincode,
          contact: this.value.contact,
          email: this.value.email,
          website: this.value.website,
          about: this.value.about,
          isSellerForm: true
        }
        const a = JSON.stringify(product)
        console.log(a)
        this.$store.dispatch('disSellerForm', a)
       /*  this.$router.push('/profile/uploadedproducts') */
        this.$emit('tryker', product)
      }
    }

  }
</script>

<style scoped>

.sellerFormContainer {
  text-align: start;
  background-color: #fff;
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

</style>
