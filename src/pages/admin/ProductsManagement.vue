<template>
  <!-- 還沒搞完 -->
  <q-dialog v-model="dialog" persistent>
    <div id="form">
      <q-form @submit.prevent="editProduct">
        <q-card class="flex column justify-center items-center q-pa-lg q-ma-xl">
            <!-- 商品標題 -->
            <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">標題</div>
            <q-input color="primary" type="text" v-model="editProductForm.name" :rules="[rules.required]"/>
          </q-card-section>
            <!-- 金額與數量 -->
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">金額</div>
            <!-- 輸入金額 -->
            <q-input color="primary" type="number" v-model.number="editProductForm.price" :rules="[rules.required,rules.numberRequired]"/>
          </q-card-section >
          <q-card-section horizontal>
            <!-- 選擇單位 -->
            <div class="text-h7 q-mt-md q-mr-lg">幣值</div>
            <q-select color="primary" v-model="editProductForm.currency" :options="currencyOptions" label="幣值" :rules="[rules.required,rules.currencyRequired]"/>
          </q-card-section>
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">數量</div>
            <q-input color="primary" type="number" v-model.number="editProductForm.MaxNumber" :rules="[rules.required,rules.numberRequired]"/>
          </q-card-section>
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">內文</div>
            <q-editor :rules="[rules.required]" v-model="editProductForm.description"  class="q-my-md"
      :dense="$q.screen.lt.md"
      :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"/>
          </q-card-section>
          <q-card-section horizontal>
            <!-- 選擇單位 -->
            <div class="text-h7 q-mt-md q-mr-lg">分類</div>
            <q-select color="primary" v-model="editProductForm.category" :options="categoryOptions" label="分類" :rules="[rules.required,rules.categoryRequired]"/>
          </q-card-section>
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">上架</div>
            <q-checkbox class="q-mt-sm" color="primary" v-model="editProductForm.sell"/>
          </q-card-section>
          <q-card-actions class="q-mt-sm">
            <q-btn type="submit" unelevated rounded style="width: 6rem;" size="1rem" color="primary" label="送出"  v-close-popup />
            <q-btn unelevated rounded style="width: 6rem;" size="1rem" outline color="primary" label="取消" @click="dialog=false" />
          </q-card-actions>
        </q-card>
      </q-form>
    </div>
  </q-dialog>
  <div id="title" class="q-ml-xl q-my-lg q-pl-lg q-py-sm text-h4 text-weight-bold non-selectable">全部商品管理</div>
  <div id="container" class="flex justify-center q-px-xl q-pb-xl">
    <q-responsive id="wh" :ratio="ratioTop/ratioBottom">
      <q-table :rows-per-page-options="[10,0]" :columns="columns" row-key="name" :rows="rows" :filter="filter">
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
            <q-btn round color="primary" @click="tableEditItem(props.row)" icon="mdi-file-document-edit" />
          </q-td>
        </template>
      </q-table>
    </q-responsive>
  </div>

</template>
<style lang="scss" scoped>
#title{
  border-left: .8rem solid $primary;
  }
#container{
  width: 100%;
  // height: calc(100vh - 164px);
  :deep(.q-table thead th){
    background: $primary;
    font-size: 1rem;
  }
  :deep(.q-table__top){
    background: $primary;
  }
  :deep(td){
    font-size: 1rem;
  }
  #wh{
    width: 100%;
    height: 100%;
  }
}

#form{
    width: 35rem;
    max-width: 100vw;
    .q-card{
    border: 4px solid $primary;
    width: 25rem;
    border-radius: 2rem;
    :deep(.q-field__control){
      width: 12rem;
    }
    .q-editor{
      border: 1px solid $primary;
      width: 12rem;
    }
  }
}

@media(min-width:975px){
  #title{
  font-size: 3rem;
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
      .q-editor{
        width: 30rem;
      }
    }
  }
}
@media(min-width:1200px){
  #title{
    font-size: 3rem;
  }

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
<script setup>
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import sweetalert from 'sweetalert2'
import 'animate.css'
import { useUserStore } from 'src/stores/user.js'
import { apiAuth } from '../../boot/axios.js'
const user = useUserStore()
const $q = useQuasar()
const filter = ref('')

const columns = [
  {
    name: 'user',
    required: true,
    label: '賣家 id',
    align: 'center',
    field: 'user',
    sortable: true
  },
  {
    name: 'image',
    required: true,
    label: '首圖',
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
    const { data } = await apiAuth.get('/products/all')
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

const rules = {
  required: (value) => !!value || '欄位必填',
  numberRequired: (value) => (!isNaN(value) && value > 0) || '不得小於 0',
  currencyRequired: (value) => ['台幣'].includes(value) || '沒有該幣值',
  categoryRequired: (value) => ['季票', '禮包', '周邊', '其他'].includes(value) || '沒有該分類'
}
const editProductForm = reactive({
  user: user.user,
  name: '',
  price: 0,
  currency: '',
  MaxNumber: 0,
  image: [],
  images: [],
  description: '',
  category: '',
  sell: false
})
const currencyOptions = ['台幣']
const categoryOptions = ['季票', '禮包', '周邊', '其他']

const dialog = ref(false)
const productId = ref('')
const tableEditItem = (item) => {
  dialog.value = true
  editProductForm.name = item.name
  editProductForm.price = item.price
  editProductForm.currency = item.currency
  editProductForm.MaxNumber = item.MaxNumber
  editProductForm.description = item.description
  editProductForm.category = item.category
  editProductForm.sell = item.sell
  productId.value = item._id
}

const editProduct = async () => {
  try {
    const fd = new FormData()
    fd.append('name', editProductForm.name)
    fd.append('price', editProductForm.price)
    fd.append('currency', editProductForm.currency)
    fd.append('MaxNumber', editProductForm.MaxNumber)
    fd.append('description', editProductForm.description)
    fd.append('category', editProductForm.category)
    fd.append('sell', editProductForm.sell)
    await apiAuth.patch('/products/' + productId.value, fd)
    await sweetalert.fire({
      icon: 'success',
      title: '更新成功',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      iconColor: '#F198AF',
      confirmButtonColor: '#F198AF',
      width: '20rem'
    })
    tableLoadItems()
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
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
