<template>

  <div class="bsrs">
    <form  class="bsrsFrm" action="#">
      <select id="bsrs" name="service" v-model="selected" >
        <option v-for="(option, i) in options" :key="i" :value="option.value">{{ option.label }}</option>
      </select>
    </form>
  </div>
</template>

<script>
import { eventBus } from '../../main.js'

  export default {

    data() {
      return {

    selected: null,
    options: [
      { label: 'Buy', value: 'buy' },
      { label: 'Rent', value: 'rent' },
      { label: 'Wholeseller', value: 'wholeseller' },
      { label: 'Old', value: 'old' },
      { label: 'Services', value: 'services' },
      { label: 'Properties', value: 'properties'},
      { label: 'Education', value: 'education'}
    ]
      }
    },
    methods: {

    },
    computed: {

    },
    created() {
       this.selected = this.options[0].value;
    },

    watch:{
     selected: function() {
      eventBus.$emit('optSelect', this.selected);
     }
    }
  }
</script>

<style scoped>
  .bsrs {
    margin: 8px 20px 0 20px;
}

form.bsrsFrm select[name=service] {
    border: 0;
    font-size: 14px;
    padding: 2px;
    outline: none;
}
</style>
