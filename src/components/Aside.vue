<template>
<section class="asideWrap">
    <aside>
     <ul>
        <li v-for="(prod, i) in sellArry" :key="i">
          <app-card  :info="prod"></app-card>
        </li>
      </ul>
  </aside>
</section>

</template>

<script>
import Card from './Card'

  export default {
    data() {
      return {
        counts: 4,
        color: '#F5F5F5'
      }
    },
    computed: {
      sellArry() {
        return this.$store.getters.getSellArry
      },
    },
    components: {
      'app-card': Card
    }
  }
</script>

<style scoped>
/* .asideWrap {
  background-color: #fff;
} */
  ul {
  box-sizing: border-box;
  padding: 5px 10px 5px 10px;
  list-style: none;
  margin: 10px 0 0px 20px;
  background-color: #fff;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  border-radius: 5px;
}

li {
  margin: 20px 0;
}

</style>
