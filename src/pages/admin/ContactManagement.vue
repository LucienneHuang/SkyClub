<template>
  <!-- 按詳細資訊按鈕跳出來的東西 -->
  <q-dialog v-model="dialog" persistent>
    <div id="form">
      <q-form @submit.prevent="editContactInfo">
        <q-card class="flex column justify-center items-center q-pa-lg q-ma-xl">
            <!-- 日期 -->
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">日期</div>
            <q-input color="primary" type="text" readonly v-model="moreInfoForm.date" />
          </q-card-section>
            <!-- 稱呼 -->
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">稱呼</div>
            <q-input color="primary" type="text" readonly v-model="moreInfoForm.name" />
          </q-card-section>
            <!-- 信箱 -->
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">信箱</div>
            <q-input color="primary" type="email" readonly v-model="moreInfoForm.email"/>
          </q-card-section >
            <!-- 內容 -->
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">內文</div>
            <q-input color="primary" type="textarea" readonly v-model="moreInfoForm.message"/>
          </q-card-section>
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">確認</div>
            <q-checkbox class="q-mt-sm" color="primary" v-model="moreInfoForm.done"/>
          </q-card-section>
          <q-card-actions class="q-mt-sm">
            <q-btn type="submit" unelevated rounded style="width: 6rem;" size="1rem" color="primary" label="送出"  v-close-popup />
            <q-btn unelevated rounded style="width: 6rem;" size="1rem" outline color="primary" label="取消" @click="dialog=false" />
          </q-card-actions>
        </q-card>
      </q-form>
    </div>
  </q-dialog>
  <!-- 標題 -->
  <div id="title" class="q-ml-xl q-my-lg q-pl-lg q-py-sm text-h4 text-weight-bold non-selectable">聯絡內容查看</div>
  <!-- 表格本體 -->
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
        <template #body-cell-done="props">
          <q-td :props="props">
            <q-icon name="mdi-check" v-if="props.value" />
            <q-icon name="mdi-triangle-outline" v-else />
          </q-td>
        </template>
        <!-- 詳細資訊 -->
        <template #body-cell-detail="props">
          <q-td :props="props">
            <q-btn round color="primary" @click="moreInfo(props.row)" icon="mdi-file-document-edit" />
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
    }
  }
}
</style>
<script setup>
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import sweetalert from 'sweetalert2'
import 'animate.css'
import { apiAuth } from '../../boot/axios.js'

const $q = useQuasar()
const filter = ref('')

const columns = [
  {
    name: 'date',
    required: true,
    label: '日期',
    align: 'center',
    field: 'date',
    sortable: true
  },
  {
    name: 'name',
    required: true,
    label: '稱呼',
    align: 'center',
    field: 'name',
    sortable: false
  },
  {
    name: 'message',
    required: true,
    label: '內容',
    align: 'center',
    field: 'message',
    sortable: false
  },
  {
    name: 'done',
    required: true,
    label: '確認',
    align: 'center',
    field: 'done',
    sortable: true
  },
  {
    name: 'detail',
    required: true,
    label: '查看',
    align: 'center',
    field: 'detail',
    sortable: true
  }
]
const rows = reactive([])
// 取得自己的商品資訊
const tableLoadContactInfo = async () => {
  try {
    const { data } = await apiAuth.get('/contactUs/get')
    rows.splice(0, rows.length, ...data.result)
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}
// 執行他
tableLoadContactInfo()

const moreInfoForm = reactive({
  date: '',
  name: '',
  email: '',
  message: '',
  done: false,
  infoId: ''
})
const dialog = ref(false)
const moreInfo = (item) => {
  console.log(item)
  dialog.value = true
  moreInfoForm.date = item.date
  moreInfoForm.name = item.name
  moreInfoForm.email = item.email
  moreInfoForm.message = item.message
  moreInfoForm.done = item.done
  moreInfoForm.infoId = item._id
}
const editContactInfo = async () => {
  try {
    await apiAuth.patch('/contactUs/' + moreInfoForm.infoId, moreInfoForm)
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
    // 更新後刷新 table
    tableLoadContactInfo()
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: '發生錯誤'
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
