<template>
  <h1>hello</h1>
  <q-card>
    <q-card-section>
      <!-- swiper -->
      <template v-if="product.images.length!==0"><h1>有很多張</h1></template>
      <!-- 一張圖片 -->
      <template v-else>
        <q-img :src="product.image"/>
      </template>
    </q-card-section>
    <q-card-section>
      {{ product.images.length }} <br>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
const $q = useQuasar()
const route = useRoute()
const product = ref({
  _id: '',
  user: '',
  price: 0,
  currency: '',
  MaxNumber: 0,
  image: '',
  images: [],
  description: '',
  category: '',
  sell: true
});
(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product.value._id = data.result._id
    product.value.user = data.result.user
    product.value.price = data.result.price
    product.value.currency = data.result.currency
    product.value.MaxNumber = data.result.MaxNumber
    product.value.image = data.result.image
    product.value.images = [...data.result.images]
    product.value.description = data.result.description
    product.value.category = data.result.category
    product.value.sell = data.result.sell
    console.log(product.value.images.length)
    console.log(product.value.images)
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: '發生錯誤'
    })
  }
})()
</script>
