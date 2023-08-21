<template>
<q-dialog v-model="dialog">
  <q-card>
    <q-card-section>
      <q-card-section horizontal>
        <div class="text-h7 q-mt-md q-mr-lg">訂單編號</div>
        <q-input type="text" readonly v-model="order._id" color="secondary"/>
      </q-card-section>
      <q-card-section horizontal>
        <div class="text-h7 q-mt-md q-mr-lg">賣家ＩＤ
        </div>
        <q-input type="text" readonly v-model="order.seller" color="secondary"/>
      </q-card-section>
      <q-card-section horizontal class="two">
        <div class="text-h7 q-mt-md q-mr-lg">買家姓名</div>
        <q-input type="text" readonly v-model="order.realName" color="secondary"/>
        <div class="text-h7 q-mt-md q-mr-lg">買家電話</div>
        <q-input type="text" readonly v-model="order.phoneNumber" color="secondary"/>
      </q-card-section>
      <q-card-section horizontal>
        <div class="text-h7 q-mt-md q-mr-lg">聯絡方式</div>
        <q-input type="text" readonly v-model="order.address" color="secondary"/>
      </q-card-section>
      <q-card-section horizontal class="two">
        <div class="text-h7 q-mt-md q-mr-lg">商品總額</div>
        <q-input type="text" readonly v-model="order.total" color="secondary"/>
        <div class="text-h7 q-mt-md q-mr-lg">訂單日期</div>
        <q-input type="text" readonly v-model="order.date" color="secondary"/>
      </q-card-section>
      <q-card-section horizontal class="q-mb-sm">
        <div class="text-h7 q-mt-md q-mr-lg">付款方式</div>
        <q-input type="text" readonly v-model="order.payment" color="secondary"/>
      </q-card-section>
      <q-card-section v-for="(product,i) in order.cart" :key="i" style="background: rgb(228, 228, 228);" class="q-mb-md">
        <div class="text-center">
          <router-link :to="'/trade/'+product.product._id">
            <q-img :src="product.product.image" style="width: 150px;height: 120px;"/>
          </router-link>
        </div>
        <q-card-section horizontal>
          <div class="text-h7 q-mt-md q-mr-lg">商品名稱</div>
            <q-input type="text" readonly v-model="product.product.name" color="secondary"/>
        </q-card-section>
        <q-card-section horizontal class="two">
          <div class="text-h7 q-mt-md q-mr-lg">數量</div>
        <q-input type="text" readonly v-model="product.quantity" color="secondary"/>
        <div class="text-h7 q-mt-md q-mr-lg">單價</div>
        <q-input type="text" readonly v-model="product.product.price" color="secondary"/>
        </q-card-section>
      </q-card-section>
    </q-card-section>
    <q-card-actions class="flex justify-center">
      <q-btn unelevated rounded style="width: 6rem;" size="1rem" color="secondary" label="OK" class="q-mb-md" v-close-popup/>
    </q-card-actions>
  </q-card>
</q-dialog>
<div id="title" class="q-ml-xl q-my-lg q-pl-lg q-py-sm text-h4 text-weight-bold non-selectable">購買訂單查詢</div>
<div id="container" class="flex justify-center q-px-xl q-pb-xl">
    <q-responsive id="wh" :ratio="ratioTop/ratioBottom">
      <q-table :columns="columns" row-key="name" :rows="rows" :filter="filter" :rows-per-page-options="[10,0]">
        <!-- 搜尋欄位 -->
        <template v-slot:top-right>
          <q-input color="white" filled clearable borderless dense debounce="300" v-model="filter" placeholder="請輸入訂單編號">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <!-- 賣家 -->
        <template #body-cell-sell="props">
          <q-td :props="props">
            {{ props.row.seller.nickname}}
            （{{ props.row.seller._id}}）
          </q-td>
        </template>
        <!-- 日期 -->
        <template #body-cell-datedetail="props">
          <q-td :props="props">
            {{new Date(props.row.date).toLocaleString()}}
          </q-td>
        </template>
        <!-- 出貨狀態 -->
        <template #body-cell-check="props">
            <q-td :props="props">
              <div v-if="props.value">已出貨</div>
              <div v-else>準備中</div>
            </q-td>
          </template>
        <!-- 詳細按鈕 -->
        <template #body-cell-detail="props">
          <q-td :props="props">
            <q-btn round color="secondary" @click="orderDetail(props.row)" icon="mdi-file-document-edit" />
          </q-td>
        </template>
      </q-table>
    </q-responsive>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import 'animate.css'
