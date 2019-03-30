<template>
  <div>
    <div>
      <div>
        <ul class="flx">
          <li v-for="(product, i) in getFilterWantTo" :key="i">
            <div class="card">
              <div class="imgDiv">
                <img class="card-img-top" :src="product.img" alt="Card image cap ">
              </div>
              <div class="card-body">
                <a href="#" class="card-title" @click.prevent="show(product.productId)" :title="product.title">{{ product.title }}</a>
                <div class="previousPriceDiv">
                  <p>
                    <span>{{product.previousPrice}}</span>
                    <span class="discount">{{product.discount}}% off</span>
                  </p>
                </div>
                <div class="flx priceDiv">
                  <p>
                    <span>₹</span>
                    <strong>{{product.strPrice}}</strong>
                    <span v-if="product.rentPer !== ''" class="extra">/{{product.rentPer}}</span>
                  </p>
                </div>
                <div  class=" prdRating">
                  <div title="Product Rating" class="rating">
                    <!-- {{ product.rating }} -->4.6
                    <!-- -->
                    ★
                  </div>
                </div>

                <a href="#" class="btn btn-outline-info btn-sm">Save</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* data(){
    return {
      title: 'Card title Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      img: require('../../assets/img/slideimgs/rsz_2herocon1img1.jpg')
    }
  } */
  created () {
      this.a = this.getFilterWantTo
    },
  data() {
    return {
      image: 'https://www.rmg.co.uk/sites/default/files/styles/banner/public/Shop-banner.jpg?itok=FLaah2eV',
      a: []
    }
  },
  methods: {
      show(id) {
        this.$store.dispatch('disProductId', id)
        this.$router.push('/productdetail/' + id);
      }
  },
  computed: {
      getProduct() {
        return this.$store.getters.getAccountsJson
      },
      getFilterWantTo() {
        return this.$store.getters.getFilterWantTo
      }
    }
}
</script>

<style scoped>
  * {
  font-size: 14px;
  list-style: none;
  font-weight: 500;
  letter-spacing: 0.05rem;
  text-align: left;
}
.card {
  width: 210px;
  height: 350px;
  overflow: hidden;
  transition: 0.2s ease;
  margin: 5px;
}
ul {
  margin: 10px auto;
}
li {
  margin-top: 12px;
}
p {
  margin: 0px;
}
.flx{
  display: flex;
  flex-wrap: wrap;
}
.imgDiv {
  width: 210px;
  height: 151px;
}
.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.card-body {
  flex-direction: column;
  justify-content: flex-end;
  display: flex;
}
.priceDiv {
  align-items: baseline;
}
.priceDiv p strong{
  font-size: 18px
}
.btn-sm{
  width: 100%;
  text-align: center;
}

.card-title, .card-text {

   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 16px;     /* fallback */
   max-height: 36px;      /* fallback */
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
}
.card:hover {
    /* transform: scale(1.03); */
    box-shadow: 0 0 4px #ef6d3c;
}
.previousPriceDiv p span:nth-of-type(1) {
  font-size: 13px;
  margin-right: 10px;
  text-decoration: line-through;
  color: #878787;
}
.discount {
  opacity: 0.8;
  color: #ef6c3c
}
.rating {
  background-color: #ef6c3c;
  line-height: normal;
  display: inline-block;
  color: #fff;
  padding: 2px 6px 3px 6px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 11px;
  vertical-align: middle;
  margin: 10px 0 10px 0;
  /* width: 16%; */
  opacity: 0.8;
}

</style>
