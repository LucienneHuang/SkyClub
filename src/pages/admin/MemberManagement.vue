<template>
  <!-- 按詳細資訊按鈕跳出來的東西 -->
  <q-dialog v-model="dialog" persistent>
    <div id="form">
      <q-form @submit.prevent="editUser">
        <q-card class="flex column justify-center items-center q-pa-lg q-ma-xl">
          <q-card-section horizontal>
            <VueFileAgent v-if="updateImage" :maxSize="'1MB'" :deletable="true" :accept="'image/jpg,image/jpeg,image/png'" :helpText="'只接受 jpg, jpeg 或 png 檔'" v-model="editUserForm.avatar" v-model:rawModelValue="rawFile" :errorText="{type: '檔案類型不合法。只接受 jpg, jpeg 或 png 檔。',size: '檔案大小不得大於1MB',}" ></VueFileAgent>
            <q-btn v-else @click="updateImageBtn">
              <q-img :src="editUserForm.oldImg" style="width: 160px; height: 160px; border-radius: 0;"/>
            </q-btn>
          </q-card-section>
          <!-- 會員 ID -->
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">&nbsp;&nbsp;ID&nbsp;</div>
            <q-input color="primary" type="text"  v-model="editUserForm.userId" readonly />
          </q-card-section>
          <!-- 權限 -->
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">權限</div>
            <q-input color="primary" type="text"  v-model="editUserForm.role" readonly />
          </q-card-section >
          <!-- 暱稱 -->
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">暱稱</div>
            <q-input label="請輸入暱稱" color="primary" type="text"  v-model="editUserForm.nickname" :rules="[rules.required]" />
          </q-card-section>
          <!-- 信箱 -->
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">信箱</div>
            <q-input label="請輸入信箱" color="primary" type="email"  v-model="editUserForm.email" :rules="[rules.required,rules.email]"/>
          </q-card-section >
          <q-card-section horizontal>
            <div class="text-h7 q-mt-md q-mr-lg">停權</div>
            <q-checkbox class="q-mt-sm" color="primary" v-model="editUserForm.block"/>
          </q-card-section>
          <q-card-actions class="q-mt-sm">
            <q-btn type="submit" unelevated rounded style="width: 6rem;" size="1rem" color="primary" label="送出" v-close-popup/>
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
            <q-avatar size="100px">
              <img :src="props.value">
            </q-avatar>
          </q-td>
        </template>
        <!-- 權限 -->
        <template #body-cell-role="props">
          <q-td :props="props" v-if="props.row.role===1">
            管理員
          </q-td>
          <q-td :props="props" v-else>
            會員
          </q-td>
        </template>
        <!-- 頭貼 -->
        <template #body-cell-block="props">
          <q-td :props="props">
            <q-icon name="mdi-triangle-outline" v-if="props.value" />
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
import validator from 'validator'
import sweetalert from 'sweetalert2'
import 'animate.css'
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
    sortable: false
  },
  {
    name: 'block',
    required: true,
    label: '停權',
    align: 'center',
    field: 'block',
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

// 設定 updateImage 的值
const updateImage = ref(false)
const updateImageBtn = () => {
  updateImage.value = !updateImage.value
}
// 驗證規則
const rules = {
  required: (value) => !!value || '欄位必填',
  email: (value) => validator.isEmail(value) || '信箱格式錯誤'
}
// dialog 開關預設 false
const dialog = ref(false)
const rawFile = ref([])
const editUserForm = reactive({
  avatar: [],
  oldImg: '',
  nickname: '',
  userId: '',
  email: '',
  role: '',
  block: 0
})
// 取得所有資料
const tableEditItem = (item) => {
  dialog.value = true
  editUserForm.avatar = item.avatar
  editUserForm.oldImg = item.avatar
  editUserForm.nickname = item.nickname
  editUserForm.userId = item._id
  editUserForm.email = item.email
  if (item.role === 0) {
    editUserForm.role = '會員'
  } else {
    editUserForm.role = '管理員'
  }
  if (item.block === 0) {
    editUserForm.block = false
  } else {
    editUserForm.block = true
  }
}
const editProducts = async (userId, fd2) => {
  const products = await apiAuth.get('/products/user/' + userId)
  console.log(products.data.result)
  for (const id of products.data.result) {
    await apiAuth.patch('/products/' + id._id, fd2)
  }
}
// 編輯完成送出
const editUser = async () => {
  try {
    const fd = new FormData()
    const fd2 = new FormData()
    fd.append('nickname', editUserForm.nickname)
    fd.append('email', editUserForm.email)
    if (editUserForm.avatar.length === 0 || typeof editUserForm.avatar === 'string') {
      fd.append('avatar', editUserForm.oldImg)
    } else {
      fd.append('avatar', editUserForm.avatar[0].file)
    }
    if (editUserForm.block === true) {
      fd.append('block', 1)
      fd2.append('sell', false)
      editProducts(editUserForm.userId, fd2)
    } else {
      fd.append('block', 0)
    }

    await apiAuth.patch('/users/all/' + editUserForm.userId, fd)
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
    tableLoadAllMember()
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}

// 調整 table 寬高比例
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