import { apiAuth } from '../../boot/axios.js'

const $q = useQuasar()
const filter = ref('')
const dialog = ref(false)
const columns = [
  {
    name: 'datedetail',
    required: true,
    label: '交易日期',
    align: 'center',
    field: 'datedetail',
    sortable: true
  },
  {
    name: '_id',
    required: true,
    label: '訂單編號',
    align: 'center',
    field: '_id',
    sortable: false
  },
  {
    name: 'sell',
    required: true,
    label: '賣家',
    align: 'center',
    field: 'sell',
    sortable: false
  },
  {
    name: 'total',
    required: true,
    label: '總金額',
    align: 'center',
    field: 'total',
    sortable: false
  },
  {
    name: 'check',
    required: true,
    label: '出貨狀態',
    align: 'center',
    field: 'check',
    sortable: true
  },
  {
    name: 'detail',
    required: true,
    label: '詳細資訊',
    align: 'center',
    field: 'detail',
    sortable: false
  }
]
const rows = reactive([])
// 取得自己的商品資訊
const tableLoadItems = async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    rows.splice(0, rows.length, ...data.result)
  } catch (error) {
    console.log(error)
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}
// 執行他
tableLoadItems()
const order = reactive({
  _id: '',
  seller: '',
  realName: '',
  phoneNumber: '',
  address: '',
  payment: '',
  total: '',
  date: '',
  cart: []
})
// 詳細訂單
const orderDetail = (detail) => {
  dialog.value = true
  order._id = detail._id
  order.seller = detail.seller.nickname + '（' + `${detail.seller._id}` + '）'
  order.realName = detail.realName
  order.phoneNumber = detail.phoneNumber
  order.address = detail.address
  order.payment = detail.payment
  order.total = detail.total
  order.date = new Date(detail.date).toLocaleString()
  order.cart = [...detail.cart]
}

const ratioTop = ref('')
const ratioBottom = ref('')
const rwd = () => {
  if (window.innerWidth > 975) {
    ratioTop.value = 12
    ratioBottom.value = 5
  } else if (window.innerWidth > 1200) {
    ratioTop.value = 5
    ratioBottom.value = 5
  } else {
    ratioTop.value = 2
    ratioBottom.value = 2
  }
}
rwd()
window.addEventListener('resize', () => {
  rwd()
})
</script>

<style lang="scss" scoped>
#title{
  border-left: .8rem solid $secondary;
  }
#container{
  width: 100%;
  :deep(.q-table thead th){
    background: $secondary;
    font-size: 1rem;
  }
  :deep(.q-table__top){
    background: $secondary;
  }
  :deep(td){
    font-size: 1rem;
  }
  #wh{
    width: 100%;
    height: 100%;
  }
}
.q-card{
  width: 35rem;
  max-width: 100vw;
  border: 4px solid $secondary;
  border-radius: 2rem;
  :deep(.q-field__control){
        width: 15rem;
    }
  .two{
    :deep(.q-field__control){
        width: 5rem;
    }
  }
}

@media(min-width:992px){
  #title{
  font-size: 3rem;
  }
  .q-card{
    width: 40rem;
    :deep(.q-field__control){
        width: 30rem;
    }
    .two{
      :deep(.q-field__control){
        width: 12.5rem;
    }
    }
  }
}
@media(min-width:1200px){

}

</style>
