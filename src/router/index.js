import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../Pages/HelloWorld.vue'
import ProductDetail from '../Pages/ProductPage/ProductDetail'
import SignupForm from '../components/SignupForm'
import SigninForm from '../components/SigninForm'
import ProfilePage from '../Pages/profile/ProfilePage'
import UploadedProductsPage from '../Pages/profile/UploadedProductsPage'
import EditProfile from '../Pages/profile/EditProfile.vue'
import SellerForm from '../Pages/profile/SellerForm.vue'
import UploadProduct from '../Pages/ShopLook/UploadProduct.vue'
import Category from '../pages/ShopLook/Category'
import UploadProductView from '../Pages/ShopLook/thumbImg.vue'
import ShopLook from '../Pages/ShopLook/ShopLook.vue'
import ProductsAndRentPage from '../Pages/ShopLook/ProductsAndRent.vue'
import ProductsList from '../Pages/productsList'

import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      /* beforeEnter: AuthGuard */
    },
    {
      path: '/productdetail/:productTitle/:productId?',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/login',
      name: 'SigninForm',
      component: SigninForm
    },
    {
      path: '/signup',
      name: 'SignupForm',
      component: SignupForm
    },
    {
      path: '/shoplook',
      name: 'ShopLook',
      component: ShopLook,
      children: [
        {path: '', name: 'productsAndRentPage', component: ProductsAndRentPage},
        {path: '/shoplook/uploadproduct', component: UploadProduct},
        {path: '/shoplook/choosecategory', component: Category },
        {path: '/shoplook/productupload', component: UploadProductView },
      ]
    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: ProfilePage,
      children: [
        {path: '', name: 'profileView', component: EditProfile },
        {path: '/profile/uploadedproducts', name: 'uploadedProductsListPage', component: UploadedProductsPage},
        {path: '/profile/sellerfrom',name: 'sellerForm', component: SellerForm },
      ]
    },
    {
      path: '/productslist',
      name: 'productslist',
      component: ProductsList
    },
    {
      path: '*',
      component: {template: '<h1>Page Not Found</h1>'}
    }

  ]
})
