<template>
  <div id="title" class="q-ml-xl q-my-lg q-pl-lg q-py-sm text-h4 text-weight-bold non-selectable">個人檔案</div>
  <div id="container" class="flex justify-center">
    <q-form @submit.prevent="sendEditProfile">
      <q-card class="q-ma-md">
        <q-card-section id="top" align="right" class="bg-primary text-white">
          <!-- 編輯按鈕 -->
          <q-btn round flat text-color="white" color="transparent" icon="edit" size="lg" @click="edit=!edit" />
        </q-card-section>
        <!-- 大頭貼 -->
        <q-card-section align="center" class="q-mt-xl">
          <template v-if="edit">
            <VueFileAgent :maxSize="'1MB'" :deletable="true" :accept="'image/jpg,image/jpeg,image/png'" :helpText="'只接受 jpg, jpeg 或 png 檔'" v-model="editProfileForm.avatar" v-model:rawModelValue="rawFile" :errorText="{type: '檔案類型不合法。只接受 jpg, jpeg 或 png 檔。',size: '檔案大小不得大於1MB',}" ></VueFileAgent>
          </template>
          <template v-else>
            <q-avatar size="13rem" class="q-mb-lg shadow-9">
              <img :src="user.avatar">
            </q-avatar>
          </template>
        </q-card-section>
        <!-- 身分/稱呼/信箱 -->
        <q-card-section align="center" class="non-selectable">
          <div class="text-weight-bold q-mb-md role">管理員</div>
          <template v-if="edit">
            <q-input class="q-mx-xl" color="primary" type="text" label="請輸入暱稱" :rules="[rules.required]" v-model="editProfileForm.nickname" clearable/>
            <q-input class="q-mx-xl" color="primary" type="email" label="請輸入信箱" :rules="[rules.required,rules.email]" v-model="editProfileForm.email" clearable />
            <q-btn class="q-my-md" type="submit" unelevated rounded style="width: 6rem;" size="1rem" color="primary" label="送出" />
          </template>
          <template v-else>
            <div class="text-weight-bold q-mb-md nickname">{{ user.nickname }}</div>
            <div class="email">{{ user.email }}</div>
          </template>
        </q-card-section>
      </q-card>
    </q-form>

  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import validator from 'validator'
import sweetalert from 'sweetalert2'
import 'animate.css'
import { useUserStore } from 'src/stores/user.js'
import { apiAuth } from '../../boot/axios.js'

const user = useUserStore()
const edit = ref(false)
const rawFile = ref([])
const editProfileForm = reactive({
  avatar: [user.avatar],
  nickname: user.nickname,
  email: user.email
})

const rules = {
  required: (value) => !!value || '欄位必填',
  email: (value) => validator.isEmail(value) || '信箱格式錯誤'
}
const sendEditProfile = async () => {
  try {
    const fd = new FormData()
    fd.append('nickname', editProfileForm.nickname)
    fd.append('email', editProfileForm.email)
    if (editProfileForm.avatar.length === 0) {
      fd.append('avatar', user.avatar)
    } else {
      fd.append('avatar', editProfileForm.avatar[0].file || user.avatar)
    }

    await apiAuth.patch('/users/' + user.user, fd)
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
    window.location.reload('/memeber/')
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss" scoped>
#title{
  border-left: .8rem solid $primary;
  }
#container{
  width: 100%;
  // height: calc(100vh - 164px);

  .q-card{
    border-radius: 2rem;
    border: 1px solid $primary;
    width: 22rem;
    height: 45rem;
    #top{
      height: 5rem;
    }
    .role{
      font-size: 3rem;
    }
    .nickname{
      font-size: 2rem;
    }
    .email{
      font-size: 1.5rem;
    }
  }

}

@media(min-width:992px){
  #title{
  font-size: 3rem;
  }
  #container{
    .q-card{
      width: 40rem;
    }
  }
}
</style>
