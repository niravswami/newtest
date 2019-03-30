<template>
  <section id="prodPageSection">

  <div class="container">
    <div>
      productid: {{prdId}}
      product Tile: {{prdTitle}}
    </div>
    <div class="mainDiv flx">
      <div class="imgDiv flx">
        <div class="thumbDiv flx bckGrdClr padding10 brdrds5 shadow">
          <div v-for="(img, i) in images" :key="i" class="thumbnailDiv " :id="i">
            <div class="thumbnail brdrds5">
              <img class="brdrds5"  @mouseover="mouseover" :ref="'img' + i" :src="img.src">
            </div>
          </div>
        </div>
        <div class="mainPicDiv bckGrdClr padding10 brdrds5 shadow">
          <img :src="img"  class="mainImage brdrds5"  alt="">
        </div>
          <!-- <div class="detail"></div> -->
      </div>
      <div class="detailDiv bckGrdClr padding10 brdrds5 shadow">
        <div class="forTitle padding">
          <div v-if="isPath">
          <div>
            <div class="flx categoryPathDiv">
              <a href="#" class="rightPadding">{{getItem.mainCategoryIs}}</a>
              <span class="rightPadding">></span>
              <a href="#" class="rightPadding">{{getItem.secondCategoryIs}}</a>
              <span class="rightPadding">></span>
              <a href="#" class="rightPadding">{{getItem.subCategoryIs}}</a>
            </div>
          </div>
        </div>
        <div v-else></div>
          <div class="titleDiv">
            <h5>{{ getItem.title }}</h5>
            <div class="rating">
              4.2
              <!-- -->
              ★
            </div>
          </div>
        </div>
        <div class="priceDiv padding">
          <div class="previousPriceDiv flx">
            <div class="previousPrice">
              <div class="previousOutput clr87"><span>₹ {{ getItem.previousPrice }} </span>
              </div>
            </div>
            <div class="taxes">
              <div class="tax clr87" v-if="getItem.checked" for="checkbox">(Inclusive Of All Taxes)</div>
            </div>
          </div>
          <div class="priceAndDiscount flx">
            <div class="price flx">
              <span>₹</span>
              <h4>{{ getItem.strPrice }}</h4>
            </div>
            <div v-if="isRent" class="discount">
              <div class="discountOutput clr87">{{ getItem.discount }} % off</div>
            </div>
            <div v-else>
              <div class="rentOutput ">/ {{ getItem.rentPer }}</div>
            </div>
          </div>
        </div>
        <div class="mainDescriptionDiv">
          <div v-if="isProperty" class=" row padding textCenter">
            <label for="brand" class=" col-form-label brand descriptionHeading">Brand</label>
            <div class="brandOut">
              <div class="">{{ getItem.brand }}</div>
            </div>
          </div>
          <div v-else class="  padding textCenter">
            <div class="fnt14">
              <div class="mb-3">
                 <h5 class="clr87">Property Location</h5>
              </div>
              <div class="flx">
                <div class="width30 clr87">
                  Address
                </div>
                <div class="width70">
                  {{ getItem.propertyLocation }}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30 clr87">
                  Area
                </div>
                <div class="width70">
                  {{ getItem.area }}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30 clr87">
                  city
                </div>
                <div class="width70">
                  {{ getItem.city }}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30 clr87">
                  state
                </div>
                <div class="width70">
                  {{ getItem.state }}
                </div>
              </div>
              <div class="flx mt-2">
                <div class="width30 clr87">
                  Pincode
                </div>
                <div class="width70">
                  {{ getItem.pincode }}
                </div>
              </div>

            </div>

          </div>
          <ul>
            <li v-for="(description, i) in getItem.descriptions" :key="i" class="lists padding">
              <div class="flx" :data-preview="'heading'+i">
                <div class="descriptionHeading">
                  <pre class="clr87">{{ description.heading }}</pre>
                </div>
                <div class="values">
                  <pre>{{ description.text }}</pre>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import { eventBus } from '../../main.js'

