<template>
<!-- sellResellPage -->

  <div class="containerHolder p-5">
    <div>
      <div class="c">
        <h5 class="mb-3">What do you want?</h5>
        <form action="">
        <div class="form-check mb-3" v-for="(val, key, i) in getCat" :key="i" >
          <input class="form-check-input" type="radio" @change="radioBtnChange(key, i)" v-model="want_to" name="exampleRadios"  :value="key">
          <label class="form-check-label" for="exampleRadios1">
            {{ key }} <span class="f">{{ val.a }}</span>
          </label>
          <div class="dnone" :id="i" data-forSelect="key">
            <div class="form-group col-md-4">
            <select class="form-control" @change="otherSelected" v-model="option">
              <option value="" selected disabled>Choose..</option>
              <option v-for="(cat, i) in val.b" :key="i" :value="cat">{{ cat }}</option>
            </select>
            </div>
            <div class="col-md-4" v-if="otherCategory">
              <input type="text" v-model="other_category" class="form-control" placeholder="Other">
            </div>
          </div>
        </div>
      </form>
      <button class="btn btn-primary"  @click="goNext" >Next</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      want_to: null,
      option:  null,
      other_category: null,
      otherCategory: false
    }
  },
  computed: {
    getCat() {
      return this.$store.getters.getCat
      console.log(this.$store.getters.getCat)
    }
  },
  methods: {
    goNext() {
        if(this.want_to === null) {
          alert('please provide information')
          return
        }
        if(this.option === null){
          alert('please provide categary')
          return
        } else if (this.option.toLowerCase() === 'other' && this.other_category === null) {
          alert('please provide categary')
          return
        }else {
            this.$store.dispatch('wantTo',{a: this.want_to, b: this.option, c: this.other_category})
              if(this.want_to.toLowerCase() === 'sell') {
                if(this.option.toLowerCase() === 'property') {

                  this.$router.push('/shoplook/productupload')
                  return
                }
                this.$router.push('/shoplook/choosecategory')
                  return
              }

              if(this.want_to.toLowerCase() === 'rent') {
                if(this.option.toLowerCase() === 'property') {
                  this.$router.push('/shoplook/productupload')
                  return
                }
                this.$router.push('/shoplook/choosecategory')
              }

              if(this.want_to.toLowerCase() === 'services') {
                this.$router.push('/shoplook/productupload')
                return
              }

              if(this.want_to.toLowerCase() === 'services') {
                this.$router.push('/shoplook/productupload')
                return
              }

              if(this.want_to.toLowerCase() === 'education') {
                this.$router.push('/shoplook/productupload')
                return
              }

             }
    },
    radioBtnChange (select, index) {
      this.otherCategory = false
      this.option = ''
      this.other_category = ''
      const a = document.querySelectorAll('div[data-forSelect="key"]')
      a.forEach(z => {
         z.classList.add('dnone')
        if (z.id == index) {
          z.classList.remove('dnone')
        }
      })
        return
    },
    otherSelected() {
      if(this.option.toLowerCase() === 'other') {
        this.otherCategory = true
        return
      } else {
        this.otherCategory = false
        return
      }
    }
  },
  watch: {

  }
}
</script>

<style scoped>
* {
  text-align: start;
}
.containerHolder {
  background-color: #fff;
}
.dnone {
  display: none;
}
label .f {
  color: #bebebe;
  font-size: 12px;
  margin-left: 5px;
}
</style>
