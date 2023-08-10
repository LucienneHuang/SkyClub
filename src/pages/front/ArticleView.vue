<template>
  <div id="container" class="q-ma-md">
    <div id="head" class="q-my-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="最新消息" />
      </q-breadcrumbs>
      <div id="title" class="text-weight-bold non-selectable q-mt-md q-pl-md">{{article.title}}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { api } from 'src/boot/axios'
import { useQuasar } from 'quasar'
import { useRoute } from 'vue-router'
const $q = useQuasar()
const route = useRoute()
const article = ref({
  _id: '',
  title: '',
  original: '',
  translation: '',
  date: '',
  image: '',
  description: '',
  category: '',
  realms: '',
  quote: ''
});

(async () => {
  try {
    const { data } = await api.get('/articles/' + route.query.articleId)
    article.value._id = data.result._id
    article.value.title = data.result.title
    article.value.original = data.result.original
    article.value.translation = data.result.translation
    article.value.date = data.result.date
    article.value.image = data.result.image
    article.value.description = data.result.description
    article.value.category = data.result.category
    article.value.realms = data.result.realms
    article.value.quote = data.result.quote
  } catch (error) {
    console.log(error)
    $q.notify({
      type: 'negative',
      message: '發生錯誤'
    })
  }
})()
</script>
