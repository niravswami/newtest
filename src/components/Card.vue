<template>
  <div class="card" style="width: 210px;" >
    <div class="imgContainer">
      <img class="card-img-top" :src="info.img" alt="Card image cap">
    </div>
    <div class=" px-3 mt-3">
        <a href="#"><h5 class="card-title" :title="info.title">{{ info.title }}</h5></a>
    </div>
    <div class="card-body">
        <p class="card-text">₹ {{ info.strPrice }} </p>
        <button class="btn btn-info" href="#" target="_blank" >Save</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import { mapGetters } from 'vuex'

  export default {
    props: ['info'],
    data() {
      return {
        data: {}
      }
    },
    created() {

    },
    computed: {
      ...mapGetters ([

      ])
    }
  }
</script>

<style scoped>
  /* CARD */
* {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;
}
.imgContainer {
  width: 210px;
  height: 151px;
}
.card-img-top {
  object-fit: scale-down;
  height: 100%;
  width: 100%;
}

.card {
  height: 350px;
  overflow: hidden;
  transition: 0.2s ease;
  display: flex;
  justify-content: space-between ;
}
.card-title {

   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 16px;     /* fallback */
   max-height: 36px;      /* fallback */
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
}

.card:hover {
    transform: scale(1.03);
    box-shadow: 0 0 4px #ef6d3c;
}
.card-body {
  height: 100%;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
}
.card-body button {
  text-align: center;
}
</style>
