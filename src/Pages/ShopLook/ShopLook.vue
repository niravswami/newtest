<template>
  <div class="container">
    <div class="ShopShutterContainer">
      <div>
        <div class="shopShutter shadow">
          <div class="shopPicDiv">
            <img class="br-5px" :src="image" alt="">
          </div>
          <input type="file" accept="image/*" class="d-none" name="" @change="changeShoplookImg" id="imgFile">
          <button @click="btnForChangeShoplookImg" class="imgBtn">Change Pic</button>
        </div>
        <div v-if="info.isSellerForm" class="shopInfo flx spaceBetween br-5px shadow">
          <div>
            <h2>{{info.name}}</h2>
            <div>
              <div class="flx mt-2">
                <div class="width30">
                  Address
                </div>
                <div class="width70">
                  {{info.address}}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30">
                  Area
                </div>
                <div class="width70">
                  {{info.area}}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30">
                  city
                </div>
                <div class="width70">
                  {{info.city}}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30">
                  state
                </div>
                <div class="width70">
                  {{info.state}}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30">
                  Contact
                </div>
                <div class="width70">
                  {{info.contact}}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30">
                  Email
                </div>
                <div class="width70">
                  {{info.email}}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30">
                  web site
                </div>
                <div class="width70">
                 <a :href="info.website" target="_blank" >{{info.website}}</a>
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30">
                  About
                </div>
                <div class="width70 aboutOutput">
                  <pre>{{info.about}}</pre>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="#" @click.prevent="editAccount">edit account</a>
          </div>
        </div>
        <div v-else>
          <div>
            <div>
              <seller-form :value="info" @tryker="info = $event"></seller-form>
            </div>
          </div>
        </div>
        <div class="belowShopInfo">
          <div class="shopLocation flx spaceBetween alignItemCenter br-5px shadow">
            <ul class="nav">
              <li class="nav-item ">
                <!-- <router-link class="nav-link active" @mouseup.prevent="forWantTo" :to="{name: 'productsAndRentPage'}" name="Sell"><a>Products</a></router-link> -->
                <a class="nav-link liNav active" @mouseup.prevent="forWantTo" href="javascript: void(0);" name="All">All</a>
              </li>
              <li :v-if="value" class="nav-item " v-for="value in getWantToHeadings" :key="value">
                <!-- <router-link class="nav-link active" @mouseup.prevent="forWantTo" :to="{name: 'productsAndRentPage'}" name="Sell"><a>Products</a></router-link> -->
                <a class="nav-link liNav" @mouseup.prevent="forWantTo" href="javascript: void(0);" :name="value">{{value}}</a>
              </li>
            </ul>
            <div>
              <router-link tag="a" to="/shoplook/uploadproduct">Add New Item</router-link>
            </div>
          </div>
          <div>
            <div class="routerViewDiv">
              <keep-alive>

              </keep-alive>
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../main.js'
import SellerForm from '../profile/SellerForm'
export default {
  created () {
      this.fireAccountsJosn
    },

  data() {
    return {
      image: 'https://www.rmg.co.uk/sites/default/files/styles/banner/public/Shop-banner.jpg?itok=FLaah2eV',
      wantToHeadings: [
        ],
      /* wantToHeadings: [
                        {val: 'Selling', name: 'Sell'},
                        {val: 'Rent', name: 'Rent'},
                        {val: 'Services', name: 'Services'},
                        {val: 'Education', name: 'Education'},
        ], */
      info: {
        name: 'Shop / Enterprise / Person Name',
        address: 'Shop / office / Home Address',
        country: 'India',
        state: 'Gujarat',
        city: 'Surat',
        area: 'Bataar',
        pincode: '395007',
        email: 'test@gmail.com',
        contact: '0261-123456, 9876543210, 8974563210',
        website: 'https://www.google.co.in/',
        about: 'hello!!!',
        isSellerForm: true
      },
      tryupdate: 'h'

    }
  },
  methods: {
    onStat() {
      const aa = this.getProduct
      let b = []
      aa.forEach(a => {
        if(a.want_to) {
          b.push(a.want_to)
        }
      })
      this.wantToHeadings = b
      console.log(b)

    },
    editAccount() {
      /* eventBus.$emit('sellerForm', this.info); */
      this.info.isSellerForm = false
    },
    btnForChangeShoplookImg() {
          const button = document.querySelector('#imgFile');
          button.click();
      },
    changeShoplookImg: function (event) {
        // Reference to the DOM input element
        var input = event.target;
          /* console.log(event) */
        let id = input.parentElement.id;
        // Ensure that you have a file before attempting to read it
        if (input.files && input.files[0]) {
          // create a new FileReader to read this image and convert to base64 format
          var reader = new FileReader();
          // Define a callback function to run, when FileReader finishes its job
          reader.onload = (e) => {
            // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
            // Read image as base64 and set to imageData
            this.image = e.target.result;
          }
          // Start the reader job - read file as a data url (base64 format)
          reader.readAsDataURL(input.files[0]);
        }
      },
      forWantTo(e) {
        this.$store.dispatch('disForSell', e.target.name)

        this.tryupdate = e.target.name;

        const aa = document.querySelectorAll('.liNav')
        aa.forEach(a => {
            a.classList.remove('active')
          if(a.name === e.target.name) {
            a.classList.add('active')
          }
        })
        this.$router.push('/shoplook')
      }
  },
  computed: {
      getProduct() {
        return this.$store.getters.getAccountsJson
      },
      fireAccountsJosn () {
        return this.$store.dispatch('getAccountsJsonFile')
      },
      getWantToHeadings() {
        return this.$store.getters.getWantToHeadings
      }
    },
    watch: {
      tryupdate: function(value) {
        eventBus.$emit('propertyTrue', value)
       /*  console.log(this.tryupdate) */
      }
    },
    components: {
      SellerForm
    }
}
</script>

