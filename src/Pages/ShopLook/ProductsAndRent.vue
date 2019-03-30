<template>
  <div >
    <div class="mainContainer flx">
      <div v-if="filterShow" class="width20">
        <!-- for products -->
        <div  class="mainCatDiv br-5px forsell shadow">
          <div class="brd">
              <div>
                  <ul>
                    <li v-for="(valWant, i) in wantToCat" :key="i+valWant" :id="i" class=" catWantTo brd">
                      <span data-span="wantspan"  class="cursor" @click.prevent="searchProduct(i, valWant, $event)" :id="i">{{valWant}}</span>
                      <div>
                        <ul data-child="wewant" :id="i" class="dnone">
                          <li  class="main" v-for="(valmain, i) in main" :key="i+valmain">
                            <span class="cursor"  @click="forMainCategory(valmain, i, $event)" :id="i">{{valmain}}</span>
                            <div>
                              <ul data-child="secCat" :id="i" class="dnone">
                                <li v-for="(valsec,i) in sec" :key="i+valsec" class="sec" >
                                  <span class="cursor" @click="forSecondCategory(valsec, i, $event)" :id="i">{{valsec}}</span>
                                  <div>
                                    <ul data-child="subCat" :id="i" class="dnone">
                                      <li v-for="(valsub,i) in sub" :key="i+valsub" class="sub" >
                                        <span class="cursor" @click="forSubCategory(valsub, i, $event)" :id="i">{{valsub}}</span>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
              </div>
          </div>



          <!-- <div  @click.prevent="searchProduct" v-for="(valW, i) in wantToCat" :key="i" class="wantto brd">
            {{valW}}
            <div v-for="(valm, i) in main" :key="i" class="main ">
              {{valm}}
              <div class="sec " v-for="(vals, i) in sec" :key="i">
                {{vals}}
                <div v-for="(valb, i) in sub" :key="i" class="sub ">
                  {{valb}}
                </div>
              </div>
            </div>
          </div> -->

          <!-- <div @click.prevent="filterSell"  v-for="(val, i) in main" :key="i" class="main">
            {{val}}
            <div class="sec" v-for="(val, i) in sec" :key="i">
               {{val}}
              <div v-for="(val, i) in sub" :key="i" class="sub">
                {{val}}
              </div>
            </div>
          </div> -->
         <!--  <div class="p-2" v-if="forProperty">
            Property
          </div> -->
        </div>
      </div>
      <div class="width80 listDiv br-5px shadow">
        <div>
          <card-holder></card-holder>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../main.js'
