<template>
  <q-dialog v-model="dialog">
    <div id="form">
      <q-form @submit.prevent="submit">
        <q-card class="flex column justify-center items-center q-pa-lg q-ma-xl">
            <!-- 姓名 -->
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">聯絡姓名</div>
            <q-input color="accent" type="text" label="若為交易實體商品(周邊)，請輸入真實姓名方便寄件。" v-model="submitForm.realName" :rules="[rules.required]" hide-hint/>
          </q-card-section>
            <!-- 電話 -->
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">聯絡電話</div>
            <q-input color="accent" type="text" label="請輸入連絡電話。" hide-hint v-model="submitForm.phoneNumber" :rules="[rules.required,rules.phone]"/>
          </q-card-section >
          <q-card-section horizontal>
            <!-- 送貨地址 -->
            <div class="text-h7 q-mt-md q-mr-lg">聯絡地址</div>
            <q-input color="accent" type="text" label="請輸入送貨地址/好友連結。" hide-hint v-model="submitForm.address"/>
          </q-card-section>
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">付款方式</div>
            <q-select :options="paymentOptions" color="accent" label="分類" v-model="submitForm.payment" :rules="[rules.required]"/>
          </q-card-section>
          <q-card-actions class="q-mt-sm">
            <q-btn type="submit" unelevated rounded style="width: 6rem;" size="1rem" color="accent" label="送出"  v-close-popup />
            <q-btn unelevated rounded style="width: 6rem;" size="1rem" outline color="accent" label="取消" @click="dialog=false" />
          </q-card-actions>
        </q-card>
      </q-form>
    </div>
  </q-dialog>
  <div id="container" class="q-ma-md">
    <div id="head" class="q-my-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="購物車" />
      </q-breadcrumbs>
      <div id="title" class="text-weight-bold non-selectable q-mt-md q-pl-md">購物車</div>
    </div>
    <div id="section" class="q-ma-xl">
        <q-markup-table v-if="carts.length===0">
                <thead>
                  <tr>
                    <td colspan="7">沒有商品</td>
                  </tr>
                </thead>
          </q-markup-table>
        <q-markup-table  v-for="(cart,i) in carts" :key="i" class="q-mb-xl">
          <thead>
            <tr>
              <th colspan="7"><span class="text-h6">賣家：{{ cart.seller.nickname }}（{{ cart.seller._id }}）</span></th>
            </tr>
            <tr>
              <th></th>
              <th><span>圖片</span></th>
              <th class="name"><span>名稱</span></th>
              <th><span>單價</span></th>
              <th><span>數量</span></th>
              <th><span>小計</span></th>
              <th><span>操作</span></th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="(item,index) in cart.productCart" :key="index" class="text-center">
                <td>
                  <div v-if="!item.product.sell || (item.product.MaxNumber<item.quantity)"><q-icon  name="mdi-alert" color="red" size="25px"/></div>
                  <div v-if="!item.product.sell">已下架</div>
                  <div v-if="(item.product.MaxNumber<item.quantity)">數量不足<br>請修改數量</div>
                </td>
                <td class="image">
                    <q-img
                    :src="item.product.image"
                    style="height: 140px;width: 150px"
                  />
                </td>
                <td class="name"><router-link :to="'/trade/'+item.product._id">{{ item.product.name }}</router-link></td>
                <td>
                    {{ item.product.price }}
                  </td>
                <td>
                  <q-btn round color="accent" icon="mdi-minus" flat @click="updateCart(cart.seller._id,item.product._id,-1)"/>
                  {{ item.quantity }}
                  <q-btn round color="accent" icon="mdi-plus" flat @click="updateCart(cart.seller._id,item.product._id,1)"/>
                </td>
                <td>{{ item.quantity * item.product.price }}</td>
                <td>
                    <q-btn round color="accent" icon="mdi-delete"  @click="updateCart(cart.seller._id,item.product._id,item.quantity * -1)"/>
                </td>
              </tr>
          </tbody>
        </q-markup-table>
        <div class="price">
          <hr>
          <div class="text-h4 text-weight-bold q-pt-sm non-selectable">商品總金額：<span class="text-red-10">{{ total }}</span></div>
          <q-btn color="accent" size="18px" label="前往結帳" @click="checkOut" :disable="!canCheckout" />
        </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, reactive } from 'vue'
