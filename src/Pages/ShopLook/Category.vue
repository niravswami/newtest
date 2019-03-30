<template>
  <div class="containerHolder p-5 ">
    <div>
      <div >
        <h5 class="mb-3">Choose Category</h5>
        <form action="" >
          <div class="flx col-md-12">
            <div class="my-1 col-md-4">
              <label class="" for="category">Main Category</label>
            <select v-model="main"  class="custom-select" size="10">
                <option value="" selected disabled>choose..</option>
                <option  v-for="(value, i) in getMain" @click="dismain(i)" :key="i">{{value}}</option>
                <option value="">Other</option>

              </select>
              <div class="form-row mt-3">
                <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Other">
                </div>
              </div>
            </div>
            <div class="my-1 col-md-4">
              <label  for="subcategory">Category</label>
              <select class="custom-select"  v-model="category" size="10">
                <option value="" selected disabled>choose..</option>
                <option :value="val" v-for="(val, i) in getCtg" @click="disCategory(i)" :key="i">{{val}}</option>
                <option value="">Other</option>
              </select>
              <div class="form-row mt-3">
                <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Other">
                </div>
              </div>
            </div>
            <div class="my-1 col-md-4">
              <label  for="subcategory">Sub Category</label>
              <select class="custom-select" v-model="subCategory" size="10">
                <option value="" selected disabled>choose..</option>
                <option :value="val" v-for="(val, i) in getSub" :key="i">{{val}}</option>
                <option value="">Other</option>
              </select>
              <div class="form-row mt-3">
                <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Other">
                </div>
              </div>
            </div>
          </div>
      </form>
      <button @click="categoryBtn" class="mt-3 btn btn-primary" >Next</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      main: null,
      category: null,
      subCategory: null,
      idx: null
    }
  },
  computed: {
    getMain () {
      return this.$store.getters.getMain
    },
    getCtg() {
      return this.$store.getters.ctg
    },
    getSub() {
      return this.$store.getters.sub
    }
  },
  methods: {
    dismain(i) {
      const a = this.main
      this.idx = i
      this.$store.dispatch('main', i)
    },
    disCategory(i) {
      const a = this.idx
      const b = i
      this.$store.dispatch('disCategory',{a:a, b:b})
    },
    categoryBtn() {
      this.$store.dispatch('disCategoryBtn', {a: this.main, b: this.category, c: this.subCategory})
      if(this.main === null && this.category === null || this.subCategory === null) {
        alert('please choose all fields')
        return
      } else {
                this.$router.push('/shoplook/productupload');
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
.containerHolder{
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
.flx {
  display: flex;
}
</style>
