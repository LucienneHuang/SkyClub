<template>
  <q-card class="realm">
    <q-card-section>
      <router-link :to="{path:'/realms/'+ realms, query : { articleId:_id} }">
        <q-img :src="image">
          <div class="hover text-h6 text-white flex content-center justify-center">
            <div class="place">{{ realms }}</div>
            <div class="quote">{{ quote }}</div>
          </div>
        </q-img>
        <div class="name text-h5 text-weight-bold text-center text-white">{{ realms }}<br>{{ title }}</div>
      </router-link>
    </q-card-section>
    <div class="back"></div>
  </q-card>
</template>
<style scoped>
.realm{
  border-top-left-radius: 3rem;
  width: 16rem;
  height: 22rem;
  margin-bottom: 6rem;
  .q-card__section--vert{
    height: 100%;
    padding: 0;
    .q-img{
      border-top-left-radius: 3rem;
      height: 100%;
      width: 100%;
    }
  }
  .q-card__section >a{
    text-decoration: none;
  }
  .name{
    position: relative;
    bottom: 4.5rem;
  }
  .back{
    width: 16rem;
    height: 22rem;
    background: #F198AF;
    border-top-left-radius: 3rem;
    z-index: -1;
    position: relative;
    bottom:24rem;
    right: 2rem;
  }
  .hover{
    filter: drop-shadow(0px 0px 5px rgba(24, 5, 94, 0.8));
    background: none;
    height: 100%;
    display: none;

    .place{
      font-size: 2.5rem;
      line-height: 4rem;
    }
  }
  .q-img:hover :deep(img){
    filter: blur(5px);
    transform:scale(1.2,1.2);
    transition: 1s;
  }
  .q-img:hover .hover{
    display: flex;
  }
  .q-img:hover + .name{
    display: none;
  }
}

</style>
<script setup>
// 用 props 把資料丟進元件裡面
import { defineProps } from 'vue'
defineProps({
  _id: {
    type: String,
    default: () => ''
  },
  category: {
    type: String,
    default: () => ''
  },
  date: {
    type: String,
    default: () => ''
  },
  description: {
    type: String,
    default: () => ''
  },
  display: {
    type: Boolean,
    default: () => true
  },
  image: {
    type: String,
    default: () => ''
  },
  original: {
    type: String,
    default: () => ''
  },
  quote: {
    type: String,
    default: () => ''
  },
  realms: {
    type: String,
    default: () => ''
  },
  title: {
    type: String,
    default: () => ''
  },
  translation: {
    type: String,
    default: () => ''
  }
})

</script>
