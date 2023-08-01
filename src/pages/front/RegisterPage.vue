<template>
  <div class="container q-pt-md">
    <!-- 上層的隱形 toolbar -->
    <q-toolbar class="text-white q-px-lg" style="height: 50px;">
      <!-- 最右側的 btn -->
      <q-btn class="q-ml-auto" flat round dense>
        <!-- 設定該 btn 的圖 -->
        <q-avatar>
          <!-- 之後再改，先暫訂一張圖 -->
          <img src="https://source.boringavatars.com/beam/250/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51">
        </q-avatar>
        <!-- 點擊 btn 後出現的 menu，之後還會改 -->
        <q-menu square class="bg-primary text-center">
          <q-list dense>
            <q-item clickable>
              <q-item-section >USER</q-item-section>
            </q-item>
            <q-separator inset />
            <q-item v-for="navItem in navList" clickable :to="navItem.to" :key="navItem.to">
              <q-item-section>{{ navItem.label }}</q-item-section>
            </q-item>
            <q-separator inset />
            <q-item clickable to="/">
              <q-item-section>回首頁</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
    <div class="row flex-center">
      <div class="rg q-card q-pa-xs">
        <!-- 註冊表單 -->
        <q-form @submit.prevent="register" ref="form">
          <div class="q-card-section q-px-lg">
            <div class="title text-center text-h4 q-py-md">註冊會員</div>
            <!-- 信箱 -->
            <q-input class="q-mb-xs" v-model="registerForm.email" :rules="[rules.required,rules.email]" type="email" label="Email" hint="請輸入信箱" hide-hint filled dense clearable hide-bottom-space clear-icon="backspace">
              <template #prepend>
                <q-icon name="mail"></q-icon>
              </template>
            </q-input>
            <!-- 密碼 -->
            <q-input class="q-mb-xs" v-model="registerForm.password" :rules="[rules.required,rules.min,rules.max,rules.confirm]" ref="elPassword" type="password" label="Password" hint="請輸入密碼" hide-hint filled dense hide-bottom-space maxlength="20">
              <template #prepend>
                <q-icon name="vpn_key"></q-icon>
              </template>
            </q-input>
            <!-- 確認密碼 -->
            <q-input class="q-mb-xs" v-model="registerForm.confirmPassword" :rules="[rules.required,rules.min,rules.max,rules.confirm]" ref="elPasswordConfirm" type="password" label="Confirm Password" hint="確認密碼" hide-hint filled dense hide-bottom-space maxlength="20">
              <template #prepend>
                <q-icon name="vpn_key"></q-icon>
              </template>
            </q-input>
          </div>
          <q-card-actions class="q-mt-md q-px-lg" vertical>
            <q-btn flat label="register" type="submit" class="rg-btn" color="white" style="background: #A6D8D4;font-family: 'Playfair Display', serif;"></q-btn>
            <q-card-actions align="center">
              <q-btn label="快速註冊" flat></q-btn>
              <q-btn label="登入會員" to="/login" flat></q-btn>
            </q-card-actions>
          </q-card-actions>
        </q-form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url('../../assets/register_bg.jpg') no-repeat center/cover;
  .row{
    width:100%;
    /* 即為 100vh - toolbar預設的高度 50px */
    height: calc(100% - 50px);
  }
  .rg{
    width: 20rem;
    height: 24rem;
    background: transparent;
    backdrop-filter: blur(15px);
    .rg-btn{
      font-size: 1rem;
    }
    .title{
      font-weight: 600;
      color: white;
      text-shadow: black 0 0 0.2em;
    }
  }
}

</style>
<script setup>
import { reactive, ref, watch } from 'vue'
import validator from 'validator'
import { api } from '../../boot/axios.js'
import { useRouter } from 'vue-router'
import sweetalert from 'sweetalert2'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const router = useRouter()

const registerForm = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})

const elPassword = ref(null)
const elPasswordConfirm = ref(null)
const rules = {
  required: (value) => !!value || '欄位必填',
  email: (value) => validator.isEmail(value) || '信箱格式錯誤',
  min: (value) => value.length >= 4 || '長度必須大於 4 個字',
  max: (value) => value.length <= 20 || '長度必須小於 20 個字',
  confirm: () => registerForm.confirmPassword === registerForm.password || '密碼不一致'
}
// 如果 confirmPassword 有變動，去驗證上面的密碼
watch(() => registerForm.confirmPassword, () => {
  elPassword.value.validate()
})
// 如果 password 有變動
watch(() => registerForm.password, () => {
  elPasswordConfirm.value.validate()
})

const form = ref(null)
const register = async () => {
  try {
    await api.post('/users', registerForm)
    await sweetalert.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    // 註冊完送到 login 頁面
    router.push('/login')
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}
const navList = [
  {
    to: '/',
    label: '首頁',
    icon: 'home'
  },
  {
    to: '/latestnews',
    label: '最新消息',
    icon: 'announcement'
  },
  {
    to: '/realms',
    label: '區域',
    icon: 'location_on'
  },
  {
    to: '/trade',
    label: '交易',
    icon: 'local_mall'
  },
  {
    to: '/contact',
    label: '聯絡',
    icon: 'call'
  }
]
</script>
