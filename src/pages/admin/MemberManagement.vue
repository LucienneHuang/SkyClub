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
  <div id="title" class="q-ml-xl q-my-lg q-pl-lg q-py-sm text-h4 text-weight-bold non-selectable">會員資料管理</div>
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
        <!-- 頭貼 -->
        <template #body-cell-avatar="props">
          <q-td :props="props">
            <q-img :src="props.value" spinner-color="white" style="height: 100px; width: 100px" />
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
import { apiAuth } from 'src/boot/axios'

const $q = useQuasar()
const filter = ref('')

const columns = [
  {
    name: 'avatar',
    required: true,
    label: '頭貼',
    align: 'center',
    field: 'avatar',
    sortable: false
  },
  {
    name: 'nickname',
    required: true,
    label: '稱呼',
    align: 'center',
    field: 'nickname',
    sortable: false
  },
  {
    name: '_id',
    required: true,
    label: '會員 id',
    align: 'center',
    field: '_id',
    sortable: true
  },
  {
    name: 'email',
    required: true,
    label: 'email',
    align: 'center',
    field: 'email',
    sortable: true
  },
  {
    name: 'role',
    required: true,
    label: '權限',
    align: 'center',
    field: 'role',
    sortable: true
  }
]
const rows = reactive([])
const tableLoadAllMember = async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    rows.splice(0, rows.length, ...data.result)
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}
tableLoadAllMember()

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
