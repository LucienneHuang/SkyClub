<template>
  <!-- 按詳細資訊按鈕跳出來的東西 -->
  <q-dialog v-model="dialog" persistent>
    <div id="form">
      <q-form @submit.prevent="editArticle">
        <q-card class="flex column justify-center items-center q-pa-lg q-ma-xl">
          <q-card-section horizontal>
            <VueFileAgent v-if="updateImage" :maxSize="'1MB'" :deletable="true" :accept="'image/jpg,image/jpeg,image/png'" :helpText="'只接受 jpg, jpeg 或 png 檔'" v-model="editArticleForm.image" v-model:rawModelValue="rawFile" :errorText="{type: '檔案類型不合法。只接受 jpg, jpeg 或 png 檔。',size: '檔案大小不得大於1MB',}" ></VueFileAgent>
            <q-btn v-else @click="updateImageBtn">
              <q-img :src="editArticleForm.oldImg" style="width: 160px; height: 160px; border-radius: 0;"/>
            </q-btn>
          </q-card-section>
          <!-- 標題 -->
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">標題</div>
            <q-input label="請輸入標題" color="primary" type="text"  v-model="editArticleForm.title" />
          </q-card-section>
          <!-- 引文 -->
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">引文</div>
            <q-input label="(選填)" color="primary" type="text"  v-model="editArticleForm.quote" />
          </q-card-section>
          <!-- 分類 -->
          <q-card-section horizontal id="select">
          <!-- 選擇分類 -->
            <div class="text-h7 q-mt-md q-mr-lg">分類</div>
            <q-select :options="categoryOptions" label="文章分類" :rules="[rules.required,rules.categoryRequired]" v-model="editArticleForm.category"/>
            <div class="text-h7 q-mt-md q-mr-lg">區域</div>
            <q-select :options="realmsOptions" label="區域分類" :rules="[rules.required,rules.realmsRequired]" v-model="editArticleForm.realms"/>
          </q-card-section>
          <!-- 原文 -->
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">原文</div>
            <q-input label="請輸入原文網址" color="primary" type="text"  v-model="editArticleForm.original"/>
          </q-card-section >
          <!-- 翻譯 -->
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">翻譯</div>
            <q-input label="請輸入翻譯來源" color="primary" type="text"  v-model="editArticleForm.translation"/>
          </q-card-section >
          <!-- 日期 -->
          <q-card-section horizontal>
          <div class="text-h7 q-mt-md q-mr-lg">日期</div>
            <q-input label="請輸入文章日期" v-model="editArticleForm.date" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="editArticleForm.date">
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
            <q-editor :rules="[rules.required]" v-model="editArticleForm.description"  class="q-my-md"
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
            <div class="text-h7 q-mt-md q-mr-lg">顯示</div>
            <q-checkbox class="q-mt-sm" color="primary" v-model="editArticleForm.display"/>
          </q-card-section>
          <q-card-actions class="q-mt-sm">
            <q-btn type="submit" unelevated rounded style="width: 6rem;" size="1rem" color="primary" label="送出" v-close-popup/>
            <q-btn unelevated rounded style="width: 6rem;" size="1rem" outline color="primary" label="取消" @click="dialog=false" />
          </q-card-actions>
        </q-card>
      </q-form>
    </div>
  </q-dialog>
  <!-- 刪除的確認框 -->
  <q-dialog v-model="dialogDelete" persistent>
    <q-card>
      <q-card-section>
        <div class="text-center text-h6">確定要刪除嗎？</div>
      </q-card-section>
      <q-card-actions>
        <q-btn type="submit" unelevated rounded style="width: 6rem;" size="1rem" color="primary" label="確定" v-close-popup @click="deleteArticle"/>
        <q-btn unelevated rounded style="width: 6rem;" size="1rem" outline color="primary" label="取消" @click="dialogDelete=false" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <!-- 標題 -->
  <div id="title" class="q-ml-xl q-my-lg q-pl-lg q-py-sm text-h4 text-weight-bold non-selectable">所有文章管理
    <q-btn class="q-mb-sm" round color="primary" icon="mdi-plus-thick" to="/admin/addarticle"/>
  </div>
  <!-- 表格本體 -->
  <div id="container" class="flex justify-center q-px-xl q-pb-xl">
    <q-responsive id="wh" :ratio="ratioTop/ratioBottom">
      <q-table :rows-per-page-options="[10,0]" :columns="columns" row-key="name" :rows="rows">
        <!-- 搜尋欄位 -->
        <template v-slot:top-right>
          <q-input color="white" filled clearable borderless dense debounce="300" v-model="filter" placeholder="請輸入文章關鍵字">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <!-- 主圖 -->
        <template #body-cell-image="props">
          <q-td :props="props">
            <q-img :src="props.value" spinner-color="white" style="height: 140px; width: 180px" />
          </q-td>
        </template>
        <!-- 名稱 -->
        <template #body-cell-title="props">
          <q-td :props="props">
            <router-link v-if="props.row.category==='最新消息'" :to="'/latestnews/'+props.row.category+'?articleId='+props.row._id">{{ props.row.title }}</router-link>
            <router-link v-else :to="'/realms/'+props.row.category+'?articleId='+props.row._id">{{ props.row.title }}</router-link>
          </q-td>
        </template>
        <template #body-cell-display="props">
          <q-td :props="props">
            <q-icon name="mdi-check" v-if="props.value" />
          </q-td>
        </template>
        <template #body-cell-edit="props">
          <q-td :props="props">
            <q-btn round color="primary" @click="tableEditItem(props.row)" icon="mdi-file-document-edit" />
          </q-td>
        </template>
        <template #body-cell-delete="props">
          <q-td :props="props">
            <q-btn round color="primary" @click="tableDeleteCheck(props.row)" icon="mdi-delete" />
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
      width: 15rem;
    }
    #select:deep(.q-field__control){
        width: 5.9rem;
    }
    .q-editor{
      border: 1px solid $primary;
      width: 15rem;
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
      #select:deep(.q-field__control){
        width: 13.4rem;
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
      #select:deep(.q-field__control){
        width: 18.3rem;
      }
    }
  }
}
</style>
<script setup>
import { ref, reactive, watch } from 'vue'
import { useQuasar } from 'quasar'
import sweetalert from 'sweetalert2'
import 'animate.css'
import { apiAuth } from 'src/boot/axios'