<style scoped>
* {
  /* margin: 0;
  padding: 0; */
  /* text-transform: capitalize; */
  /* text-align: left; */
  word-wrap: break-word;
  /* color: #333; */
  box-sizing: border-box;
  font-family:  'Helvetica', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.03rem;
}
pre {
  white-space: pre-wrap;       /* CSS 3 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
  /* padding:0px;
  margin:0px */
}
.container {
  padding: 0;
}
p {
  margin: 0;
  margin: 5px 15px 5px 0px;
}
.p-padding {
  padding-left: 10px;
}
.br-5px{
  border-radius: 5px;
}
.flx {
  display: flex;
  font-size: 14px;
}
.spaceBetween {
  justify-content: space-between;
}
.alignItemCenter {
  align-items: center;
}
.width70{
  width: 70%;
}
.width30{
  width: 30%;
}
.shadow {
  box-shadow: #555 0px 5px 2px;
}
.ShopShutterContainer {
  margin: 0 auto;
  padding: 10px 0px;
  width: 80%;
}
.shopShutter {
  position: relative;
}
.shopPicDiv {
  width: 100%;
  height: 360px;
}
.shopPicDiv img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.imgBtn{
  position: absolute;
  bottom: 20px;
  right: 80px;
  background: rgba(85, 85, 85, 0.7);
  border: none;
  color: #fff;
  width: 10%;
  cursor: pointer;
  font-size: 13px;
}
.imgBtn:hover {
  background-color: #555;
}
.shopInfo {
  text-align: start;
  padding: 10px 30px;
  background-color: #fff;
  margin-top: 10px
}
.aboutOutput pre{
  font-size: 14px;
}
.belowShopInfo {
  margin-top: 10px;
}
.shopLocation {
  background-color: #fff;
  padding: 10px 30px;
}
.nav-link{
  color: #555;
}
.nav-link:hover {
  color: #ff5e62;
}
.active {
  color: #ff5e62;
}
.routerViewDiv{
  margin-top: 10px;
  width: 100%;
}
</style>
