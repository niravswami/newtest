<template>
  <div id="wrap">
    <div class="card">
        <div class="thumb" id="one" :style="{ backgroundImage: `url('${product.img}')` }">
          <!-- <div class="thumbContain">
            <img :src="product.thumbnail" alt="">
          </div> -->
        </div>
        <div class="option">
          <!-- <i class="material-icons">favorite</i> -->
          <!-- <i class="material-icons">Hello!!</i> -->
          <!-- <i class="material-icons">close</i> -->
        </div>
        <a class="title" href="#" @click.prevent="show(product.productId, product.title)">{{ product.title }} {{product.productId}}</a>
        <!-- <router-link tag="a" @click.prevent="show(product.productId)" target="_blank" :title="product.title" :to="{name: 'ProductDetail', params:{productId: $route.params.productId}}"><h3>{{ product.title }} {{product.productId}} </h3></router-link> -->
        <!-- <router-link tag="a" to="/" ><h3 :title="product.title" ></h3></router-link> -->

        <div class="prod-details">
          <p class="price"><span class="smft">₹</span>{{ product.strPrice }}</p>
            <div class="discountDiv">
              <span class="previous">₹{{ product.previousPrice }}</span><span class="discount">{{ product.discount }} % off</span>
            </div>
          </div>
          <div class="forMrgnBtm">
            <div class="flx forJustify">
            <div class="rating prdRating">
                  {{ product.rating }}
                  <!-- -->
                  ★
                </div>
              <p class="smlFont">Product rating</p>
            </div>
            <!-- <div class="flx forJustify">
              <div class="rating SellerRating">
                    {{ product.rating }}

                    ★
                  </div>
              <p class="smlFont">Seller rating</p>
            </div> -->
          </div>
       <!--  <p class="desc">Studio Pottery Handcrafted Brown Drip Glazed Creamic Planter Home Indoor Outdoor Gardening Flower Pot Studio Pottery Handcrafted Brown Drip Glazed Creamic Planter Home Indoor Outdoor Gardening Flower Pot</p> -->
        <!-- <div class="add"><a href="#">Add to Cart</a></div> -->
        <div class="flx">
          <button class="buy">Save</button>
          <button class="buy">Details</button>
        </div>
    </div>
    <img src="" alt="">
    <!-- <div class="card">
        <div class="thumb" id="two"></div>
        <div class="option"><i class="material-icons">favorite</i><i class="material-icons">edit</i><i class="material-icons">close</i></div>
        <h3>Kawaii Brown Pot</h3>
        <hr/>
        <p class="price">$49.99</p>
        <hr/>
        <p class="desc">Studio Pottery Handcrafted Brown Drip Glazed Creamic Planter Home Indoor Outdoor Gardening Flower Pot</p>
        <div class="add"> <a href="#">Add to Cart</a></div>
        <div class="buy"><a href="#">Buy Now</a></div>
    </div>
    <div class="card">
        <div class="thumb" id="three"></div>
        <div class="option"><i class="material-icons">favorite</i><i class="material-icons">edit</i><i class="material-icons">close</i></div>
        <h3>Vintage Glazed Pot</h3>
        <hr/>
        <p class="price">$39.99</p>
        <hr/>
        <p class="desc">Studio Pottery Handcrafted Multicolored Glazed Creamic Planter Home Indoor Outdoor Flower Pot</p>
        <div class="add"> <a href="#">Add to Cart</a></div>
        <div class="buy"><a href="#">Buy Now</a></div>
    </div> -->

</div>
</template>

<script>
  export default {
    props: ['product'],
    created(){

    },
    data() {
      return {
        hi: null
      }
    },
    methods: {
      show(id, ttl) {
        this.$store.dispatch('disProductId', id)
        this.$router.push('/productdetail/' + ttl + '/' + id );
      }
    },
    computed: {
      getProductById() {
        return this.$store.getters.getProductById
      }
    }
  }
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

/* .center, #wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */

* {
  box-sizing: border-box;
  text-align: left;
  text-decoration: none;
  font-family: "Helvetica", "Roboto", sans-serif;
}