const $q = useQuasar()
const filter = ref('')

const columns = [
  {
    name: 'date',
    required: true,
    label: '發布日期',
    align: 'center',
    field: 'date',
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
    name: 'image',
    required: true,
    label: '首圖',
    align: 'center',
    field: 'image',
    sortable: false
  },
  {
    name: 'title',
    required: true,
    label: '文章標題',
    align: 'left',
    field: 'title',
    sortable: false
  },
  {
    name: 'display',
    required: true,
    label: '顯示',
    align: 'center',
    field: 'display',
    sortable: true
  },
  {
    name: 'edit',
    required: true,
    label: '編輯',
    align: 'center',
    field: 'edit',
    sortable: false
  },
  {
    name: 'delete',
    required: true,
    label: '刪除',
    align: 'center',
    field: 'delete',
    sortable: false
  }
]
const rows = reactive([])
// 載入所有文章資料
const tableLoadAllArticles = async () => {
  try {
    const { data } = await apiAuth.get('/articles/all', {
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
// 進到網頁時先執行一次
tableLoadAllArticles()
// 分類
const categoryOptions = ['最新消息', '區域介紹']
const realmsOptions = ['無', '晨島', '雲野', '雨林', '霞谷', '暮土', '禁閣']
// 規則
const rules = {
  required: (value) => !!value || '欄位必填',
  categoryRequired: (value) => ['最新消息', '區域介紹'].includes(value) || '沒有該分類',
  realmsRequired: (value) => ['無', '晨島', '雲野', '雨林', '霞谷', '暮土', '禁閣'].includes(value) || '沒有該分類'
}

// 設定 updateImage 的值
const updateImage = ref(false)
const updateImageBtn = () => {
  updateImage.value = !updateImage.value
}
// dialog 開關
const dialog = ref(false)
const dialogDelete = ref(false)
const articleId = ref('')
// 編輯文章，預設
const rawFile = ref([])
const editArticleForm = reactive({
  title: '',
  original: '',
  translation: '',
  date: '',
  image: [],
  oldImg: '',
  description: '',
  category: '',
  realms: '',
  quote: '',
  display: false
})
// 取得點選的編輯文章的資料
const tableEditItem = (item) => {
  dialog.value = true
  editArticleForm.title = item.title
  editArticleForm.original = item.original
  editArticleForm.translation = item.translation
  editArticleForm.date = item.date
  editArticleForm.description = item.description
  editArticleForm.image = item.image
  editArticleForm.category = item.category
  editArticleForm.realms = item.realms
  editArticleForm.quote = item.quote
  editArticleForm.display = item.display
  editArticleForm.oldImg = item.image
  articleId.value = item._id
}

// 送出編輯完畢的資料
const editArticle = async () => {
  try {
    const fd = new FormData()
    fd.append('title', editArticleForm.title)
    fd.append('original', editArticleForm.original)
    fd.append('translation', editArticleForm.translation)
    fd.append('date', editArticleForm.date)
    fd.append('description', editArticleForm.description)
    fd.append('category', editArticleForm.category)
    fd.append('realms', editArticleForm.realms)
    fd.append('quote', editArticleForm.quote)
    fd.append('display', editArticleForm.display)
    // 如果editArticleForm.image 的長度為 0
    // 表示有點擊圖片按鈕要重新上傳圖片，但是又沒有真的上傳，所以 image 還是回傳舊的圖片的值
    // 而不為 0 有兩種可能
    // 一種是真的有上傳新的圖片（此時 editArticleForm.image 不為 0 且為 Array）
    // 一種是沒有點擊圖片重新上傳（此時 editArticleForm.image 不為 0 且為 String）
    // 所以在這裡檢查 editArticleForm.image.length 是否為 0 或者如果不為 0 ，他的 type 是否是 string
    if (editArticleForm.image.length === 0 || typeof editArticleForm.image === 'string') {
      fd.append('image', editArticleForm.oldImg)
    } else {
      fd.append('image', editArticleForm.image[0].file)
    }
    await apiAuth.patch('/articles/' + articleId.value, fd)
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
    editArticleForm.image = ''
    updateImage.value = false
    tableLoadAllArticles()
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}

// 確認是否刪除
const tableDeleteCheck = async (item) => {
  dialogDelete.value = true
  articleId.value = item._id
}

const deleteArticle = async () => {
  try {
    await apiAuth.delete('/articles/' + articleId.value)
    await sweetalert.fire({
      icon: 'success',
      title: '刪除成功',
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
    tableLoadAllArticles()
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}
// 去控制 table 比例
const ratioTop = ref('')
const ratioBottom = ref('')
// 是否顯示 editor
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
  tableLoadAllArticles()
})
</script>