/* import Drift from 'drift-zoom'; */
 export default {
   name: 'ProductDetail',
  mounted() {
    this.getItem
  },
   created() {
     /* eventBus.$on('thumb', (data) => {
       console.log(data);
        return this.item = data;
      }); */

        this.getItem /* = JSON.parse(sessionStorage.getItem('product'))
        console.log(this.getItem) */

       /* this.item = this.getItem */

      if (this.getItem === {}){
        return this.$router.push('/profile/productupload')
      }
      /* if (!{}.hasOwnProperty.call(this.getItem, "product")){
        return this.$router.push('/profile/productupload')
      } */
      this.img = this.getItem.img
      this.images = this.getItem.images
      if(this.getItem.want_to!== 'Sell') {
        this.isPath = false
      }
      if(this.getItem.want_to === 'Rent') {
        if(this.getItem.categoryInWant_to !== 'Property') {
          this.isPath = true
          this.isRent = false
        } else {
          this.isRent = false
        }
      }
      if (this.getItem.categoryInWant_to === 'Property') {
        this.isProperty = false
        this.isPath = false
      }
   },
   data() {
     return {
       isRent: true,
       isPath: true,
       isProperty: true,
       item: null,
       img: null,
       images: null,
       prdId: this.$route.params.productId,
       prdTitle: this.$route.params.productTitle
     }
   },
   methods: {
     mouseover(e) {
        const id = e.target.parentElement.parentElement.id;
        if (id == '0') {
          this.img = this.images[0].src;
        } else if (id == '1') {
          this.img = this.images[1].src;
        } else if (id == '2') {
          this.img = this.images[2].src;
        } else if (id == '3') {
          this.img = this.images[3].src;
        } else if (id == '4') {
          this.img = this.images[4].src;
        }
      }
      /* imageZoom() {
        var demoTrigger = document.querySelector('.mainImage');
        var paneContainer = document.querySelector('.detail');

          new Drift(demoTrigger, {
          paneContainer: paneContainer,
          inlinePane: false
            });
      } */
   },
   computed: {
     getItem() {
       return this.$store.getters.getprocedureNewProductUpload
     },
     getProductById() {
        return this.$store.getters.getProductById
      }
   }
 }
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  /* text-transform: capitalize; */
  text-align: left;
  word-wrap: break-word;
  color: #555;
  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
pre {
  white-space: pre-wrap;       /* CSS 3 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
  padding:0px;
  margin:0px
}
.clr87 {
  color: #878787;
}
.flx {
  display: flex;
}
.dnone {
  display: none;
}
.padding {
  padding: 10px 30px;
  border-bottom: 1px solid #f0f0f0;
}
.fnt14 {
  font-size: 14px;
}
ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}
input[type="text"], input[type="number"] {
  background-color: aliceblue;
  outline: none;
  border: none;
  width: 100%;
}
.width70{
  width: 70%;
}
.width30{
  width: 30%;
}
.bckGrdClr {
  background-color: #fff;
}
.brdrds5 {
  border-radius: 5px;
}
.shadow {
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
}
.container {
  margin: 0 auto;
}
.mainDiv .imgDiv {
  margin: 50px auto auto auto;
  position: sticky;
  top: 70px;
}
.padding10 {
  padding: 10px;
}
.mainDiv .imgDiv .thumbDiv {
  flex-direction: column;
  border-top: 1px solid #f0f0f0;
  height: 100%;
}
.mainDiv .imgDiv .thumbDiv .thumbnailDiv {
height: auto;
position: relative;
margin-bottom: 4px;
}
.thumbnailDiv:last-of-type {
  margin-bottom: 0px !important;
}
.thumbnailDiv:hover {
  color: black;
}
.mainDiv .imgDiv .thumbDiv .thumbnailDiv .thumbnail {
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-style: none;
  border: 1px solid #ededed;
}
.mainDiv .imgDiv .thumbDiv .thumbnailDiv .thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.mainDiv .imgDiv .mainPicDiv {
  width: 500px;
  height: 500px;
  margin: 0px 10px;
}
.mainDiv .imgDiv .mainPicDiv img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  vertical-align: top;
  border: 1px solid #f0f0f0;
}
.categoryPathDiv{
  padding: 0 10px 10px 0px;
  font-size: 13px;
}
.rightPadding {
  margin-right: 10px;
}
.mainDiv .detailDiv {
  width: 100%;
  margin-top: 50px;
  height: 100%;
}
.descriptionsButtons span img  {
  cursor: pointer;
}
.mainDiv .detailDiv .forTitle .productName {
  font-size: 1rem;
  line-height: 1.2;
}
.mainDiv .detailDiv .previousPriceDiv .previousPrice {
  margin-right: 30px;
}
.previousPrice .previousOutput {
  text-decoration: line-through;
}
.mainDiv .detailDiv .priceAndDiscount {
  align-items: baseline;
}
.discountOutput {
  color: #ef6c3c;
  margin-left: 30px;
}
.rentOutput {
  color: #808080;
}
.mainDiv .detailDiv .priceAndDiscount .price {
  align-items: baseline;
}
.mainDiv .detailDiv .priceAndDiscount .price h2 {
  margin-right: 30px;
  padding-top: 10px;
}
.price span {
  font-size: 20px;
  margin-right: 5px;
}
.descriptionHeading {
  padding-right: 10px;
  width: 30%;
  border-right: 2px solid #ebebeb;
}
.values{
  width: 70%;
  margin-left: 30px;
}
.brand {
  width: 28%;
}
.brandOut {
  margin-left: 30px;
}
.values-li {
  list-style-type: disc;
  font-size: 14px;
}
.rating {
  background-color: #ef6c3c;
  line-height: normal;
  display: inline-block;
  color: #fff;
  padding: 2px 6px 3px 6px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
  vertical-align: middle;
  margin-top: 15px;
}

</style>
