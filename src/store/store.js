import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase'
import axios from 'axios'


Vue.use(Vuex);

export const store = new Vuex.Store({

  state: {
    info: [],
    user: null,
    loading: false,
    error: null,
    accountsJson: [],

    trycategory: [
      { Services: "Airline Industry Services" },
      { Services: "Automotive Consultant" },

    ],

    firstOptions: {
      Sell: {a:'(example:- Product, Properties, Cloths, Machines etc.)',
             b: ['Retail', 'WholeSale', 'Old (secondhand item)', 'Property']},
      Rent: {a: '(example:- Product, Properties, Cloths, Machines etc.)',
             b: ['Property', 'Cloths', 'Lights', 'Vehicals', 'Other']},
      Services: {a: '(example:- Laundry, Internet Provider, etc.)',
                 b: ['Dry Cleaning', 'Pest Control', 'Internet Provider', 'water service', 'Vehical service', 'Catring / Food', 'Other' ]},
      Education: {a: '(example:- Classes, Tution, etc.)',
                  b: ['Tution Classes', 'Computer Education', 'Music Classes', 'Other']}
    },
      aa:[],
      bb:[],
      cc:[],

      a: ['Men', 'Women', 'Baby and Kids', 'Electronics', 'Home and Furniture', 'Sports', 'Books', 'car and Bike', 'Exercise and Fitness', 'Music', 'Movies and TV shows',    'Stationary', 'Gaming', 'Grocery', 'Health and Nutrition', 'Gourmet and Specialty Foods', 'Helmet and Riding Gear'],

      b: [[ /* MEN */'Footwear', 'Men\'s Grooming', 'Top Wear', 'Bottom wear','Personal Care Appliances', 'sports wear', 'Innerwear & Sleepwear', 'watches', 'Accessories', 'Combo Sets', 'Wedding','Ethnic Wear','Fabrics','Winter & Seasonal Wear'],
          [/* Women */'Western Wear','Sandals','Shoes','Other Footwear', 'Watches', 'Personal Care Appliances', 'Beauty & Grooming','Accessories','Wedding'],
          [/* kids */'Boys\' Clothing','Girls\' Clothing','Baby Boy Clothing','Baby Girl Clothing','Boys\' Footwear','Girls\' Footwear','Baby Footwear',           'Other Footwear','School Supplies', 'Toys', 'Baby Care'],
          [/* Electronics */ 'Mobiles','Mobile Accessories','Smart Wearable Tech','Health Care Appliances','Computer','Computer Peripherals','Computer           Accessories','Gaming & Accessories','Home Entertainment', 'Camera', 'Camera Accessories', 'Network Components'],
          [/* home & furniture */ 'Kitchen and Dining','Dining and Serving','Kitchen Storage','Furniture','Furnishing','Smart Home Automation','Home Decor','Tools & Hardware','Lighting','Pet Supplies'],
          [/* Sports */'Cricket','Badminton','Cycling','Camping & Hiking','Football','Skating','Swimming'],
          [/* Book */'Entrance Exams','Academic','Literature & Fiction','Indian Writing','Biographies','Children','Business','Self Help','Non-Fiction','Indian Language']
    ],
      c: [
          [ /* MEN's ITEMS */
            ['Sports Shoes','Casual Shoes','Formal Shoes','Sandals & Floaters','Flip- Flops','Loafers','Boots','Running Shoes','Sneakers'],
            ['Deodorants','Perfumes','Beard Care & Grooming','Shaving & Aftershave','Sexual Wellness'],
            ['T-Shirts','Shirts','Kurtas','Suits & Blazers','Jackets','Sweatshirts'],
            ['Jeans','Trousers','Shorts & 3/4ths','Cargos','Track pants'],
            ['Trimmers','Shavers','Grooming Kits'],
            ['Sports T-Shirts','Track Pants','Track Suits','Shorts'],
            ['Briefs & Trunks','Vests','Boxers','Thermals'],
            ['Wrist Watches'],
            ['Backpacks','Wallets','Belts','Sunglasses','Luggage & Travel','Frames','Jewellery'],
            ['Socks','Ties','Cufflinks','Caps','Mufflers','Scarfs','Handkerchiefs','Gloves','Shirt Studs','Pocket Squares','Arm Warmers','Cravats','Bandanas',   'Suspenders','Mittens'],
            ['Shervani']
          ],
          [ /* WOMEN'S ITEMS */
            ['Top','T-Shirts','Shirts','Dresses','Jeans','Leggings & Jeggings','Trousers','Capris','Shorts','Skirts'],
            ['Flats','Heels','Wedges'],
            ['Sports Shoes','Casual Shoes','Boots'],
            ['Ballerinas','Slippers & Flip- Flop\'s'],
            ['Wrist Watches'],
            ['Hair Straightners','Hair Dryers','Epilators'],
            ['Make Up','Skin Care','Hair Care','Bath & Spa','Deodorants & Perfumes'],
            ['Smart Bands','Handbags','Shoulder Bags','Totes','Sling bags','Clutches','Wallets & Belts','Luggage & Travel','Sunglasses','Frames'],
            ['Paaneter', 'Chanyacholi']
          ],
          [/* kids */
            ['Polos & T-Shirts','Ethnic Wear','Shorts & 3/4ths'],
            ['Dresses & Skirts','Ethnic Wear','T-shirts & Tops'],
            ['Body Suits','Polos & T-Shirts'],
            ['Body Suits','Dresses'],
            ['Sandals','Sport Shoes'],
            ['Flats & Bellies','Sport Shoes'],
            ['Booties'],
            ['Character Shoes'],
            ['School Bags','School Combo Sets','Lunch Box'],
            ['Remote Control Toys','Educational Toys','Soft Toys','Cars & Die-cast Vehicles','Outdoor Toys','Action Figures','Board Games','Musical Toys',
              'Dolls & Doll Houses','Puzzles','S.T.E.M Toys','Helicopter & Drones','Toy Guns','Party Supplies'],
            ['Diapers','Wipes','Strollers & activity Gear','Baby Bedding','Feeding & Nursing','Maternity Care','Bath Bath & Skin Care','Baby Grooming','Health & Safety','Baby Gifting Sets','Baby & Infant Toys','Baby Smart Monitors','Diapers & Potty Training','Furniture']
          ],
          [/* Electronics */
            ['Mi','Samsung','Lenovo','Motorola','OPPO','Apple','Vivo','Honor','Panasonic','Honor','Asus'],
            ['Mobile Cases','Headphones & Headsets','Power Banks','Screenguards','Memory Cards','Smart Headphones','Mobile Cables','Mobile Chargers','Mobile Holders' ],
            ['Smart Watches','Smart Glasses (VR)','Smart Bands'],
            ['Bp Monitors','Weighing Scale'],
            ['Laptops','Desktop PCs','Tablets'],
            ['Printers & Ink Cartridges','Monitors'],
            ['External Hard Disks','Pendrives','Laptop Skins & Decals','Laptop Bags','Mouse'],
            ['Gaming Consoles','Gaming Laptops','Games','Gaming Accessories','Membership Cards','Gaming Components'],
            [ 'Home Audio Speakers','Home Theatres','Bluetooth Speakers','DTH Set Top Box'],
            ['DSLR','Compact & Bridge Cameras','Sports & Action'],
            ['Lens','Tripods'],
            ['Routers']
          ],
          [/* home and furniture */
            ['Pots & Pans','Pressure Cookers','Kitchen Tools','Gas Stoves'],
            ['Coffee Mugs','Dinnerware & Crockery','Bar & Glassware'],
            ['Water Bottles','Lunch Boxes','Flasks & Casseroles','Kitchen Containers'],
            ['Beds','Sofas','Dining tables & Sets','Mattresses','Tables','Office Chairs','Chairs','Bean Bags','Shoe Racks','TV Units & Cabinets','Wardrobes','Drawers','Sofa Beds'],
            ['Bedsheets','Curtains','Cushion & Pillow Covers','Blankets, Quilts & Dohars','Towels','Kitchen & Dining Linen','Mats & Carpets'],
            ['Smart Security System','Smart Door Locks'],
            ['Paintings','Clocks','Wall Shelves','Wall Decals','Showpieces'],
            ['Hand Tools','Power Tools','Gardening Essentials','Plant Seeds'],
            ['Smart Lighting','LED & CFL','Decorative Lighting & Lamps','Emergency Light'],
            ['Pedigree','Whiskas','Royal Canin']
          ],
          [/* Sports */
            ['Cricket Bats','Cricket Balls','Stumps','Cricket Guards','Helmets','Cricket Gloves','Goggles','Cricket Grips','Katchets','Cricket Kits','Sidearm Ball Throwers','Bowling Targets','Bails','Speed Sensors','Bat Oils','Nets','Cones & Space Markers','Cricket Accessories','Cricket Bags','Covers','Bat Tapes','Bat Mallets'],
            ['Badminton Racquets','Shuttles','Kits','Badminton Bags','Badminton Grips','Badminton Strings','Badminton Nets','Covers','Tapes'],
            ['Cycles','Bells','Bicycle Forks','Pumps','Stands','Bags & Packs','Guards','Cleaning & Care','Tapes','Lights','Wheel Covers','Grips','Pannier Racks','Rider Hydration Packs','Kits','Bottle Holders','Covers','Bicycle Carriers','Helmets','Pedals','Locks','Tool Kits','Brake Shoes','Gloves','Fenders','Goggles'],
            ['Camping & Hiking Bags & Packs','Climbing Holds','Water Purifier Bottles','Climbing Pulleys','Tent Cord Adjusters','Tent Seam Tapes','Climbing Chalks','Fire Starters & Flints','Signal Mirrors','Hydration Packs','Climbing Quickdraws','Camming Devices','Trekking Poles','Tent Pegs & Stakes','Camping Accessories','Gaiters','Portable Showers','Knives & Tools','Sleeping Bags & Mats','Carabiners','Compass','Tents','Gloves','Sticks','Tool Kits','Ropes','Harnesses','Belaying Devices','Kits','Covers','Helmets','Bottles']
          ]
        ],
        d: [
          [/* women */],
          [/* Electronics */ [], ]
        ],
        procedureNewProductUpload: {},
        sellerAcount: {},
        productById: null,
        filterWantTo: [],
        wantToHeadings: [],
        sellArray: [],
        rentArray: [],
        servicesArray: [],
        educationArray: [],
        homePageViewBtn: [],
        productsListsArray: []

  },

  getters: {
    /* for products list page */
    getProductsListPage(state) {
      state.productsListsArray = state.homePageViewBtn
      return state.productsListsArray
    },
    /* for home page view all button */
    getHomePageViewBtn(state) {
      return state.homePageViewBtn
    },
    /* for Education category only */
    getEducationArry(state) {
      const aa = state.accountsJson
      let b = []
      aa.filter(a => {
        if(a.want_to === 'Education') {
          b.push(a)
        }
      })

      state.educationArray = b
      return state.educationArray
    },
    /* for Service category only */
    getServicesArry(state) {
      const aa = state.accountsJson
      let b = []
      aa.filter(a => {
        if(a.want_to === 'Services') {
          b.push(a)
        }
      })
      state.servicesArray = b
      return state.servicesArray
    },
    /* for rent category only */
    getRentArry(state) {
      const aa = state.accountsJson
      let b = []
      aa.filter(a => {
        if(a.want_to === 'Rent') {
          b.push(a)
        }
      })
      state.rentArray = b
      return state.rentArray
    },
    /* for sell product category only */
    getSellArry(state) {
      const aa = state.accountsJson
      let b = []
      aa.filter(a => {
        if(a.want_to === 'Sell') {
          b.push(a)
        }
      })
      state.sellArray = b.splice(0, 5)
      return state.sellArray
    },
    /* for want to headings */
    getWantToHeadings (state) {
      const aa = state.accountsJson
      let b = []
      aa.forEach(a => {
        b.push(a.want_to)
      })
      state.wantToHeadings = [... new Set(b)].sort().reverse()
      return state.wantToHeadings
    },
    /* for sell */
    getFilterWantTo(state) {
      return state.filterWantTo
    },
     /* dispatch id from list */
     getProductById (state) {
       console.log(state.productById)
       return state.productById
     },
    /* get seller account information */
    getSellerAccountInfo(state) {
      return state.sellerAcount
    },
    /* get procedureNewProductUpload method */
    getprocedureNewProductUpload (state) {
      return state.procedureNewProductUpload
    },
    /* for category */
    getMain(state) {
      return state.a
    },
    /* get arry after main */
    ctg(state) {
      return state.bb
    },
    /* get sub category */
    sub(state) {
      return state.cc
    },
    /* get user */
    user (state) {
      return state.user
    },
    /* set the info data in store */
    getTheInfo (state) {
      return state.info
    },
    /* get data from accounts.json file */
    getAccountsJson (state) {
      console.log(state.accountsJson)
      return state.accountsJson
    },
    /* for category choose */
    getCat(state) {
      return state.firstOptions
    },

  } ,
  mutations:{
    /* for price range */
    mutPriceRange(state, payload) {

      const aa = state.homePageViewBtn
      let b = []
      aa.filter(function(x){
         if (x.amount >= payload.min && x.amount <= payload.max) {
            b.push(x)
         }
        });
     console.log(payload.min, payload.max)
     console.log(b)

    },
    /* for Arrange price */
    mutPriceArrange(state, payload) {

      if(payload === 'ascending') {
        state.productsListsArray.sort(function(a, b){return a.amount - b.amount})
        return
      }
      if(payload === 'descending') {
        state.productsListsArray.sort(function(a, b){return b.amount - a.amount})
        return
      }

    },
    /* for view all button on home page */
    mutViewAllBtn(state, payload) {
      const aa = state.accountsJson
      let b = []
      aa.filter(a => {
        if(a.want_to === payload) {
          b.push(a)
        }
      })
      state.homePageViewBtn = b
    },

    /* for sub category filter */
    mutFliterForSubCategory(state, payload) {
      const aa = state.accountsJson
      const b = []
      aa.filter(a => {
        if (a.want_to === payload.searchBar && a.categoryInWant_to === payload.wantToCatInner && a.mainCategoryIs === payload.mainCatIs && a.secondCategoryIs === payload.secCatIs, a.subCategoryIs === payload.inner) {
          b.push(a)
        }
      })
      state.filterWantTo = b
    },
    /* for second category filter */
    mutFliterForSecCategory(state, payload) {
      const aa = state.accountsJson
      const b = []
      aa.filter(a => {
        if (a.want_to === payload.searchBar && a.categoryInWant_to === payload.wantToCatInner && a.mainCategoryIs === payload.mainCatIs && a.secondCategoryIs === payload.inner) {
          b.push(a)
        }
      })
      state.filterWantTo = b
    },
    /* for main category filter */
    mutFliterForMainCategory (state, payload) {
      const aa = state.accountsJson
      const b = []
      aa.filter(a => {
        if (a.want_to === payload.searchBar && a.categoryInWant_to === payload.wantToCatInner && a.mainCategoryIs === payload.inner) {
          b.push(a)
        }
      })
      state.filterWantTo = b
    },
    /* for filter want to category */
    mutFilterWantTo(state, payload) {
      const aa = state.accountsJson
      const b = []
       aa.filter(a => {
        if(a.want_to === payload.searchBar && a.categoryInWant_to === payload.inner)
          b.push(a)
      })
      state.filterWantTo = b
    },
    /* for Sell */
    mutForSell(state, payload) {
      const aa = state.accountsJson
      if(payload === 'All') {
        state.filterWantTo = aa
        return
      } else {

        const b = aa.filter(a => a.want_to === payload)
         state.filterWantTo = b
        }
        /* let b = 'Sell'
        let c = 'WholeSale'
        let d = 'Women'
        let e = ''
        let f = ''
        let g = []
          aa.filter(a => {
            if(a.want_to === b) {
                g.push(a)
            }

            if(a.want_to === b && a.categoryInWant_to === c) {
              g.push(a)
            }

            if(a.want_to === b && a.categoryInWant_to === c && a.mainCategoryIs === d && a.secondCategoryIs === e) {
              g.push(a)
            }
            if(a.want_to === b && a.categoryInWant_to === c && a.mainCategoryIs === d && a.secondCategoryIs === e && a.subCategoryIs === f) {
              g.push(a)
            }
          })


        console.log(b)
        return  state.filterWantTo = g */


    },
    /* dispatch id from list */
    mutProductId(state, payload) {
      const aa = state.accountsJson;
      let cc = null
      aa.forEach(function(a) {
        if(a.productId === payload) {
          cc = a
        }
      })
      state.procedureNewProductUpload = cc
      /* const b = JSON.stringify(cc)
      const STORAGE = 'product'
      sessionStorage.setItem(STORAGE, b) */
      /* console.log(b) */
      console.log(state.procedureNewProductUpload)
      /* state.productById = cc */
    },
    /* for Seller Form */
    mutSellerForm(state,payload) {
      state.sellerAcount = payload
    },
    /* for products upload btn */
    mutPrd(state, payload) {
      state.procedureNewProductUpload = payload
      /* state.procedureNewProductUpload.product = payload */

    },
    /* from category page */
    mutDisCategory(state, payload) {
      state.procedureNewProductUpload.mainCategory = payload.a,
      state.procedureNewProductUpload.secondCategory = payload.b,
      state.procedureNewProductUpload.subCategory = payload.c
      console.log(payload.a, payload.b, payload.c)
    },
    /* want_to mutation method */
    mutWantTo (state, payload) {
      state.procedureNewProductUpload.want_to = payload.a,
      state.procedureNewProductUpload.categoryInWant_to = payload.b,
      state.procedureNewProductUpload.otherCategoryInWant_to = payload.c
      console.log(payload.a, payload.b, payload.c)
    },
    /* get sub category */
    mutCategory (state, payload) {
      const a = payload.a
      const b = payload.b
      state.cc = state.c[a][b]
    },
    /* get category for upload */
    mutMain (state, payload) {
      const b = state.b[payload]
      state.bb = b
    },
    /* set the info data in store */
    setInfoStore (state, payload) {
       state.info = payload;
    },
    /* Create New User */
    setUser (state, payload) {
      state.user = payload;
    },
    /* set loader  */
    setLoader (state,payload) {
      state.loading = payload
    },
    /* Error */
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    /* get data from accounts.json file */
    setAccountsJson (state, payload) {
      state.accountsJson = payload;
      state.filterWantTo = payload;
    }
  },
  actions: {
    /* for price range */
    disPriceRange({commit}, payload) {
      commit('mutPriceRange', payload)
    },
    /* for Arrange price */
    disPriceArrange({commit}, payload) {
      commit('mutPriceArrange', payload)
    },
    /* for view all button on home page */
    disViewAllBtn({commit}, payload) {
      commit('mutViewAllBtn', payload)
    },
    /* for sub category filter */
    disFliterForSubCategory({commit}, payload) {
      commit('mutFliterForSubCategory', payload)
    },
    /* for second category filter */
    disFliterForSecCategory({commit}, payload) {
      commit('mutFliterForSecCategory', payload)
    },
    /* for main category filter */
    disFliterForMainCategory ({commit}, payload) {
      commit('mutFliterForMainCategory', payload)
    },
    /* for filter Want To category */
    disFliterWantTo ({commit}, payload) {
      commit('mutFilterWantTo', payload)
    },
    /* for Sell filter */
    disForSell({commit}, payload) {
      commit('mutForSell', payload)
    },
    /* dispatch id from list */
    disProductId({commit},payload) {
      commit('mutProductId', payload)
    },
    /* for Seller Form */
    disSellerForm({commit}, payload) {
      commit('mutSellerForm', payload)
    },
    /* for products upload btn */
    disPrd({commit}, payload) {
      commit('mutPrd', payload)
    },
    /* from category page */
    disCategoryBtn({commit}, payload) {
      commit('mutDisCategory', payload)
    },
    /* want_to dispatch method */
    wantTo({commit}, payload) {
      commit('mutWantTo', payload)
    },
    /* get category for upload */
    main ({commit}, payload) {
      commit('mutMain', payload)
    },
    /* get sub category */
    disCategory ({commit}, payload) {
      commit('mutCategory', payload)
    },
    /* get category testing */
    comCat ({commit}, payload) {
      commit('mutCat', payload)
    },
    /* set the info data in store */
    setInfoData ({ commit }) {
     /* axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        console.log(res)
        const data = res
        console.log(data.data)
        const b = Math.floor((Math.random() * (data.data.length - 5)) + 1)
        console.log(b)
        const a = data.data.splice((b -1), 5)
        console.log(a)
        commit('setInfoStore', a);
        })
      .catch(err => console.log(err)) */
      axios.get('../../static/Json.json')
      .then(res => {
          console.log(res)
          const data = res
          console.log(data.data)
          commit('setInfoStore', data.data)
        })
      .catch(err => console.log(err))
    },

    /* get data from accounts.json file */
    getAccountsJsonFile ({commit}) {
      axios.get('../../static/accounts.json')
      .then(res => {
          /* console.log(res) */
          const data = res
          /* console.log(data.data) */
          commit('setAccountsJson', data.data)
        })
      .catch(err => console.log(err))
    },

    /* auto Signin */
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid, email: payload.email})
    },

    /* Create New User */
    signUp({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            email: payload.email,
          }
          commit('setUser', newUser)
        }
      )
      .catch(err => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(err)
      })
    },
    /* login  */
    login ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            email: payload.email,

          }
          commit('setUser', newUser)
        }
      )
      .catch(err => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(err)
      })
    },
    /* Logout */
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  }
});
