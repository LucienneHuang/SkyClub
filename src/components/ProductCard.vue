<template>
  <q-card flat class="product q-ma-lg" >
      <router-link :to="{path:'/trade/'+ _id}">
        <q-card-section>
          <q-img :src="image"/>
        </q-card-section>
      </router-link>
      <q-card-section>
        <div class="text-h5 text-weight-bolder text-center">{{ name }}</div>
        <div class="text-center text-weight-bolder" style="font-size: 1.3rem;">$&nbsp;{{ price }}&nbsp;{{ currency }}</div>
        <q-chip clickable @click="onClick" color="primary" text-color="white" icon="mdi-tag">{{category}}</q-chip>
        <div class="text-center">
          <q-btn label="Add To Cart" color="accent" rounded class="addToCart text-center"/>
        </div>
      </q-card-section>
  </q-card>
</template>
<style scoped>
.product{
  position: relative;
  width: 23rem;
  height: 27rem;
  margin-bottom: 4rem;
  .q-card__section:nth-child(1){
    padding: 0;
    height: 70%;
  }
  :deep(.q-img){
    height: 100%;
  }
  :deep(img):hover{
    transform:scale(1.2,1.2);
    transition: 2s;
  }
  &.q-card{
    filter: drop-shadow(0px 0px 5px rgba(131, 131, 131, 0.5));
  }
  &.q-card:hover .q-btn{
    visibility: visible;
    opacity: 1;
  }
}
.q-btn {
  visibility: hidden;
  opacity: 0;
  bottom: 0.3rem;
  position: relative;
  line-height: 2rem;
  filter: drop-shadow(0px 0px 4px #d5d0ff);
  transition: 0.5s;

}
</style>
<script setup>
// 用 props 把資料丟進元件裡面
import { defineProps } from 'vue'
defineProps({
  // 商品 id
  _id: {
    type: String,
    default: () => ''
  },
  // 賣家
  user: {
    type: String,
    default: () => ''
  },
  // 商品名稱
  name: {
    type: String,
    default: () => ''
  },
  // 商品價格
  price: {
    type: Number,
    default: () => 0
  },
  // 商品價格單位
  currency: {
    type: String,
    default: () => ''
  },
  // 商品數量
  MaxNumber: {
    type: Number,
    default: () => 0
  },
  image: {
    type: String,
    default: () => ''
  },
  images: {
    type: Array,
    default: () => []
  },
  description: {
    type: String,
    default: () => ''
  },
  category: {
    type: String,
    default: () => ''
  },
  sell: {
    type: Boolean,
    default: () => true
  }
})

</script>
