<template>
  <section  >
    <!--<div id="product-section"  v-for="(inf, i) in setInfo" :key="i">
      <div class="for-tittle" >
        <button class="btn viewAll">View All</button>
        <h3>{{ inf.shop }}</h3>
      </div>

      <div class="liwrp" >
        <ul>
          <li>
            <app-card></app-card>
          </li>
          <li v-for="(prod, i) in inf.products" :key="i">
            <app-card :info="prod"></app-card>
             <div class="card" style="width: 210px;">
                <img class="card-img-top" :src="inf.url" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">{{ inf.title }}</h5>
                  <p class="card-text">{{ inf.id }} </p>
                  <a class="btn">{{ inf.albumId }}</a>
                </div>
              </div>
          </li>
        </ul>
      </div>
    </div>-->
    <div id="product-section">
      <div class="for-tittle" >
        <button @click.prevent="viewAllBtn($event)" name="Sell" class="btn viewAll">View All</button>
        <h3>Sell</h3>
      </div>
      <div class="liwrp" >
        <ul>
          <li v-for="(prod, i) in sellArry" :key="i">
            <app-card :info="prod"></app-card>
          </li>
        </ul>
      </div>
    </div>
    <div id="product-section">
      <div class="for-tittle" >
        <button @click.prevent="viewAllBtn($event)" name="Rent" class="btn viewAll">View All</button>
        <h3>Rent</h3>
      </div>
      <div class="liwrp" >
        <ul>
          <li v-for="(prod, i) in rentArry" :key="i">
            <app-card :info="prod"></app-card>
          </li>
        </ul>
      </div>
    </div>
    <div id="product-section">
      <div class="for-tittle" >
        <button @click.prevent="viewAllBtn($event)" name="Services" class="btn viewAll">View All</button>
        <h3>Services</h3>
      </div>
      <div class="liwrp" >
        <ul>
          <li v-for="(prod, i) in servicesArry" :key="i">
            <app-card :info="prod"></app-card>
          </li>
        </ul>
      </div>
    </div>
    <div id="product-section">
      <div class="for-tittle" >
        <button @click.prevent="viewAllBtn($event)" name="Education" class="btn viewAll">View All</button>
        <h3>Education</h3>
      </div>
      <div class="liwrp" >
        <ul>
          <li v-for="(prod, i) in educationArry" :key="i">
            <app-card :info="prod"></app-card>
          </li>
        </ul>
      </div>
    </div>


  </section>

</template>

<script>
/* import axios from 'axios' */
import Card from './Card'
import CardHolder from '../Pages/ShopLook/CardHolder'
import ListCard from '../components/ListCard'
/* import { mapState, mapGetters } from 'vuex' */

  export default {
    created() {
      /* axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)
        const data = res
        console.log(data.data)
        const b = Math.floor((Math.random() * (data.data.length - 5)) + 1)
        console.log(b)
        const a = data.data.splice((b -1), 5)
        console.log(a)
        const c = a;
        })
      .catch(err => console.log(err)) */
      /* axios.get('../../static/Json.json')
      .then(res => {
          console.log(res)
          const data = res
          console.log(data.data)
          this.$store.state.info = data.data;
        })
      .catch(err => console.log(err)) */
      this.getInfo
    },
    props: ['info'],
    data() {
      return {
        counts: '',
      }
    },
    methods: {
      viewAllBtn($event) {
        console.log($event.target.name)
        this.$store.dispatch('disViewAllBtn', $event.target.name)
        this.$router.push('/productslist')
      }
    },
    computed: {
      getInfo () {
        return this.$store.dispatch('setInfoData')
      },
      setInfo () {
        return this.$store.getters.getAccountsJson
      },
      sellArry() {
        return this.$store.getters.getSellArry
      },
      rentArry() {
        return this.$store.getters.getRentArry
      },
      servicesArry() {
        return this.$store.getters.getServicesArry
      },
      educationArry() {
        return this.$store.getters.getEducationArry
      }
    },
    components: {
      'app-card': Card,
      CardHolder,
      ListCard
    }
  }


</script>

<style scoped>
#product-section {
    margin: 20px 0 20px 20px;
    background-color: #fff;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    border-radius: 5px;
}

.for-tittle {
    display: flex;
    padding: 20px 0 5px 30px;
    flex-direction: row;
    align-items: center;
    outline: none;
}

ul {
  display: flex;
  box-sizing: border-box;
  padding: 0;
  list-style: none;
  margin: 0 20px;
}
.brdrds {
  border-radius: 5px;
}

li {
  margin: 20px 10px;
}


.liwrp {
 overflow-x: auto;
overflow-y: hidden;
}

.liwrp:hover {
  overflow-x: visible;

}

/* BUTTON */

.viewAll {
    padding: 8px 15px;
    font-size: 12px;
    border: 1px solid #ef6d3c;
    background-color: transparent;
    color: #ef6d3c;
    margin-right: 30px;
    border-radius: 5px;
    transition: 0.2s ease;

}

.viewAll:hover,.viewAll:visited {
  background: linear-gradient(to right, #ff9966 , #ff5e62);
  color: #fff;
}

.viewAll:active {
  color: #555;
}

 /* CARD */

.card-img-top {
  object-fit: scale-down;
}

.card {
  max-height: 400px;
  overflow: hidden;
  transition: 0.2s ease;
}

.card:hover {
    transform: scale(1.03);
    box-shadow: 0 0 4px #ef6d3c;
}


/* SCROLLBAR */
::-webkit-scrollbar {
    height: 7px;

}
/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #ef6d3c;
}

</style>
