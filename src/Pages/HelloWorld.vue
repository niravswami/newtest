<template>
  <section>
    <div class="hello">


       <app-slider></app-slider>
      <!-- <h4>Today's Date: {{ date }}</h4> -->

     <!--  <p>{{ value }}</p> -->

    <div class="for-inline">
        <div id="main">
          <product-card ></product-card>
        </div>
         <div id="asd">
          <app-aside></app-aside>
         </div>
    </div>
</div>

  </section>

</template>

<script>
import { eventBus } from '../main.js'
import ProductCard from '../components/ProductCard'
import Slider from '../components/Slider'
import Aside from '../components/Aside'
import moment from 'moment'
import ProductsList from '../Pages/productsList'


export default {
  name: 'HelloWorld',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: '',
      prodCount: 1,
      date: moment().format('Do MMMM YYYY, h:mm:ss a')
    }
  },
  methods: {

  },
  computed: {
      sellArry() {
        return this.$store.getters.getSellArry
      },
      fireAccountsJosn () {
        return this.$store.dispatch('getAccountsJsonFile')
      }
  },

  created() {
     eventBus.$on('optSelect', (select) => {
      this.value = select;
    });
    this.fireAccountsJosn
  },
  components: {
    'product-card': ProductCard,
    'app-aside': Aside,
    'app-slider': Slider,
    ProductsList
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}

#main {
  width: 82%;
}

 #asd {
  margin-top: 10px;
  }

.for-inline{
  display: flex;
}


@media only screen and (max-width: 600px) {
  #asd {
  display: none;

  }

  #main {
  width: 100%;
}
}
</style>
