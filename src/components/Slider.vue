<template>

<div class="slider-wrap">
  <carousel
        :autoplay="false"
        :perPage= 1
        :loop="false"
        :autoplayTimeout= 3000>

    <slide >
      <div href="#" class="link">
          <div class="blur" style="background:	url('https://www.sealogis.com/wp-content/uploads/2018/04/sealogis-img-062-1000x400.jpg') 50% 50% / cover;">
          </div>
           <img src="https://www.sealogis.com/wp-content/uploads/2018/04/sealogis-img-062-1000x400.jpg" alt="Title" class="pic" />
        </div>
    </slide>
     <slide>
        <div href="#" class="link">
           <div class="blur" style="background:	url('http://joesmalley.com/wp/wp-content/uploads/2016/08/MG_9023-2-1200x400.jpg') 50% 50% / cover;">
           </div>
           <img src="http://joesmalley.com/wp/wp-content/uploads/2016/08/MG_9023-2-1200x400.jpg" alt="Title" class="pic" />
         </div>
     </slide>
     <slide>
        <div href="#" class="link">
           <div class="blur" style="background: 																	url('http://www.jadestone-apartments.com/backend/wp-content/uploads/2013/01/gym-3-website-960x400.jpg') 50% 50% / cover;">
           </div>
            <img src="http://www.jadestone-apartments.com/backend/wp-content/uploads/2013/01/gym-3-website-960x400.jpg" alt="Title" class="pic" />
        </div>
     </slide>
     <slide>
         <div href="#" class="link">
          <div class="blur" style="background: 																	url('http://www.planwallpaper.com/static/assets/img/header.jpg') 50% 50% / cover;">
          </div>
          <img src="http://www.planwallpaper.com/static/assets/img/header.jpg" alt="Title" class="pic" />
        </div>
     </slide>
  </carousel>
</div>

<!-- <div class="slider-wrap">
  <carousel-3d :autoplay='true' :autoplay-timeout='2000' :width='622' :height='350' :space='280'>
    <slide :index="0">
      <img src="../assets/img/slideimgs/rsz_2herocon1img1.jpg"  >
    </slide>
    <slide :index="1">
      <img src="../assets/img/slideimgs/rsz_1big2.jpg" >
    </slide>
    <slide :index="2">
      <img src="../assets/img/slideimgs/rsz_1big3.jpg" >
    </slide>
    <slide :index="3">
      <img src="../assets/img/slideimgs/n1.jpg" >
    </slide>
    <slide :index="4">
      <img src="../assets/img/slideimgs/n2.jpg" >
    </slide>
  </carousel-3d>
</div> -->

</template>

<script>
  /* import { Carousel3d, Slide } from 'vue-carousel-3d'; */
 import { Carousel, Slide } from 'vue-carousel';

  export default {
    data() {
      return {

        slides: 10
      }
    },
     components: {
       /*  Carousel3d,
        Slide */
        Carousel,
        Slide
    }
  }
</script>

<style scoped >

 /*  body { */
    /* background: #000046;  */ /* fallback for old browsers */
   /*  background: -webkit-linear-gradient(to left, #1CB5E0, #000046);  */ /* Chrome 10-25, Safari 5.1-6 */
    /*  background: linear-gradient(to left, #1CB5E0, #000046); */ /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
/* } */
.slider-wrap {
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  border-radius: 5px;
  margin: 10px 20px;
}

/* img {
  width: 100%;
 max-height: 400px;
object-fit: scale-down;

} */


.link {
  display: block;
  width: 100%;
  height: 400px;
  position: relative;
  border-right: 2px solid #ddd;
}

.blur {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  -moz-filter: blur(8px);
  -o-filter: blur(8px);
  -ms-filter: blur(8px);
}

.pic {
  width: calc(100% - 40px);
  max-width: 100%;
  max-height: 400px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  object-fit: scale-down;

}

/* .pic:hover {
  transition: all 0.2s ease-out;
  transform: scale(1.1);
  text-decoration: none;
  border: none;
} */
</style>

