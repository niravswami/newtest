<template>
    <div class="loacationPincode">
        <form class="loca" action="#" method="get">
          <div>
             <input  @keyup ="listShow = true " v-model="selectedCity" type="text" class="city" list="city" name="city" placeholder="City" title="City" autocomplete="off"  ref="city">
            <ul class="suggestions cityUl" v-if="listShow">
              <li @click="select" v-for="(option, i) in database" :key="i">{{ option.city }}<span class="liSpan"> {{ option.rtocode }}</span></li>
            </ul>
          </div>
<!-- <span>{{ option.city }}</span><span class="liSpan"> {{ option.state }}</span> -->

            <div>
                <input @focus="noSelect" v-model="selectedArea"  type="text" class="search area"  list="area" name="area" placeholder="Area" title="Area" autocomplete="off" ref="area" :disabled="isdisabled">
                <ul class="suggestions areaUl" v-if="listShow" >
                   <li  v-for="(areaa, i) in areapass" :key="i" ><span>{{areaa}}</span></li>
                </ul>
            </div>


       <!--    <input v-model="selectedArea" type="text" class="area" list="area" name="area" placeholder="Area" title="Area">
            <datalist id="area">
              <option v-for="areaa in areapass" :key="areaa" :value="areaa"></option>
            </datalist> -->
        </form>
    </div>
</template>

<script>

  export default {
    data() {
      return {

        selectedCity: null,


        options: [
         /*  { city: 'Ahmedabad', state: 'GJ', value: 0 },
          { city: 'Anand', state: 'GJ', value: 1 },
          { city: 'Surat', state: 'GJ', value: 2 },
          { city: 'Vadodara', state: 'GJ', value: 3 },
          { city: 'Rajkot', state: 'GJ', value: 4 },
          { city: 'Bhavnagar', state: 'GJ', value: 5  },
          { city: 'Mustafabad', state: 'DL', value: 6},
          { city: 'Karawal Naga', state: 'DL', value: 7  }
          */ ],

          selectedArea: null,
          areapass: [],
          areaOption: [],
          listShow: false,
          isdisabled: false
        }
      },
       created() {

              },

      methods: {

          select($event) {
            const cityInput = this.$refs.city;

              cityInput.value = $event.target.textContent;
            this.selectedCity = cityInput.value;
            this.listShow = false;

             this.isdisabled === true ? this.isdisabled = false : '';
            this.$refs.area.placeholder = 'Area';


             console.log(cityInput);

            console.log($event.target.textContent);
          },

          change() {

            if (this.selectedCity !== null) {
              this.listShow = false;
            }


           },

           noSelect() {
             const cityInput = this.$refs.city.value;
             if (cityInput === '') {
               this.isdisabled = true;
               this.$refs.area.placeholder = 'Please Select City';
             }
           }

      },
      watch: {

        selectedCity: function() {
          this.change();
        }

       /*  selectedCity: function() {
          const stct = this.selectedCity;
          const str = 'Surat'
          if (stct.toLowerCase() === str.toLowerCase() ) {
            this.selectedArea = null;
          return this.areapass = ['Bhatar',
                      'Vesu',
                      'Pandesara',
                      'Ring Road',
                      'Adajan'];
                      this.listShow = true;
        } else if (this.selectedCity == 'Vadodara') {
           this.selectedArea = null;
            return this.areapass = ['baajvada', 'maandvi', 'magalbajaar'];
            this.listShow = true;

        } else if (this.selectedCity == 'Ahmedabad') {
          this.selectedArea = null;
         return this.areapass = ['Bopal', 'Gandhinagar', 'Paldi', 'Naranpura', 'Vejalpur', 'Motera', 'Sanand', 'Chandkheda', 'Maninagar', 'Naroda', 'Bavla', 'Ranip','Usmanpura','Shahibaug','Chandlodiya','Bapunagar','Mandal','Maninagar','Manek Chowk','Mehmadabad','Memnagar Ahmedabad','Nandej','Nandol','Naranpura','Naranpurvistar']
         this.listShow = true;

        } else {

          return this.areapass = ['please select City'];
        }

        } */
      },
      components: {
      }
     }

</script>

<style scoped>
    *, *:before, *:after {
      box-sizing: inherit;
    }


  /*--------------||---LOCATION & PINCODE DIV---||-------------*/

.loacationPincode {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: 30px;
    margin-top: 10px;
}

/*--------------CITY & AREA-------------*/

form.loca {
    display: flex;
}

form.loca input[list=city],
form.loca input[list=area] {
    width: 149px;
    border: 0;
    border-bottom: 1px solid #ef6c3c;
    text-align: center;
    outline: none;
}

form.loca input[list=area] {
    margin: 0 10px;
}

.liSpan {
  text-align: right;
  font-size: 10px;
  padding: 0px 5px;
}







    input.search {
      /* margin: 0; */
      text-align: center;
      outline:0;
     /*  position: relative; */
      z-index: 2;

    }


    .suggestions {
      max-height: 200px;
      overflow: scroll;
      overflow-x: hidden;
     /*  margin: 0;
      padding: 0; */
      /* position: absolute; */
      width: 149px;
     /*  position: relative; */
      /*perspective:20px;*/
    }
     .suggestions li {
      background:white;
      list-style: none;
      /* border-bottom: 1px solid #D8D8D8; */
      text-align: left;
      padding:0px 5px;
       width: 149px;
      display:flex;
      justify-content:space-between;
      text-transform: capitalize;
      align-items: center;
      font-size: 14px;
      text-overflow: ellipsis;
    }
      ul {
      position: absolute;
      /* top: 110px; */
       z-index: 2;
      padding:0px;
      box-shadow: 0px 0px 4px rgba(84, 84, 84, 0.20);
      border-radius: 5px;
    }

    .areaUl {
       margin-left: 10px;
    }


    ul li:hover {
      color: #ef6c3c;
      cursor: pointer;
    }

     ul li:active {
      background-color: #ef6c3c;
      color: #fff;
    }

    /* SCROLLBAR */
::-webkit-scrollbar {
    width:  5px;

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
