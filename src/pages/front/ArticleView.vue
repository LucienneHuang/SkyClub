<template>
  <div id="container" class="q-ma-md">
    <div id="head" class="q-my-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el v-if="article.category==='區域介紹'" label="區域介紹" to="/realms" />
        <q-breadcrumbs-el v-else label="最新消息" to="/latestnews" />
        <q-breadcrumbs-el label="文章" />
      </q-breadcrumbs>
      <div id="title" class="text-weight-bold non-selectable q-mt-md q-pl-md">
        <span v-if="article.realms!=='無'">{{ article.realms }}</span>
        {{article.title}}
      </div>
      <div id="date" class="text-h5 text-weight-bold non-selectable q-mt-md">{{ article.date }}</div>
    </div>
    <!-- 放主要圖片 -->
    <div class="flex justify-center">
      <q-img :src="article.image" style="width: 100%;"/>
      <div class="source" v-if="article.original!==''"><a :href="article.original">原文網址</a></div>
      <div class="source" v-if="article.translation!==''"><a :href="article.translation">翻譯來源</a></div>
    </div>
    <!-- 放文章內容 -->
    <div id="section" class="q-pl-xl">
      <p class="text-h6" v-html="article.description "></p>
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

<style lang="scss" scoped>
#container{
  #date{
    margin-left: 2rem;
  }
  .source{
    margin: 1rem 0 1rem 1rem;
  }
  .source a{
    padding: 0.5rem;
    border-radius: 25px;
    border: 1px solid $primary;
    text-decoration: none;
    font-size: 1.4rem;
    color: $primary;
    font-weight: 600;
    &:hover{
      color: white;
      background: $primary;
      transition: 1s;
    }
  }
  .q-img{
    margin: 1rem 2rem;
  }
  #section{
    padding: 0 2rem;
    margin: 1rem 0 5rem;
    :deep(div:has(img)){
      text-align: center;
    }
    :deep(div img){
      width: 100%;
      margin: 3rem 0 1rem 0;
    }
    :deep(a){
      text-decoration: none;
      color: $primary;
      &:hover{
        background: $primary;
        color: white;
        transition: 1s;
      }
    }
  }
}
@media(min-width:975px){
  #container{
    .q-img{
      margin: 2rem 10rem;
    }
    #section{
      margin: 1rem 8rem 5rem 8rem;
    }
  }
}
@media(min-width: 1600px){
    #container{
      .q-img{
        margin: 2rem 19rem;
      }
      #section{
        margin: 1rem 17rem 5rem 17rem;
      }
    }
}
</style>