import ProductCard from '../../components/ProductCard'
import CardHolder from '../ShopLook/CardHolder'
export default {
  created() {
    const aa = this.getProduct
    console.log(aa)
    eventBus.$on('propertyTrue' , (data) => {
      if(data === 'All') {
        this.filterShow = false
        } else {
          this.startMeth(data)
          this.searchBar = data
          this.forProperty = true
          this.filterShow = true
        }
      })

  },

  data() {
    return {
      wantToCat: [],
      /* wantToCat: ['Retail', 'WholeSale', 'Old (secondhand item)'], */
      main: [],
      sec: [],
      sub: [],
      forProperty: false,
      filterShow: false,
      searchBar: '',
      wantToCatInner: '',
      mainCatIs: '',
      secCatIs: '',
      subCatIs: '',

    }
  },
  computed: {
    getProduct() {
        return this.$store.getters.getFilterWantTo
      },
      getFromJson() {
        return this.$store.getters.getAccountsJson
      }

  },
  methods: {
    forSubCategory(valsub, i, $event) {
      this.$store.dispatch('disFliterForSubCategory', {searchBar: this.searchBar, wantToCatInner: this.wantToCatInner, mainCatIs: this.mainCatIs, secCatIs: this.secCatIs, inner: valsub})
    },
    forSecondCategory(va, idx, $event) {
     const b = $event.target.innerHTML
     const aa = this.getFromJson
     this.secCatIs = va
     this.sub = []
     let subCat = []
          aa.forEach(a => {
            if( a.secondCategoryIs === b) {
                  this.sub = []
                  subCat.push(a.subCategoryIs)
                  this.sub = [... new Set(subCat)]
                  /* console.log([... new Set(subCat)]) */
                }
          })
        const cc = document.querySelectorAll( `ul[data-child="subCat"]`)
              cc.forEach(c => {
                  c.classList.add('dnone')
                if(c.id == $event.target.id) {
                  c.classList.remove('dnone')
                }
              })
              this.$store.dispatch('disFliterForSecCategory', {searchBar: this.searchBar, wantToCatInner: this.wantToCatInner, mainCatIs: this.mainCatIs, inner: va})
    },
    forMainCategory(va, idx, $event) {
     const b = $event.target.innerHTML
     const aa = this.getFromJson
     this.mainCatIs = va
     this.sec = []
     let secCat = []
          aa.forEach(a => {
            if( a.mainCategoryIs === b) {
                  this.sec = []
                  secCat.push(a.secondCategoryIs)
                  this.sec = [... new Set(secCat)]
                  /* console.log([... new Set(secCat)]) */
                }
             })
        const cc = document.querySelectorAll( `ul[data-child="secCat"]`)
              cc.forEach(c => {
                  c.classList.add('dnone')
                if(c.id == $event.target.id) {
                  c.classList.remove('dnone')
                }
              })
              this.$store.dispatch('disFliterForMainCategory', {searchBar: this.searchBar, wantToCatInner: this.wantToCatInner, inner: va})
    },
    startMeth(va) {
      const aa = this.getFromJson
      let catWant = []
        aa.forEach(a => {
          if(a.want_to === va) {

            catWant.push(a.categoryInWant_to)
          }
        })
            this.wantToCat = [... new Set(catWant)]
    },
    searchProduct(idx, va, $event) {
        this.filterSell(va)
        const b = this.searchBar
        this.wantToCatInner = va

        const cc = document.querySelectorAll(`span[data-span="wantspan"]`)
        cc.forEach(c => {
              c.classList.remove('active')
          if($event.target.parentElement.id === c.id) {
            console.log('k')
              c.classList.add('active')

          }
        })
        const aa = document.querySelectorAll( `ul[data-child="wewant"]`)
          aa.forEach(a => {
              /* if(va === 'Property') {
                 a.classList.add('dnone')
                return
              } */
              a.classList.add('dnone')
            if(a.id == $event.target.id) {
              a.classList.remove('dnone')
            }
          })
          this.$store.dispatch('disFliterWantTo', {inner: va, searchBar: b})
      },
    filterSell(incoming) {

      const aa = this.getFromJson
     let bb = this.arr2;
     let catWant = []
     let mainCat = []
     let secCat = []
     let subCat = []
     this.main = []
    aa.forEach(a => {
      if (a.want_to === 'Sell') {
        /* if(a.categoryInWant_to === 'Property') {

          return
        } */
          if(a.categoryInWant_to === incoming) {
            mainCat.push(a.mainCategoryIs)
            this.main = [... new Set(mainCat)]
            /* console.log([... new Set(mainCat)]) */
          }

        }
    })
    }
  },
  watch: {

  },
  components: {
    ProductCard,
    CardHolder
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
  text-align: start;
}
ul,li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.flx {
  display: flex;
}
.dnone {
  display: none;
}
.width20 {
  width: 20%;
  margin-right: 10px;
}
.width80 {
  width: 100%
}
.shadow {
  box-shadow: #555 0px 0px 2px;
}
.br-5px {
  border-radius: 5px;
}
.brd {
  border-bottom: 1px solid #d3d3d3;
}
.cursor {
  cursor: pointer;
}
.mainCatDiv {
  background-color: #fff;
  font-size: 14px;
}
.listDiv {
  background: #fff;
}
.catWantTo {
  margin: 0px 0px 0px 0px;
  padding: 10px 0px 10px 15px;
}
.main{
  margin: 5px 0px 0px 15px;
}
.sec {
  margin: 5px 0px 0px 15px;
}
.sub{
  margin: 5px 0px 0px 15px;
}
.active {
  color: #ff5e62;
}
</style>
