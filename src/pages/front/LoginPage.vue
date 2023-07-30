<template>
  <div class="container">
    <!-- 最上層隱形工具列 -->
    <q-toolbar class="text-white q-px-lg" style="height: 50px;">
      <!-- 頭貼按鈕 -->
      <q-btn class="q-ml-auto" flat round dense>
        <!-- 頭貼設定 -->
        <q-avatar>
          <img src="https://source.boringavatars.com/beam/250/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51">
        </q-avatar>
        <!-- 按頭貼後出現的下拉式 menu -->
        <q-menu square class="bg-primary">
          <q-list dense>
            <q-item clickable>
              <q-item-section>USER</q-item-section>
            </q-item>
            <q-separator inset />
            <q-item clickable to="/admin">
              <q-item-section>管理後台</q-item-section>
            </q-item>
            <q-item clickable to="/member">
              <q-item-section>會員後台</q-item-section>
            </q-item>
            <q-item clickable to="/register">
              <q-item-section>註冊</q-item-section>
            </q-item>
            <q-item clickable to="/login">
              <q-item-section>登入</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>登出</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>購物車</q-item-section>
            </q-item>
            <q-separator inset />
            <q-item clickable to="/">
              <q-item-section>回首頁</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
    <!-- 本體 -->
    <div class="row flex-center">
      <div class="login q-card q-pa-xs">
        <!-- 登入表單 -->
        <q-form @submit.prevent="login">
          <div class="q-card-section q-px-lg">
            <div class="title text-center text-h4 q-py-md">登入會員</div>
            <!-- 信箱 -->
            <q-input class="q-mb-xs" v-model="loginForm.email" :rules="[rules.required,rules.email]" type="email" label="Email" hint="請輸入信箱" hide-hint filled dense clearable hide-bottom-space clear-icon="backspace">
              <template #prepend>
                <q-icon name="mail"></q-icon>
              </template>
            </q-input>
            <!-- 密碼 -->
            <q-input class="q-mb-xs" v-model="loginForm.password" :rules="[rules.required,rules.min,rules.max]" type="password" label="Password" hint="請輸入密碼" hide-hint filled dense hide-bottom-space>
              <template #prepend>
                <q-icon name="vpn_key"></q-icon>
              </template>
            </q-input>
          </div>
          <q-card-actions class="q-mt-md q-px-lg" vertical>
            <q-btn flat label="login" type="submit" class="login-btn" color="white" style="background: #A6D8D4;font-family: 'Playfair Display', serif;"></q-btn>
            <q-card-actions align="center">
              <q-btn label="快速登入" flat></q-btn>
              <q-btn label="註冊會員" to="/register" flat></q-btn>
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
  background: url('../../assets/login_bg.jpg') no-repeat center/cover;
  .row{
    width:100%;
    /* 即為 100vh - toolbar預設的高度 50px */
    height: calc(100% - 50px);
  }
  .login{
    width: 20rem;
    height:18rem;
    background: transparent;
    backdrop-filter: blur(15px);
    .login-btn{
      font-size: 1rem;
    }

    .title{
      font-weight: 600;
      color: white;
      text-shadow: black 0 0 0.2em;
    }
    .q-item__section{color: white;}
  }

}

</style>
<script setup>
import { reactive } from 'vue'
import validator from 'validator'
import { api } from 'src/boot/axios.js'
import { useRouter } from 'vue-router'
import sweetalert from 'sweetalert2'
import { useQuasar } from 'quasar'
import { useUserStore } from 'src/stores/user.js'

const $q = useQuasar()
const router = useRouter()
const user = useUserStore()

const loginForm = reactive({
  email: '',
  password: ''
})

const rules = {
  required: (value) => !!value || '欄位必填',
  email: (value) => validator.isEmail(value) || '信箱格式錯誤',
  min: (value) => value.length >= 4 || '長度必須大於 4 個字',
  max: (value) => value.length <= 20 || '長度必須小於 20 個字'
}
const login = async () => {
  try {
    const { data } = await api.post('/users/login', loginForm)
    await sweetalert.fire({
      icon: 'success',
      title: '成功',
      text: '登入成功'
    })
    user.login({
      // 對照後端
      // data 放在 result 裡面所以要寫成 data.result.xx
      token: data.result.token,
      email: data.result.email,
      cart: data.result.cart,
      role: data.result.role
    })
    router.push('/')
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}
</script>
