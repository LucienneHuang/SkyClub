<template>
  <q-card flat class="product q-ma-lg" >
      <router-link :to="{path:'/trade/'+ _id}">
        <q-card-section>
          <q-img :src="image"/>
        </q-card-section>
      </router-link>
      <q-card-section>
        <div class="text-center text-weight-bold">賣家：{{ user }}</div>
        <div class="text-h5 text-weight-bolder text-center">{{ name }}</div>
        <div class="text-center text-weight-bolder" style="font-size: 1.3rem;">{{ price }}&nbsp;{{ currency }}</div>
        <q-chip clickable @click="onClick" color="primary" text-color="white" icon="mdi-tag">{{category}}</q-chip>
        <div class="text-center">
          <q-btn label="Add To Cart" @click="addCart" color="accent" rounded class=" text-center"/>
        </div>
      </q-card-section>
  </q-card>
</template>
<style scoped>
.product{
  position: relative;
  width: 23rem;
  height: 31rem;
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
import { useQuasar } from 'quasar'
import { defineProps } from 'vue'
import sweetalert from 'sweetalert2'
import 'animate.css'
import { apiAuth } from 'src/boot/axios'
const $q = useQuasar()
const props = defineProps({
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

const addCart = async () => {
  try {
    await apiAuth.post('/users/cart', {
      product: props._id,
      seller: props.user,
      quantity: 1
    })
    await sweetalert.fire({
      icon: 'success',
      title: '新增購物車成功',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      iconColor: '#B0A9EC',
      confirmButtonColor: '#B0A9EC',
      width: '20rem'
    })
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}
</script>
