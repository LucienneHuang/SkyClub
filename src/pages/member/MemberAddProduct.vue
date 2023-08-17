<template>
  <div id="title" class="q-ml-xl q-my-lg q-pl-lg q-py-sm text-h4 text-weight-bold non-selectable">新增商品
  </div>
  <div id="container" class="flex justify-center">
    <q-form @reset="onReset" @submit.prevent="addProuct">
      <q-card class="flex column justify-center items-center q-pa-lg q-ma-xl">
        <VueFileAgent :maxSize="'1MB'" :deletable="true" :accept="'image/jpg,image/jpeg,image/png'" :helpText="'只接受 jpg, jpeg 或 png 檔'" v-model="addProductForm.image" v-model:rawModelValue="rawFile" :errorText="{type: '檔案類型不合法。只接受 jpg, jpeg 或 png 檔。',size: '檔案大小不得大於1MB',}" ></VueFileAgent>
          <!-- 商品標題 -->
        <q-card-section horizontal>
          <div class="text-h7 q-mt-md q-mr-lg">標題</div>
          <q-input color="secondary" type="text" v-model="addProductForm.name" :rules="[rules.required]"/>
        </q-card-section>
          <!-- 金額與數量 -->
        <q-card-section horizontal>
          <div class="text-h7 q-mt-md q-mr-lg">金額</div>
          <!-- 輸入金額 -->
          <q-input color="secondary" type="number" v-model.number="addProductForm.price" :rules="[rules.required,rules.numberRequired]"/>
        </q-card-section >
        <q-card-section horizontal>
          <!-- 選擇單位 -->
          <div class="text-h7 q-mt-md q-mr-lg">幣值</div>
          <q-select color="secondary" v-model="addProductForm.currency" :options="currencyOptions" label="幣值" :rules="[rules.required,rules.currencyRequired]"/>
        </q-card-section>
        <q-card-section horizontal>
          <div class="text-h7 q-mt-md q-mr-lg">數量</div>
          <q-input color="secondary" type="number" v-model.number="addProductForm.MaxNumber" :rules="[rules.required,rules.numberRequired]"/>
        </q-card-section>
        <q-card-section horizontal>
          <div class="text-h7 q-mt-md q-mr-lg">內文</div>
            <q-editor  :rules="[rules.required]" v-model="addProductForm.description"  class="q-my-md"
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
          <q-select color="secondary" v-model="addProductForm.category" :options="categoryOptions" label="分類" :rules="[rules.required,rules.categoryRequired]"/>
        </q-card-section>
        <q-card-section horizontal>
          <div class="text-h7 q-mt-md q-mr-lg">上架</div>
          <q-checkbox class="q-mt-sm" color="secondary" v-model="addProductForm.sell"/>
        </q-card-section>
        <q-card-actions class="q-mt-sm">
          <q-btn unelevated rounded style="width: 6rem;" size="1rem" outline color="secondary" label="更多圖片" @click="moreImageBtn" />
        </q-card-actions>
        <q-card-section v-if="addMoreImages" horizontal>
          <VueFileAgent :multiple="true" :maxFiles="6" :maxSize="'1MB'" :deletable="true" :accept="'image/jpg,image/jpeg,image/png'" :helpText="'只接受 jpg, jpeg 或 png 檔，最多六張。'" v-model="addProductForm.images" :errorText="{type: '檔案類型不合法。只接受 jpg, jpeg 或 png 檔。',size: '檔案大小不得大於1MB',}" v-model:rawModelValue="rawFiles" ></VueFileAgent>
        </q-card-section>
        <!-- 送出/清除 -->
        <q-card-actions class="q-mt-sm">
          <q-btn type="submit" unelevated rounded style="width: 6rem;" size="1rem" color="secondary" label="送出" :loading="loading"/>
          <q-btn type="reset" unelevated rounded style="width: 6rem;" size="1rem" outline color="secondary" label="清除" />
        </q-card-actions>
      </q-card>
    </q-form>
  </div>
