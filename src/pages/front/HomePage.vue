<template>
  <!-- 最新消息區 -->
  <div id="latestNews" class="q-my-xl">
    <div class="text-center">
      <div class="title non-selectable q-mb-xl" data-aos="fade-down" data-aos-duration="800" data-aos-easing="ease-in-out-back">最新消息</div>
    </div>
    <div class="flex justify-center q-my-xl" v-for="article in latestNews" :key="article._id">
      <NewsCard v-bind="article" data-aos="flip-left"  data-aos-duration="1300" data-aos-easing="ease-in-out-back"></NewsCard>
    </div>
  </div>
  <!-- 區域區 -->
  <div id="realm">
    <div class="text-center">
      <div class="title non-selectable q-mb-xl" data-aos="fade-down" data-aos-duration="800" data-aos-easing="ease-in-out-back">區域介紹</div>
    </div>
    <swiper
    class="q-my-xl"
    :modules="modules"
    :centeredSlides="true"
    :loop="true"
    :slidesPerView="'auto'"
    :spaceBetween="10"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
  >
      <swiper-slide v-for="realm in realms" :key="realm._id">
        <RealmCard v-bind="realm" data-aos="flip-left"  data-aos-duration="1300" data-aos-easing="ease-in-out-back"></RealmCard>
      </swiper-slide>
    </swiper>
  </div>
  <!-- 視差區 -->
  <div class="parallax flex items-center q-my-xl">
    <div class="parallaxImg"></div>
    <div class="parallaxText">AURORA 安可場演唱會，8/25與你相見。</div>
  </div>
  <!-- 商品區 -->
  <div id="products">
    <div class="text-center">
      <div class="title non-selectable q-mb-xl" data-aos="fade-down" data-aos-duration="800" data-aos-easing="ease-in-out-back">交易專區</div>
    </div>
    <div class="flex justify-center q-my-xl">
      <div  v-for="product in products" :key="product._id">
        <ProductCard v-bind="product" data-aos="flip-left"  data-aos-duration="1300" data-aos-easing="ease-in-out-back"></ProductCard>
      </div>
    </div>
  </div>

</template>
<script setup>
import { ref, onUpdated } from 'vue'
import { useQuasar } from 'quasar'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { api } from 'src/boot/axios'
import RealmCard from 'src/components/RealmCard.vue'
import NewsCard from 'src/components/NewsCard.vue'
import ProductCard from 'src/components/ProductCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Autoplay]
const $q = useQuasar()

const realms = ref([])
const latestNews = ref([])
const products = ref([]);
(async () => {
  try {
    const { data } = await api.get('/articles/getRealms')
    realms.value.push(...data.result)
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: '發生錯誤'
    })
  }
})();
(async () => {
  try {
    const { data } = await api.get('/articles/getNews', {
      params: {
        currentPage: 1,
        articlesPerPage: 1,
        sortOrder: 'desc'
      }
    })
    latestNews.value.push(...data.result.data)
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: '發生錯誤'
    })
  }
})();
(async () => {
  try {
    const { data } = await api.get('/products', {
      params: {
        currentPage: 1,
        productsPerPage: 6,
        sortOrder: 'desc'
      }
    })
    products.value.push(...data.result.data)
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: '發生錯誤'
    })
  }
})()
gsap.registerPlugin(ScrollTrigger)
onUpdated(() => {
  gsap.to('.parallaxImg', {
    scrollTrigger: {
      trigger: '.parallaxImg',
      start: '-10% 50%',
      end: '90% 0%',
      scrub: true
    },
    backgroundPosition: '50% 80%',
    ease: 'none'
  })
})

</script>

<style lang="scss" scoped>
.title{
  font-weight: 700;
  display: inline-block;
  font-size: 3rem;
  &::after{
    content: "";
    position: relative;
    display: block;
    width: 100%;
    height: 15px;
    bottom: 25px;
    background-color: $primary;
    z-index: -1;
  }
}
#latestNews{
  margin-bottom:7rem ;
}
#realm,#products{
  margin: 7rem 0;
}
.swiper{
  width: 80%;
}
.swiper-slide{
    width: 95% !important;
    margin-top: 2rem;
    margin-left: 2rem;
    display: flex;
    justify-content: center;
  }
.parallax{
  height: 60vh;
  background-color: $secondary;
  margin: 7rem 0;
  position: relative;
  .parallaxImg{
    width: 100%;
    height: 90%;
    background-image: url('/src/assets/AURORA.png');
    // background-position: 50% 20%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .parallaxText{
    position: absolute;
    bottom: 2rem;
    font-weight: bolder;
    font-size: 2rem;
    color: white;
    padding-left: 1rem;
  }
}
#products{
  margin: 0rem 2rem;
}
@media(min-width: 768px){
  .swiper-slide{
    width: 45% !important;
  }
  #products{
    margin: 0rem 0rem;
  }
  .parallax{
    .parallaxText{
      font-size: 3rem;
    }
  }
}
@media(min-width: 1200px){
  .swiper-slide{
    width: 30% !important;
  }
  #products{
    margin: 0rem 10.5rem 0rem 10.5rem;
  }
  .parallax{
    .parallaxText{
      font-size: 4rem;
    }
  }
}
</style>
