<template>
  <div id="filterAside">
    <div class="outterMost">
      <div>
        <input type="radio" name="" id="priceLowToHigh" value="ascending" v-model="priceArrange">
        <label for="priceLowToHigh">Price low to high</label>
      </div>
      <div>
        <input type="radio" name="" id="priceHighToLow" value="descending" v-model="priceArrange">
        <label for="priceHighToLow">Price high to low</label>
      </div>
      <div class="star">
        <input type="range">
      </div>
      <div class="minMax">
          <label for="min">Min</label>
          <input type="number" v-model="min">
          <label for="max">Max</label>
          <input type="number" v-model="max">
      </div>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      priceArrange: '',
      min: '',
      max: ''
    }
  },
  watch: {
    priceArrange: function() {
      this.$store.dispatch('disPriceArrange', this.priceArrange)
    },
    min: function() {
      this.$store.dispatch('disPriceRange', {min: this.min, max: this.max})

    },
    max: function() {
      this.$store.dispatch('disPriceRange', {min: this.min, max: this.max})
    }
  }
}
</script>

<style scoped>
* {
  text-transform: capitalize;
  font-size: 14px;
}
#filterAside {
  width: 270px;
  padding: 30px;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  background-color: #fff;
  border-radius: 5px;
}
#filterAside .outterMost {
  padding: 30px auto;
}
</style>
