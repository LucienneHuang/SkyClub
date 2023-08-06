<template>
  <div id="title" class="q-ml-xl q-my-lg q-pl-lg q-py-sm text-h4 text-weight-bold non-selectable">個人商品管理
    <q-btn class="q-mb-sm" round color="secondary" icon="mdi-plus-thick" to="/member/addproduct" />
  </div>
  <div id="container" class="flex justify-center q-px-xl q-pb-xl">
    <q-responsive id="wh" :ratio="4/3">
      <q-table :columns="columns" row-key="name" :rows="rows" :filter="filter">
        <!-- 搜尋欄位 -->
        <template v-slot:top-right>
          <q-input color="white" filled clearable borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <!-- 商品圖片 -->
        <template #body-cell-image="props">
          <q-td :props="props">
            <q-img :src="props.value" spinner-color="white" style="height: 140px; width: 180px" />
          </q-td>
        </template>
        <!-- 商品是否上架 -->
        <template #body-cell-sell="props">
          <q-td :props="props">
            <q-icon name="mdi-check" v-if="props.value" />
          </q-td>
        </template>
        <!-- 編輯按鈕 -->
        <template #body-cell-edit="props">
          <q-td :props="props">
            <q-btn round color="secondary" @click="tableEditItem(props.row)" icon="mdi-file-document-edit" />
          </q-td>
        </template>
      </q-table>
    </q-responsive>
  </div>
</template>
<style lang="scss" scoped>
#title{
  border-left: .8rem solid $secondary;
  }
#container{
  width: 100%;
  // height: calc(100vh - 164px);
  :deep(.q-table thead th,.q-table__top){
    background: $secondary;
  }
  :deep(.q-table__top){
    background: $secondary;
  }
  #wh{
    width: 100%;
    height: 100%;
  }
}

@media(min-width:992px){
  #title{
  font-size: 3rem;
  }
}
</style>
<script setup>
import { ref, reactive } from 'vue'
import { apiAuth } from '../../boot/axios.js'
import { useQuasar } from 'quasar'
const $q = useQuasar()

const filter = ref('')

const columns = [
  {
    name: 'image',
    required: true,
    label: '圖片',
    align: 'center',
    field: 'image',
    sortable: false
  },
  {
    name: 'name',
    required: true,
    label: '名稱',
    align: 'center',
    field: 'name',
    sortable: true
  },
  {
    name: 'price',
    required: true,
    label: '價格',
    align: 'center',
    field: 'price',
    sortable: true
  },
  {
    name: 'currency',
    required: true,
    label: '幣值',
    align: 'center',
    field: 'currency',
    sortable: false
  },
  {
    name: 'MaxNumber',
    required: true,
    label: '數量',
    align: 'center',
    field: 'MaxNumber',
    sortable: true
  },
  {
    name: 'category',
    required: true,
    label: '分類',
    align: 'center',
    field: 'category',
    sortable: true
  },
  {
    name: 'sell',
    required: true,
    label: '上架',
    align: 'center',
    field: 'sell',
    sortable: true
  },
  {
    name: 'edit',
    required: true,
    label: '編輯',
    align: 'center',
    field: 'edit',
    sortable: false
  }
]
const rows = reactive([])
// 取得自己的商品資訊
const tableLoadItems = async () => {
  try {
    const { data } = await apiAuth.get('/products/own')
    rows.splice(0, rows.length, ...data.result)
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}
// 執行他
tableLoadItems()
const tableEditItem = (item) => {

}
</script>
