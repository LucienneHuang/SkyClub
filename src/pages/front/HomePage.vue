<template>
  <h2>Home</h2>
  <div class="test">
    <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }"
  >
    <swiper-slide v-for="realm in realms" :key="realm._id">
      <RealmCard v-bind="realm"></RealmCard>
    </swiper-slide>
  </swiper>
  </div>
  <div v-for="article in latestNews" :key="article._id">
    <NewsCard v-bind="article"></NewsCard>
  </div>
</template>
<style lang="scss" scoped>
@media(min-width: 768px){

}
@media(min-width: 1200px){
  .swiper{
    width: 80%;
    .swiper-slide{
      width: 100% /3;
      margin-top: 2rem;
      margin-left: 2rem;
    }
}

}
</style>
<script setup>

import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import RealmCard from 'src/components/RealmCard.vue'
import NewsCard from 'src/components/NewsCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
// import { Pagination } from 'swiper/modules'

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

</script>
