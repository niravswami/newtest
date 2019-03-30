<template>
  <div>
    <p>value: {{ vale }}</p>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

  export default {
    props: {
      vale: {
        type: String
      }
    },

    data: function() {
      return {

      }
    },
   created() {
      eventBus.$on('valueaavi', (data) => {
        return this.value = data;
      });
    }
  }
</script>
<style scoped>

</style>
