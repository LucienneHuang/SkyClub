<template>
  <div id="container" class="q-ma-md">
    <div id="head" class="q-my-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="最新消息" />
      </q-breadcrumbs>
      <div id="title" class="text-weight-bold non-selectable q-mt-md q-pl-md flex">最新消息
        <q-input class="q-ml-md q-mt-sm " rounded outlined v-model="search" color="accent" label="請輸入文章關鍵字">
          <template v-slot:append>
            <q-icon name="search" color="accent" size="2.5rem"/>
          </template>
        </q-input>
      </div>
      <div class="q-mt-md q-ml-lg">
        <q-chip clickable @click="changeSortOrder('decs')" color="accent" text-color="white">
          最新
        </q-chip>
        <q-chip clickable @click="changeSortOrder('asc')" color="accent" text-color="white">
          最舊
        </q-chip>
      </div>
    </div>
    <div id="section" class="flex justify-center q-my-xl" v-for="article in latestNews" :key="article._id">
      <NewsCard v-bind="article" data-aos="fade-up"  data-aos-duration="800" data-aos-easing="ease-in-out-back"></NewsCard>
    </div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="currentPage"
        :max="pagesOfPagination"
        boundary-links
        direction-links/>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import NewsCard from 'src/components/NewsCard.vue'
const $q = useQuasar()
const latestNews = ref([])
// 排序
const sortOrder = ref('desc')
// 設定共有幾頁
const pagesOfPagination = ref(0)
// 設定一頁多少文章
const articlesPerPage = ref(5)
// 設定目前第幾頁
const currentPage = ref(1)
// 搜尋欄位
const search = ref('')
const getNews = async () => {
  try {
    const { data } = await api.get('/articles/getNews', {
      params: {
        currentPage: currentPage.value,
        articlesPerPage: articlesPerPage.value,
        sortOrder: sortOrder.value,
        search: search.value
      }
    })
    latestNews.value.splice(0, latestNews.value.length, ...data.result.data)
    pagesOfPagination.value = data.result.count
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: '發生錯誤'
    })
  }
}
(getNews)()
const changeSortOrder = (order) => {
  sortOrder.value = order
}
watch(currentPage, async (newPage, oldPage) => {
  getNews()
  window.scrollTo(0, 0)
})
watch(sortOrder, async (newOrder, oldOrder) => {
  currentPage.value = 1
  getNews()
})
watch(search, async (newOrder, oldOrder) => {
  currentPage.value = 1
  getNews()
})
// onMounted(() => {
//   AOS.init()
// })
</script>