body {
  background: #F2F2F2;
}
#wrap {
  /* width: 85%; */
  height: auto;
  padding: 30px 20px;
}
#wrap .card {
  width: 250px;
  height: 310px;
  background: #fff;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
  /* float: left; */
  /* position: relative; */
  border-radius: 5px;
  padding: 0 15px;
  justify-content: flex-end;
}
#wrap .card:nth-child(2) {
  margin: 0 2%;
}
#wrap .card:hover .thumb {
  top: -26%;
}
#wrap .card .thumb {
  width: 90%;
  height: 200px;
  border: 1px solid rgba(85, 85, 85, 0.2);
  /* background: #f0f0f0; */
  background: #fff;
  border-radius: 5px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  top: -19%;
  transform: translateX(-50%);
  z-index: 10;
  transition: 0.3s cubic-bezier(0.67, -0.12, 0.45, 1.5);
  /* box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3); */
}
#wrap .card .thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.title {
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 16px;     /* fallback */
   max-height: 36px;      /* fallback */
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
   font-size: 15px;
   letter-spacing: 0.03rem;
}
/* #wrap .card #one {
  background-image: url("https://source.unsplash.com/UcfKYTan-LU");
  background-image: url("../assets/img/slideimgs/rsz_2herocon1img1.jpg");
} */
#wrap .card #two {
  background-image: url("https://source.unsplash.com/VyKP21q9RZ8");
}
#wrap .card #three {
  background-image: url("https://source.unsplash.com/AULrWTjZm74");
}
#wrap .card .option {
  width: 60%;
  height: 30px;
  margin: 113px auto 0 auto;
  text-align: center;
}
#wrap .card .option i {
  font-size: 18px;
  line-height: 30px;
  padding: 0 5%;
  color: #E63D3A;
  opacity: 0.6;
  position: relative;
}
/* #wrap .card .option i:hover {
  cursor: pointer;
} */
#wrap .card h3 {
  font-size: 16px;
  /* font-weight: 700; */
  margin-top: 10px;
  color:#555;
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 20px;     /* fallback */
   max-height: 36px;      /* fallback */
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
   cursor: pointer;
}
#wrap .card .price {
  font-size: 20px;
  color: #4d4d4d;
  margin: 0;
  margin-top: 5px;
}
.smft {
  font-size: 16px;
  font-weight: 500;
  margin-right: 2px;
}
#wrap .card .desc {
  height: 50px;
  margin: 15px 0;
  font-size: 16px;
  line-height: 20px;
  opacity: 0.8;
  margin-top: 0;
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 16px;     /* fallback */
   max-height: 32px;      /* fallback */
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
}
 #wrap .card .buy {
  width: 48%;
  height: 24px;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: 0.3s linear;
  text-align: center;
  color: #fff;
  font-size: 14px;
  border: none;
  background: linear-gradient(to right, #ff9966 , #ff5e62);
  outline: none;
   -webkit-transition-duration: 0.4s;
    /* Safari */
    transition-duration: 0.3s;
}
#wrap .card .buy:hover {
  background: linear-gradient(to right, #ff5e62, #ff9966 );
  box-shadow: 0px 0px 5px #555;
}
#wrap .card .buy:active {
  background: linear-gradient(to right, #ff9966 , #ff5e62);
  box-shadow: 0px 0px 5px #fff;
}

.prod-details {
  display: flex;
  align-items: baseline;
  flex-direction: column;
}

.previous {
  color: #555;
  text-decoration: line-through;
  opacity: 0.7;
}
.discount{
  font-size: 14px;
  opacity: 0.8;
  color: #ef6c3c;
  margin-left: 12px;
}

.rating {
  background-color: #ef6c3c;
  background-color: #0080ff;
  line-height: normal;
  display: inline-block;
  color: #fff;
  padding: 2px 6px 3px 6px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 10px;
  vertical-align: middle;
  margin: 5px 0 5px 0;
  width: auto;
  opacity: 0.9;
}
.thumbContain {
    width: 90%;
  height: 200px;
}
.flx {
  display: flex;
  justify-content: space-between;
}
.forMrgnBtm {
  margin-bottom: 5px;
}
.smlFont {
  font-size: 13px;
  margin: 0;
  margin-left: 10px;
}
.forJustify {
  justify-content: flex-start;
  align-items: center;
}
.SellerRating {
  background-color: #0080ff;
}
@media screen and (max-width: 480px) {
  #wrap {
    top: 10%;
    transform: translate(-50%, 0);
  }
  #wrap .card {
    width: 100%;
  }
  #wrap .card:nth-child(2) {
    margin: 50px 0;
  }
  #wrap .card:nth-child(3) {
    margin-bottom: 20px;
  }
}
</style>
