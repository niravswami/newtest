<template>
  <div class="demo">
    <div class="h1"><filter-aside></filter-aside></div>
    <div class="ab">
      <ul class="cd">
        <li  v-for="(product, i) in getProduct" :key="i">
          <list-card :product="product"></list-card>
        </li>
      </ul>


    </div>
  </div>
</template>

<script>
import FilterAside from '../Pages/ProductPage/components/FilterAside'
import ListCard from '../components/ListCard'
  export default {
    created () {
      this.fireAccountsJosn
    },
    data() {
      return {
        count: 16
      }
    },
    computed: {
      getProduct() {
        return this.$store.getters.getProductsListPage
      },
      fireAccountsJosn () {
        return this.$store.dispatch('getAccountsJsonFile')
      }
    },
    components: {
      ListCard,
      FilterAside
    }
  }
</script>

<style scoped>
.h1 {
  width: 300px;
}
.demo {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 50px;

  /* background : linear-gradient(30deg, rgb(204, 59, 40) 0%, rgba(249, 140, 87, 0.98) 100%); */
}
.ab {
  width: 100%;
  margin: 0 auto;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 60px 0px 0px 0px;
  border-radius: 5px;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
}
.cd {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}

</style>