</template>
<style lang="scss" scoped>
#title{
  border-left: .8rem solid $secondary;
  }
#container{
  width: 100%;
  .q-card{
    border: 4px solid $secondary;
    width: 23rem;
    border-radius: 2rem;
    :deep(.q-field__control){
      width: 15rem;
    }
    .q-editor{
        border: 1px solid $secondary;
        width: 15rem;
      }
  }
}

@media(min-width:975px){
  #title{
    font-size: 2.4rem;
  }
  #container{
    .q-card{
      font-size: 1.2rem;
      width: 40rem;
      :deep(.q-field__control){
      width: 30rem;
      }
      .vue-file-agent.file-input-wrapper{
        width: 25rem;
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
  #container{
    .q-card{
      font-size: 1.4rem;
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
import { reactive, ref } from 'vue'
import sweetalert from 'sweetalert2'
import 'animate.css'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { apiAuth } from '../../boot/axios.js'
import { useUserStore } from 'src/stores/user.js'
const user = useUserStore()
const $q = useQuasar()
const router = useRouter()
const addMoreImages = ref(false)
const moreImageBtn = () => {
  addMoreImages.value = !addMoreImages.value
  if (addMoreImages.value === true) {
    $q.notify({
      type: 'positive',
      message: '最多可新增六張圖片'
    })
  } else {
    $q.notify({
      type: 'negative',
      message: '取消'
    })
  }
}
const loading = ref(false)
const addProductForm = reactive({
  user: user.user,
  name: '',
  price: 0,
  currency: '',
  MaxNumber: 0,
  image: [],
  images: [],
  description: '',
  category: '',
  sell: false,
  date: ''
})
const rawFile = ref([])
const rawFiles = ref([])
const currencyOptions = ['台幣']
const categoryOptions = ['季票', '禮包', '周邊', '其他']
const rules = {
  required: (value) => !!value || '欄位必填',
  numberRequired: (value) => (!isNaN(value) && value > 0) || '不得小於 0',
  currencyRequired: (value) => currencyOptions.includes(value) || '沒有該幣值',
  categoryRequired: (value) => categoryOptions.includes(value) || '沒有該分類'
}

const onReset = () => {
  addProductForm.name = ''
  addProductForm.price = 0
  addProductForm.currency = ''
  addProductForm.MaxNumber = 0
  addProductForm.image = []
  addProductForm.images = []
  rawFile.value = []
  rawFiles.value = []
  addProductForm.description = ''
  addProductForm.category = ''
  addProductForm.sell = false
  addMoreImages.value = false
  addProductForm.date = ''
}
const addProuct = async () => {
  // 檢查是否有新增主要圖片
  if (addProductForm.image.length === 0) {
    return $q.notify({
      type: 'negative',
      message: '請選擇圖片'
    })
  }
  const trueDate = new Date().toJSON().slice(0, 10)
  addProductForm.date = trueDate
  try {
    loading.value = true
    const fd = new FormData()
    fd.append('user', user.user)
    fd.append('name', addProductForm.name)
    fd.append('price', addProductForm.price)
    fd.append('currency', addProductForm.currency)
    fd.append('MaxNumber', addProductForm.MaxNumber)
    fd.append('image', addProductForm.image[0].file)
    fd.append('description', addProductForm.description)
    fd.append('category', addProductForm.category)
    fd.append('sell', addProductForm.sell)
    fd.append('date', addProductForm.date)
    if (addProductForm.images.length >= 1) {
      addProductForm.images.forEach(item => {
        fd.append('images', item.file)
      })
    }
    await apiAuth.post('/products', fd)
    loading.value = false
    await sweetalert.fire({
      icon: 'success',
      title: '新增成功',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      iconColor: '#A6D8D4',
      confirmButtonColor: '#A6D8D4',
      width: '20rem'
    })
    router.push('/member/products')
  } catch (error) {
    console.log(error)
    loading.value = false
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}
</script>
