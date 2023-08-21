<template>
  <!-- 還沒搞完 -->
  <q-dialog v-model="dialog" persistent>
    <div id="form">
      <q-form @submit.prevent="editProduct">
        <q-card class="flex column justify-center items-center q-pa-lg q-ma-xl">
            <!-- 首圖 -->
            <q-card-section horizontal>
                <VueFileAgent v-if="updateImage" :maxSize="'1MB'" :deletable="true" :accept="'image/jpg,image/jpeg,image/png'" :helpText="'只接受 jpg, jpeg 或 png 檔'" v-model="editProductForm.image" v-model:rawModelValue="rawFile" :errorText="{type: '檔案類型不合法。只接受 jpg, jpeg 或 png 檔。',size: '檔案大小不得大於1MB',}" ></VueFileAgent>
                <q-btn v-else @click="updateImageBtn">
                  <q-img :src="editProductForm.oldImg" style="width: 160px; height: 160px; border-radius: 0;"/>
                </q-btn>
            </q-card-section>
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
            <q-editor :rules="[rules.required]" max-height="20rem" v-model="editProductForm.description"  class="q-my-md"
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
          <!-- 更多圖片按鈕 -->
          <q-card-actions class="q-mt-sm">
            <q-btn unelevated rounded style="width: 6rem;" size="1rem" outline color="primary" label="更多圖片" @click="moreImageBtn" />
          </q-card-actions>
          <!-- 顯示已上傳圖片 -->
          <q-card-section v-if="editProductForm.oldImgs.length>=1" class="flex justify-center">
            <q-btn v-for="(img,i) in editProductForm.oldImgs" :key="i" @click="deleteImg(img)">
              <q-img :src="img" style="width: 160px; height: 160px; border-radius: 0;"/>
            </q-btn>
          </q-card-section>
          <!-- 加更多圖片 -->
          <q-card-section v-if="addMoreImages" horizontal>
            <VueFileAgent v-if="maxImgs>0" :multiple="true" :maxFiles="maxImgs" :maxSize="'1MB'" :deletable="true" :accept="'image/jpg,image/jpeg,image/png'" :helpText="'只接受 jpg, jpeg 或 png 檔，加上已上傳，最多六張。'" v-model="editProductForm.images" :errorText="{type: '檔案類型不合法。只接受 jpg, jpeg 或 png 檔。',size: '檔案大小不得大於1MB',}" v-model:rawModelValue="rawFiles" ></VueFileAgent>
            <div v-else>圖片最多六張，請刪除圖片再新增。</div>
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
      <q-table :rows-per-page-options="[10,0]" :columns="columns" row-key="name" :rows="rows">
        <!-- 搜尋欄位 -->
        <template v-slot:top-right>
          <q-input color="white" filled clearable borderless dense debounce="300" v-model="filter" placeholder="請輸入商品關鍵字">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <!-- 賣家 -->
        <template #body-cell-user="props">
          <q-td :props="props">
            {{ props.row.user.nickname}}
            （{{ props.row.user._id}}）
          </q-td>
        </template>
        <!-- 商品圖片 -->
        <template #body-cell-image="props">
          <q-td :props="props">
            <q-img :src="props.value" spinner-color="white" style="height: 140px; width: 180px" />
          </q-td>
        </template>
        <!-- 名稱 -->
        <template #body-cell-name="props">
          <q-td :props="props">
            <router-link :to="'/trade/'+props.row._id">{{ props.row.name }}</router-link>
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
<script setup>
import { ref, reactive, watch } from 'vue'
import { useQuasar } from 'quasar'
import sweetalert from 'sweetalert2'
import 'animate.css'
import { useUserStore } from 'src/stores/user.js'
import { apiAuth } from '../../boot/axios.js'
const user = useUserStore()
const $q = useQuasar()
const filter = ref('')
const maxImgs = ref(6)
const addMoreImages = ref(false)
const moreImageBtn = () => {
  addMoreImages.value = !addMoreImages.value
  if (addMoreImages.value === true) {
    $q.notify({
      type: 'positive',
      message: '加上已上傳，最多六張。'
    })
  } else {
    $q.notify({
      type: 'negative',
      message: '取消'
    })
  }
}
const columns = [
  {
    name: 'user',
    required: true,
    label: '賣家',
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
    const { data } = await apiAuth.get('/products/all', {
      params: {
        search: filter.value
      }
    })
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
  currencyRequired: (value) => currencyOptions.includes(value) || '沒有該幣值',
  categoryRequired: (value) => categoryOptions.includes(value) || '沒有該分類'
}
// 設定 updateImage 的值
const updateImage = ref(false)
const updateImageBtn = () => {
  updateImage.value = !updateImage.value
}
const rawFile = ref([])
const rawFiles = ref([])
const editProductForm = reactive({
  user: user.user,
  name: '',
  price: 0,
  currency: '',
  MaxNumber: 0,
  oldImg: '',
  oldImgs: [],
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
  updateImage.value = false
  addMoreImages.value = false
  dialog.value = true
  editProductForm.image = item.image
  editProductForm.images = []
  rawFiles.value = []
  editProductForm.oldImg = item.image
  editProductForm.oldImgs = [...item.images]
  editProductForm.name = item.name
  editProductForm.price = item.price
  editProductForm.currency = item.currency
  editProductForm.MaxNumber = item.MaxNumber
  editProductForm.description = item.description
  editProductForm.category = item.category
  editProductForm.sell = item.sell
  productId.value = item._id
  maxImgs.value = 6 - item.images.length
}
// 刪除圖片
const deleteImg = (img) => {
  const idx = editProductForm.oldImgs.findIndex(element => element === img)
  editProductForm.oldImgs.splice(idx, 1)
  maxImgs.value = 6 - editProductForm.oldImgs.length
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
    // 檢查首圖
    if (editProductForm.image.length === 0 || typeof editProductForm.image === 'string') {
      fd.append('image', editProductForm.oldImg)
    } else {
      fd.append('image', editProductForm.image[0].file)
    }
    // 如果有新增照片，則 images 的長度會>=1，此時再加進去
    if (editProductForm.images.length >= 1) {
      editProductForm.images.forEach(item => {
        fd.append('images', item.file)
      })
    }
    if (editProductForm.oldImgs.length >= 1) {
      editProductForm.oldImgs.forEach(item => {
        fd.append('oldImgs', item)
      })
    }
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
    rawFile.value = ''
    rawFiles.value = []
    editProductForm.image = []
    editProductForm.images = []
    updateImage.value = false
    tableLoadItems()
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}

// 表格長寬比
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
watch(filter, async (newOrder, oldOrder) => {
  tableLoadItems()
})
</script>

<style lang="scss" scoped>
#title{
  border-left: .8rem solid $primary;
  }
#container{
  td>a{
  color: black;
  text-decoration: none;
  padding: 5px 8px;
  transition: .3s;
  &:hover{
    background: $primary;
    color: white;
  }
}
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
