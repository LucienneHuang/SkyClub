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
    <div class="parallaxText non-selectable">AURORA 安可場演唱會<br>8/25與你相見</div>
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
import { useQuasar, QSpinnerHearts } from 'quasar'
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
    $q.loading.show({
      spinner: QSpinnerHearts,
      spinnerSize: 140,
      backgroundColor: 'primary',
      message: '資料載入中，請耐心等候...'
    })
    const realm = await api.get('/articles/getRealms')
    realms.value.push(...realm.data.result)
    const news = await api.get('/articles/getNews', {
      params: {
        currentPage: 1,
        articlesPerPage: 1,
        sortOrder: 'desc'
      }
    })
    latestNews.value.push(...news.data.result.data)
    const product = await api.get('/products', {
      params: {
        currentPage: 1,
        productsPerPage: 6,
        sortOrder: 'desc'
      }
    })
    products.value.push(...product.data.result.data)
    $q.loading.hide()
  } catch (error) {
    console.log(error)
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
      start: '0% 50%',
      end: '100% 0%',
      scrub: true
    },
    backgroundPosition: '50% -50%',
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
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .parallaxText{
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-weight: bolder;
    font-size: 1rem;
    color: white;
    background: rgba(0,0,0,0.3);
    padding:.7rem;
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
      font-size: 2.8rem;
    }
  }
}
@media(min-width: 1300px){
  .swiper-slide{
    width: 30% !important;
  }
  #products{
    margin: 0rem 2rem 0rem 2rem;
  }
  .parallax{
    .parallaxText{
      font-size: 3.6rem;
    }
  }
}
@media(min-width: 1700px){

  #products{
    margin: 0rem 14rem 0rem 14rem;
  }
}
</style>
