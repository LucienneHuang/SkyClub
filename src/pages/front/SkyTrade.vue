<template>
  <div id="container" class="q-ma-md">
    <div id="head" class="q-my-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="交易" />
      </q-breadcrumbs>
      <div id="title" class="text-weight-bold non-selectable q-mt-md q-pl-md">交易專區</div>
      <div class="q-mt-md q-ml-lg">
        <q-chip clickable @click="changeSortOrder('decs')" color="primary" text-color="white">
          最新
        </q-chip>
        <q-chip clickable @click="changeSortOrder('asc')" color="primary" text-color="white">
          最舊
        </q-chip>
      </div>
    </div>
    <div id="section" class="flex justify-center">
      <div v-for="product in products" :key="product._id">
        <ProductCard v-bind="product"></ProductCard>
      </div>
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
<style lang="scss" scoped>
#container{
  #section{
    margin: 6rem 2rem;
  }
}
@media(min-width:768px){
  #container{
    #section{
      margin: 6rem 0rem;
    }
}}
@media(min-width:1200px){
  #container{
    #section{
      margin: 6rem 3rem;
    }
  }

}
@media(min-width:1570px){
  #container{
    #section{
      margin: 1rem 10.5rem 5rem 10.5rem;
    }
  }

}
</style>
<script setup>
import { useQuasar } from 'quasar'
import { ref, watch } from 'vue'
import { api } from 'src/boot/axios'
import ProductCard from 'src/components/ProductCard.vue'
const $q = useQuasar()
const products = ref([])
// 排序
const sortOrder = ref('desc')
// 設定共有幾頁
const pagesOfPagination = ref(0)
// 設定一頁多少個商品
const productsPerPage = ref(9)
// 設定目前第幾頁
const currentPage = ref(1)
const getProducts = async () => {
  try {
    const { data } = await api.get('/products', {
      params: {
        currentPage: currentPage.value,
        productsPerPage: productsPerPage.value,
        sortOrder: sortOrder.value
      }
    })
    products.value.splice(0, products.value.length, ...data.result.data)
    pagesOfPagination.value = data.result.count
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: '發生錯誤'
    })
  }
};
(getProducts)()
const changeSortOrder = (order) => {
  sortOrder.value = order
}
watch(currentPage, async (newPage, oldPage) => {
  getProducts()
})
watch(sortOrder, async (newOrder, oldOrder) => {
  currentPage.value = 1
  getProducts()
})
</script>
