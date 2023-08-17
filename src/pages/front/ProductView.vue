<template>
  <q-dialog v-model="dialog" persistent="">
    <q-card style="width: 20rem;" class="q-py-md">
        <q-card-section>
          <div class="text-h5 text-center">商品已下架</div>
        </q-card-section>
        <q-card-section class="q-pt-none text-h6 text-center">
          －即將跳轉到交易主頁－
        </q-card-section>
        <q-card-actions align="center">
          <q-btn label="OK" to="/trade" color="primary" v-close-popup />
        </q-card-actions>
    </q-card>
  </q-dialog>
  <div id="container">
    <div id="head" class="q-mt-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="交易" to="/trade" />
        <q-breadcrumbs-el label="商品資訊" />
      </q-breadcrumbs>
      <div id="title" class="text-weight-bold non-selectable q-mt-md q-pl-md">{{product.name}}</div>
    </div>
    <div id="section" class="flex justify-center">
      <q-card>
        <q-card-section horizontal class="all">
          <!-- 圖片 -->
          <q-card-section class="left">
            <!-- swiper -->
            <template v-if="product.images.length!==0">
              <swiper
                :modules="modules"
                :loop="true"
                :pagination="{
                  clickable: true,
                }"
                :autoplay="{
                    delay: 4000,
                    disableOnInteraction: false,
                  }"
              >
                  <swiper-slide :key="product.image">
                    <q-img :src="product.image"/>
                  </swiper-slide>
                  <swiper-slide v-for="img in product.images" :key="img">
                    <q-img :src="img"/>
                  </swiper-slide>
              </swiper>
            </template>
            <!-- 一張圖片 -->
            <template v-else>
              <q-img :src="product.image"/>
            </template>
          </q-card-section>
          <!-- 文字 -->
          <q-card-section class="right q-my-sm q-px-lg">
            <q-chip clickable @click="onClick" color="primary" text-color="white" icon="mdi-tag">{{product.category}}</q-chip>            <!-- 商品名稱 -->
            <div class="name text-weight-bold q-mb-md">{{ product.name }}</div>
            <!-- 賣家 -->
            <div class="q-mb-sm">賣家:&nbsp;{{ product.sellername }}（{{ product.seller }}）</div>
            <!-- 剩餘數量 -->
            <div>剩餘數量： {{ product.MaxNumber }}</div>
            <!-- 商品價格 -->
            <div class="price text-weight-bold text-red-14">NT.&nbsp;{{ product.price }}&nbsp;</div>
            <!-- 商品說明 -->
            <q-scroll-area class="scroll">
              <div v-html="product.description" class="q-mt-md description" style="font-size: 1.6rem;"></div>
            </q-scroll-area>
            <q-form @submit.prevent="addCart">
              <div>
                購買數量：
                <q-input
                :rules="[rules.required,rules.numberRequired,rules,rules.limited]"
                v-model.number="quantity"
                type="number"
                style="max-width: 200px"
              />
              </div>
              <q-card-section>
                <div class="flex justify-center items-center">
                  <q-btn type="submit" class="buy" outline rounded label="Add To Cart" color="accent" :loading="loading"/>
                  <q-btn class="buy" rounded label="Buy now" color="accent"/>
                </div>
              </q-card-section>
            </q-form>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>

</template>
<style scoped>
:deep(.left){
  width: 100%;
  height: 50%;
  padding: 0;
}
:deep(.right){
  width: 100%;
  height: 50%;
}
:deep(.all){
  height: 100%;
  flex-direction: column;
  .swiper{
    height: 100%;
    .q-img{
      height: 100%;
    }
  }
  .q-img{
    height: 100%;
  }
}

#container{
  #title{
    border-left: .8rem solid #B0A9EC;
    font-size: 2rem;
  }
  #section{
    margin: 2rem 2rem 8rem 2rem;
  }
  .q-card{
      width:22rem;
      height: 68rem;
      .scroll{
        height: 8rem;
        max-width: 20rem;
      }
      .name{
        font-size: 1.8rem;
      }
      .price{
        font-size: 1.5rem;
      }
      .description{
        font-size: 1rem !important;
      }
      :deep(.q-field){
        width:150px;
      }
        .buy{
          font-size: 15px;
          &:nth-child(2){
            padding: 0 1.7rem;
            margin-left: 0.4rem;
          }
      }
  }
}
@media(min-width:768px){
  #container{
    #section{
      margin: 4rem 0 8rem 0;
    }
    .q-card{
      width: 40rem;
      height: 70rem;
      .scroll{
        height: 10rem;
        max-width: 40rem;
      }
      .name{
        font-size: 2rem;
      }
      .price{
        font-size: 1.8rem;
      }
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
    .q-card{
      width: 50rem;
      height: 36rem;
      .scroll{
        height: 8rem;
        max-width: 25rem;
      }
    }
  }
  :deep(.all){
    flex-direction: row;
  }
  :deep(.left){
    width: 50%;
    height: 100%;
    padding: 0;
  }
  :deep(.right){
    width: 50%;
    height: 100%;
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
      margin: 3rem 3rem 7rem 3rem;
    }
    .q-card{
      width: 60rem;
      height: 44rem;
      .scroll{
        height: 14rem;
        max-width: 28rem;
      }
      .name{
        font-size:2.4rem;
      }
      .price{
        font-size: 2rem;
      }
      .description{
        font-size: 1.3rem !important;
      }
    }
  }

}
@media(min-width:1570px){
  #container{
    #section{
      margin: 4rem 14.5rem;
    }
    .q-card{
      width: 80rem;
      height: 45rem;
      .scroll{
        height: 18rem;
        max-width: 40rem;
      }
      .buy{
        font-size: 20px;
        &:nth-child(2){
            padding: 0 2rem;
            margin-left: 0.8rem;
          }
      }
    }
  }

}
</style>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useQuasar } from 'quasar'
import sweetalert from 'sweetalert2'
import 'animate.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'
import { api, apiAuth } from 'src/boot/axios'
const $q = useQuasar()
const route = useRoute()

const modules = [Autoplay, Pagination]
const dialog = ref(false)
const loading = ref(false)
const quantity = ref(1)
const rules = {
  required: (value) => !!value || '欄位必填，且不得為 0',
  numberRequired: (value) => (!isNaN(value) && value > 0) || '不得小於 0',
  limited: (value) => (value <= product.value.MaxNumber) || '超過商品剩餘數量'
}
const product = ref({
  _id: '',
  seller: '',
  sellername: '',
  name: '',
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
    product.value.seller = data.result.user._id
    product.value.sellername = data.result.user.nickname
    product.value.name = data.result.name
    product.value.price = data.result.price
    product.value.currency = data.result.currency
    product.value.MaxNumber = data.result.MaxNumber
    product.value.image = data.result.image
    product.value.images = [...data.result.images]
    product.value.description = data.result.description
    product.value.category = data.result.category
    product.value.sell = data.result.sell
    if (product.value.sell === false) {
      dialog.value = true
    }
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: '發生錯誤'
    })
  }
})()

const addCart = async () => {
  try {
    loading.value = true
    await apiAuth.post('/users/cart', {
      product: product.value._id,
      seller: product.value.seller,
      quantity: quantity.value
    })
    loading.value = false
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
    loading.value = false
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}
</script>
