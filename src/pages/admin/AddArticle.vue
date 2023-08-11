<!-- 最後再看需不需要拿掉更多圖片的按鈕 -->
<!-- 如果要拿掉多張圖片的按鈕，記得前後端都要改掉 -->
<template>
  <div id="title" class="q-ml-xl q-my-lg q-pl-lg q-py-sm text-h4 text-weight-bold non-selectable">新增文章</div>
  <div id="container" class="flex justify-center q-pa-lg">
    <q-form @reset="onReset" @submit.prevent="addArticle">
      <q-card class="flex column justify-center items-center q-pa-lg">
        <VueFileAgent :maxSize="'1MB'" :deletable="true" :accept="'image/jpg,image/jpeg,image/png'" :helpText="'只接受 jpg, jpeg 或 png 檔'" v-model="addArticleForm.image" v-model:rawModelValue="rawFile" :errorText="{type: '檔案類型不合法。只接受 jpg, jpeg 或 png 檔。',size: '檔案大小不得大於1MB',}" ></VueFileAgent>
          <!-- 文章標題 -->
        <q-card-section horizontal>
          <div class="text-h7 q-mt-md q-mr-lg">標題</div>
          <q-input type="text" label="請輸入文章標題" :rules="[rules.required]" v-model="addArticleForm.title"/>
        </q-card-section>
        <q-card-section horizontal>
          <div class="text-h7 q-mt-md q-mr-lg">引文</div>
          <q-input type="text" label="（選填）" v-model="addArticleForm.quote"/>
        </q-card-section>
        <q-card-section horizontal id="select">
        <!-- 選擇分類 -->
          <div class="text-h7 q-mt-md q-mr-lg">分類</div>
          <q-select :options="categoryOptions" label="文章分類" :rules="[rules.required,rules.categoryRequired]" v-model="addArticleForm.category"/>
          <div class="text-h7 q-mt-md q-mr-lg">區域</div>
          <q-select :options="realmsOptions" label="區域分類" :rules="[rules.required,rules.realmsRequired]" v-model="addArticleForm.realms"/>
        </q-card-section>
        <!-- 原文網址 -->
        <q-card-section horizontal>
          <div class="text-h7 q-mt-md q-mr-lg">原文</div>
          <q-input type="text" label="請輸入原文網址"  v-model="addArticleForm.original"/>
        </q-card-section>
        <!-- 翻譯來源 -->
        <q-card-section horizontal>
          <div class="text-h7 q-mt-md q-mr-lg">翻譯</div>
          <q-input type="text" label="請輸入翻譯來源" v-model="addArticleForm.translation"/>
        </q-card-section>
        <q-card-section horizontal>
          <div class="text-h7 q-mt-md q-mr-lg">日期</div>
          <q-input label="請輸入文章日期" v-model="addArticleForm.date" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="addArticleForm.date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-card-section>
        <!-- 文章內容 -->
        <q-card-section horizontal>
          <div class="text-h7 q-mt-md q-mr-lg">內文</div>
          <q-editor :rules="[rules.required]" v-model="addArticleForm.description"  class="q-my-md"
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
        <!-- 是否顯示 -->
        <q-card-section horizontal>
          <div class="text-h7 q-mt-md q-mr-lg">顯示文章</div>
          <q-checkbox class="q-mt-sm" v-model="addArticleForm.display"/>
        </q-card-section>

        <!-- 送出/清除 -->
        <q-card-actions class="q-mt-sm">
          <q-btn type="submit" unelevated color="primary" rounded style="width: 6rem;" size="1rem" label="送出" :loading="loading" />
          <q-btn type="reset" unelevated color="primary" rounded style="width: 6rem;" size="1rem" outline label="清除" @click="onReset"/>
        </q-card-actions>
      </q-card>
    </q-form>
  </div>
</template>
<style lang="scss" scoped>
#title{
  border-left: .8rem solid $primary;
  }
#container{
  width: 100%;
  .q-card{
    border: 4px solid $primary;
    width: 23rem;
    border-radius: 2rem;
    :deep(.q-field__control){
      width: 15rem;
    }
    .q-editor{
      border: 1px solid $primary;
      width: 15rem;
    }
    #select:deep(.q-field__control){
        width: 6rem;
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
      // .vue-file-agent.file-input-wrapper{
      //   width: 25rem;
      // }
      }
      .q-editor{
        width: 30rem;
      }
      #select:deep(.q-field__control){
        width: 13rem;
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
      width: 52.2rem;
      :deep(.q-field__control){
      width: 42.2rem;
      }
      .q-editor{
        width: 42.2rem;
      }
      #select:deep(.q-field__control){
        width: 19rem;
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
import { useRouter } from 'vue-router'
import { apiAuth } from 'src/boot/axios'
const $q = useQuasar()
const router = useRouter()

const rawFile = ref([])
const rawFiles = ref([])
const addArticleForm = reactive({
  title: '',
  original: '',
  translation: '',
  date: '',
  image: [],
  description: '',
  category: '',
  realms: '',
  quote: '',
  display: false
})
const categoryOptions = ['最新消息', '區域介紹']
const realmsOptions = ['無', '晨島', '雲野', '雨林', '霞谷', '暮土', '禁閣']
const rules = {
  required: (value) => !!value || '欄位必填',
  categoryRequired: (value) => ['最新消息', '區域介紹'].includes(value) || '沒有該分類',
  realmsRequired: (value) => ['無', '晨島', '雲野', '雨林', '霞谷', '暮土', '禁閣'].includes(value) || '沒有該分類'
}

// 點清除按鈕清掉所有東西
const onReset = () => {
  addArticleForm.title = ''
  addArticleForm.original = ''
  addArticleForm.translation = ''
  addArticleForm.date = ''
  addArticleForm.image = []
  addArticleForm.description = ''
  addArticleForm.category = ''
  addArticleForm.realms = ''
  addArticleForm.quote = ''
  addArticleForm.display = false
  rawFile.value = []
  rawFiles.value = []
}

const loading = ref(false)

const addArticle = async () => {
  if (addArticleForm.image.length === 0) {
    return $q.notify({
      type: 'negative',
      message: '請選擇圖片'
    })
  }
  try {
    loading.value = true
    const fd = new FormData()
    fd.append('title', addArticleForm.title)
    fd.append('original', addArticleForm.original)
    fd.append('translation', addArticleForm.translation)
    fd.append('date', addArticleForm.date)
    fd.append('image', addArticleForm.image[0].file)
    fd.append('description', addArticleForm.description)
    fd.append('category', addArticleForm.category)
    fd.append('realms', addArticleForm.realms)
    fd.append('quote', addArticleForm.quote)
    fd.append('display', addArticleForm.display)
    await apiAuth.post('/articles', fd)
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
      iconColor: '#F198AF',
      confirmButtonColor: '#F198AF',
      width: '20rem'
    })
    router.push('/admin/articles')
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}

</script>
