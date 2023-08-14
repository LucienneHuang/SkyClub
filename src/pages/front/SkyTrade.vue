<template>
  <div id="container" class="q-ma-md">
    <div id="head" class="q-my-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="交易" />
      </q-breadcrumbs>
      <div id="title" class="text-weight-bold non-selectable q-mt-md q-pl-md">交易專區</div>
    </div>
    <div id="section" class="flex justify-center">
      <div v-for="product in products" :key="product._id">
        <ProductCard v-bind="product"></ProductCard>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#container{
  #title{
    border-left: .8rem solid $accent;
    font-size: 2rem;
  }
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
@media(min-width:975px){
  #container{
    #head{
      margin-left: 8rem;
      #title{
        font-size: 2.5rem;
      }
      .q-breadcrumbs{
        font-size: 1.2rem;
      }
    }

  }
}
@media(min-width:1200px){
  #container{
    #title{
      font-size: 3rem;
    }
    .q-breadcrumbs{
      font-size: 1.3rem;
    }
    #section{
      margin: 6rem 3rem;
    }
  }

}
@media(min-width:1570px){
  #container{
    #section{
      margin: 6rem 14.5rem;
    }
  }

}
</style>
<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { api } from 'src/boot/axios'
import ProductCard from 'src/components/ProductCard.vue'
const $q = useQuasar()
const products = ref([]);
(async () => {
  try {
    const { data } = await api.get('/products')
    products.value.push(...data.result)
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: '發生錯誤'
    })
  }
})()
</script>
