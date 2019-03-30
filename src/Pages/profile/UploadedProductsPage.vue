<template>
  <div class="uploadedProductsPage">
    <div>
      <div class="">
        <div v-if="products.length == 0">
          <p>there is no Product listed yet. to upload product <router-link tag="a" to='/profile/uploadproduct'>click here</router-link></p>
        </div>
        <div>
          <ul>
            <li v-for="(val, i) in products" :key="i">
              <div class="row">
                <div class="forNumber">{{i + 1}}</div>
                <div class="forImg"><img :src="val.thumbnailUrl" alt=""></div>
                <div class="forProductTitle">{{ val.title }}</div>
                <div class="forProductDate">{{ val.date }}</div>
                <div class="forDelete">x</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

export default {
  created() {
    this.checkSellerAcount
    this.isEmpty(this.checkSellerAcount)
    console.log(this.checkSellerAcount)

    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
          console.log(res)
          const data = res
          console.log(data.data)
          this.products = data.data
        })
      .catch(err => console.log(err))

  },
  data() {
    return {
      products:[
        /* {
          no: 1,
          title: 'title 1',
          img: require('../../assets/img/products/product2.jpg'),
          date: new Date()
        },
        {
          no: 2,
          title: 'title 2',
          img: require('../../assets/img/products/product1.jpg'),
          date: new Date()
        } */
      ]
    }
  },
  computed: {
    checkSellerAcount() {
      return this.$store.getters.getSellerAccountInfo
    }
  },
  methods: {
     isEmpty(obj) {
       for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
       return this.$router.push('/profile/sellerfrom');
    }
  }
}
</script>

<style scoped>
* {
  text-align: start;
}
.uploadedProductsPage {
  width: 100%;
}
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.row {
  width: 100%;
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  border-bottom: 1px solid #ebebeb;
  padding: 10px 0;
}
.forImg {
  width: 10%;
  height: 80px;
  text-align: center;
}
.forImg img {
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.forNumber {
  width: 5%;
  text-align: center;
}
.forProductTitle {
  width: 60%;
  padding: 0 15px;
}
.forProductDate{
  width: 20%;
}
.forDelete {
  padding: 0 5px;
  cursor: pointer;
}
.forDelete:hover {
  color: red;
}
</style>
