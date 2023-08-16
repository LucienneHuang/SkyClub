<template>
  <div id="container" class="q-ma-md">
    <div id="head" class="q-my-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="購物車" />
      </q-breadcrumbs>
      <div id="title" class="text-weight-bold non-selectable q-mt-md q-pl-md">購物車</div>
    </div>
    <div>{{ total }}</div>
    <div id="section" class="q-ma-xl">
        <div class="row q-mx-lg">
          <div class="col-12 col-md-9">
            <q-markup-table v-if="carts.length===0">
                <thead>
                  <tr>
                    <td colspan="6">沒有商品</td>
                  </tr>
                </thead>
              </q-markup-table>
            <q-markup-table  v-for="(cart,i) in carts" :key="i" class="q-mb-xl">
              <thead>
                <tr>
                  <th colspan="6"><span class="text-h6">賣家：{{ cart.seller.nickname }}（{{ cart.seller._id }}）</span></th>
                </tr>
                <tr>
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
                    <q-img
                    :src="item.product.image"
                    style="height: 140px;width: 150px"
                  />
                  </td>
                  <td class="name">{{ item.product.name }}</td>
                  <td>
                    {{ item.product.price }}
                  </td>
                  <td>
                    <q-btn round color="accent" icon="mdi-plus" flat @click="updateCart(cart.seller._id,item.product._id,1)"/>
                    {{ item.quantity }}
                    <q-btn round color="accent" icon="mdi-minus" flat @click="updateCart(cart.seller._id,item.product._id,-1)"/>
                  </td>
                  <td>{{ item.quantity * item.product.price }}</td>
                  <td>
                    <q-btn round color="accent" icon="mdi-delete"  @click="updateCart(cart.seller._id,item.product._id,item.quantity * -1)"/>
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </div>
          <div class=" col-12 col-md-3 flex justify-center">
            <div class="price">
              <!-- test -->
              <q-btn color="primary" label="Primary" @click="test" :disable="!canCheckout" />
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.price{
  width: 90%;
  height: 400px;
  background-color: red;
  max-width: 320px;
}
.name{
  width: 200px;
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
    #background{
      width: 48rem;
      height: 33rem;
    }
    #section{
      margin: 6rem 6rem 12rem;
    }
  }
}

@media(min-width:1200px){
  #title{
    font-size: 3rem;
  }
  .q-breadcrumbs{
    font-size: 1.3rem;
  }
}
</style>
<script setup>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import sweetalert from 'sweetalert2'
import 'animate.css'
import { apiAuth } from 'src/boot/axios'
const $q = useQuasar()
const carts = ref([])

const updateCart = async (seller, product, quantity) => {
  console.log(seller, product, quantity)
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
    await sweetalert.fire({
      icon: 'success',
      title: '更新購物車成功',
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
const total = computed(() => {
  return carts.value.reduce((total, cart) => {
    const sellerPrice = cart.productCart.reduce((ownSum, item) => {
      return ownSum + (item.quantity * item.product.price)
    }, 0)
    return total + sellerPrice
  }, 0)
})
const canCheckout = computed(() => {
  // 每個賣家的購物車去檢查
  // 如果最終回傳結果是 false (商品都有上架)，則 !後變成 true，反之則 false
  return carts.value.length > 0 && !carts.value.some(cart => {
    // 檢查每個賣家的購物車內的商品
    // 如果商品有一個沒有上架，回傳 true
    // 如果商品都有上架，回傳 false
    return cart.productCart.some(product => !product.product.sell)
  })
});
(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    carts.value.push(...data.result)
  } catch (error) {

  }
})()
const test = () => {
  console.log('可以結帳')
}
</script>