import { useQuasar, QSpinnerHearts } from 'quasar'
import { useRouter } from 'vue-router'
import validator from 'validator'
import sweetalert from 'sweetalert2'
import 'animate.css'
import { apiAuth } from 'src/boot/axios'
const router = useRouter()
const $q = useQuasar()
const carts = ref([])
const dialog = ref(false)
// 付款方式
const paymentOptions = ['轉帳', 'linepay', '貨到付款']
// 規範
const rules = {
  required: (value) => !!value || '欄位必填',
  phone: (value) => validator.isMobilePhone(value, 'zh-TW') || '手機格式錯誤',
  paymentRequired: (value) => paymentOptions.includes(value) || '沒有該分類'
}

const submitForm = reactive({
  realName: '',
  phoneNumber: '',
  address: '',
  payment: ''
})
// 更新購物車
const updateCart = async (seller, product, quantity) => {
  try {
    await apiAuth.post('/users/cart', {
      seller,
      product,
      quantity
    })
    const idxSeller = carts.value.findIndex(cart => cart.seller._id === seller)
    const idxProduct = carts.value[idxSeller].productCart.findIndex(item => item.product._id === product)
    carts.value[idxSeller].productCart[idxProduct].quantity += quantity
    if (carts.value[idxSeller].productCart[idxProduct].quantity <= 0) {
      carts.value[idxSeller].productCart.splice(idxProduct, 1)
    }
    if (carts.value[idxSeller].productCart.length <= 0) {
      carts.value.splice(idxSeller, 1)
    }
    $q.notify({
      type: 'positive',
      message: '更新成功'
    })
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}
// 實時更新商品總金額
const total = computed(() => {
  return carts.value.reduce((total, cart) => {
    const sellerPrice = cart.productCart.reduce((ownSum, item) => {
      return ownSum + (item.quantity * item.product.price)
    }, 0)
    return total + sellerPrice
  }, 0)
})
// 實時確認商品是否可以結帳
const canCheckout = computed(() => {
  // 每個賣家的購物車去檢查
  // 如果最終回傳結果是 false (商品都有上架)，則 !後變成 true，反之則 false
  return carts.value.length > 0 && !carts.value.some(cart => {
    // 檢查每個賣家的購物車內的商品
    // 如果商品有一個沒有上架，回傳 true
    // 如果商品都有上架，回傳 false
    return cart.productCart.some(product => !product.product.sell)
  })
})
const submit = async (req, res) => {
  try {
    await apiAuth.post('/orders', submitForm)
    await sweetalert.fire({
      icon: 'success',
      title: '訂單建立成功',
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
    router.push('/member/orders')
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}
const checkOut = () => {
  dialog.value = true
};
// 取得購物車資訊
(async () => {
  try {
    $q.loading.show({
      spinner: QSpinnerHearts,
      spinnerSize: 140,
      message: '<h6>資料載入中，請耐心等候...</h6>',
      html: true
    })
    const { data } = await apiAuth.get('/users/cart')
    carts.value.push(...data.result)
    $q.loading.hide()
  } catch (error) {
    $q.loading.hide()
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
})()
</script>

<style lang="scss" scoped>
.price{
  text-align: center;
  line-height: 70px;
  width: 100%;

}
#container{
  #title{
    border-left: .8rem solid $accent;
    font-size: 2rem;
  }
  thead tr:nth-child(2) span{
    font-size: 1rem;
  }
}
#form{
    width: 35rem;
    max-width: 100vw;
    .q-card{
    border: 4px solid $accent;
    width: 25rem;
    border-radius: 2rem;
    :deep(.q-field__control){
      width: 12rem;
    }
  }
}
tbody{
  tr {
    & > :nth-child(1){
      width: 84px;
    }
    & > :nth-child(2){
      width: 150px;
    }
    & > :nth-child(3){
      width: 230px;
    }

  }
}
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
    #section{
      margin: 5rem 6rem 5rem;
    }
  }
  #form{
    width: 50rem;
    max-width: 100vw;
    .q-card{
      font-size: 1rem;
      width: 40rem;
      :deep(.q-field__control){
        width: 30rem;
      }
    }
  }
}

@media(min-width:1200px){
  #form{
    width: 60rem;
    max-width: 100vw;
    .q-card{
      font-size: 1rem;
      width: 50rem;
      :deep(.q-field__control){
        width: 40rem;
      }
      .q-editor{
        width: 40rem;
      }
    }
  }
}
</style>
