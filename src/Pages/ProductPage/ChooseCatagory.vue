<template>
  <div class="flx">
    <div>
      <div>
        <form action="">
          <div class="form-row">
              <div class="form-group col-md-12">
                <label for="Business Nature">Business Nature</label>
                <select name="" id="" class="form-control">
                  <option value=""></option>
                </select>
                <input type="text" class="form-control" id="Business Nature" placeholder="Shop/Company">
              </div>
          </div>
        </form>
      </div>
    </div>
    <div>
      <label class="blk" for="businessNature">Choose your Business Nature</label>
      <select name="businessNature" id="businessNature">
        <option value="" v-for="businessNature in businessNatures" :key="businessNature">{{ businessNature }}</option>
      </select>
    </div>
    <div>
      <label class="blk" for="catagory"> Select Catagory</label>
      <select name="catagory" id="catagory">
        <option value="" v-for="(catagory, i) in catagoriess" :key="i">{{ catagory }}</option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        businessNatures: ['Retailer', 'Distributor/wholesaler', 'serviceprovider', 'useditem', 'rent', 'properties'],

        catagoriess: ['Electronics, TV, Appliances', 'Mobiles, Computers', 'Men', 'Women', 'kids', 'Art', 'Home, Kitchen, Pets', 'Beauty, Health',   'Grocery', 'Sports, Fitness', 'Bags, Luggage', 'Car, Motorbike, Industrial', 'Books', 'Movies, Music, Video Games', 'Gift Cards', 'Office Supplies & Stationery'],

        electronics, tv, appliances: ['Televisions', 'Home Entertainment Systems', 'Headphones', 'Speakers', 'MP3, Media Players & Accessories',   'Audio & Video','Accessories', 'Cameras', 'DSLR Cameras', 'Camera Accessories', 'Musical Instruments &      Professional Audio', 'Gaming Consoles', 'All Electronics', 'Air Conditioners', 'Refrigerators', 'Washing     Machines', 'Kitchen & Home Appliances', 'Smart Home', 'Heating & Cooling Appliances', 'All Appliances', 'All Electronics'],

        Mobiles, Computers: ['All Mobile Phones,', 'All Mobile Accessories', 'Cases & Covers', 'Screen Protectors', 'Power Banks', 'Tablets', 'Wearable Devices', 'Software', 'All Computers & Accessories', 'Laptops', 'Drives & Storage', 'Printers & Ink', 'Networking Devices', 'Computer Accessories', 'Game Zone', 'Desktops & Monitors']
      }
    }
  }
</script>

<style scoped>
.flx {
  display: flex;
}
.blk {
  display: block;
}
div {
  margin-right: 15px;
}
</style>
