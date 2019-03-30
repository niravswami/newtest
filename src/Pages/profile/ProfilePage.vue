<template>
  <div class="profilePageDiv">
    <div>
      <div class="flx">
        <div class="sideLinks col-md-2">
          <div class="shopInfo"></div>
          <div class="profileMenus">
            <ul>
              <router-link tag="li" active-class="active" :to="{name: 'profileView'}" exact><a>Profile</a></router-link>
              <router-link tag="li" active-class="active" :to="{name: 'uploadedProductsListPage'}" ><a>Products List</a> </router-link>
              <router-link tag="li" active-class="active" :to="{name: 'sellerForm'}"><a>Seller Account</a></router-link>
            </ul>
          </div>
        </div>
        <div class="routerLinkDiv col-md-10">
          <!-- <keep-alive>
          <router-view></router-view>
          </keep-alive> -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.flx {
  display: flex;
}
ul {
  padding: 0;
}
li{
  list-style: none;
  border-bottom:  1px solid #ebebeb;
  padding: 15px;
  cursor: pointer;
}
.profilePageDiv {
  padding: 40px 0;
}
.sideLinks {
  width: 200px;
  height: 700px;
  border-right: 1px solid #ebebeb;
}
.profileMenus {
  height: 100%;
  text-align:  left;
}
</style>
