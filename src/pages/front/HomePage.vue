<template>
  <h2>Home</h2>
  <!-- 最新消息區 -->
  <div id="latestNews">
    <!-- 放文字 -->
    <div class="flex justify-center q-my-xl" v-for="article in latestNews" :key="article._id">
      <NewsCard v-bind="article"></NewsCard>
    </div>
  </div>
  <div id="realm">
    <!-- 放文字 -->
    <swiper
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
      <RealmCard v-bind="realm"></RealmCard>
    </swiper-slide>
  </swiper>
  </div>
  <div class="parallax flex items-center">
    <div class="parallaxImg"></div>
  </div>
  <div style="height: 2000px;"></div>
</template>
<style lang="scss" scoped>
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
  height: 50vh;
  background-color: $secondary;
  .parallaxImg{
    width: 100%;
    height: 90%;
    background-image: url('/src/assets/AURORA.png');
    background-position: 50% 70%;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
@media(min-width: 768px){
  .swiper-slide{
    width: 45% !important;
  }
}
@media(min-width: 1200px){
  .swiper-slide{
    width: 30% !important;
  }
}
</style>
<script setup>

import { ref, onUpdated } from 'vue'
import { useQuasar } from 'quasar'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { api } from 'src/boot/axios'
import RealmCard from 'src/components/RealmCard.vue'
import NewsCard from 'src/components/NewsCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Autoplay]
const $q = useQuasar()

const realms = ref([])
const latestNews = ref([]);
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
})()
gsap.registerPlugin(ScrollTrigger)
onUpdated(() => {
  gsap.to('.parallaxImg', {
    scrollTrigger: {
      trigger: '.parallaxImg',
      start: 'top 50%',
      end: 'bottom 0%',
      scrub: true
    },
    backgroundPosition: '50% -50%',
    ease: 'none'
  })
})
</script>
