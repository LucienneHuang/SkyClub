<template>
  <div class="container">
    <div class="bg_effect">
      <div id="star"></div>
      <!-- 上層的隱形 toolbar -->
      <q-toolbar class="text-white q-px-lg q-pt-md" style="height: 50px;">
      <!-- 最右側的 btn -->
      <q-btn class="q-ml-auto" flat round dense>
        <!-- 設定該 btn 的圖 -->
        <q-avatar>
          <!-- 之後再改，先暫訂一張圖 -->
          <img :src="user.avatar">
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
      <!-- 登入表單 -->
      <div class="row flex-center login">
        <q-form @submit.prevent="login">
          <q-card>
            <q-card-section horizontal>
              <!-- 左放圖片 -->
              <q-card-section class="left"></q-card-section>
              <!-- 右放表單 -->
              <q-card-section class="right flex column justify-center">
                <q-card-section>
                  <div class="title text-center text-h4 q-py-md non-selectable">登入會員</div>
                  <!-- 信箱 -->
                  <q-input v-model="loginForm.email" :rules="[rules.required,rules.email]" dark class="q-mb-xs" type="email" label="Email" hint="請輸入信箱" hide-hint filled dense clearable hide-bottom-space clear-icon="backspace">
                    <template #prepend>
                      <q-icon name="mail"></q-icon>
                    </template>
                  </q-input>
                </q-card-section>
                <q-card-section>
                  <!-- 密碼 -->
                  <q-input v-model="loginForm.password" :rules="[rules.required,rules.min,rules.max]" dark class="q-mb-xs" type="password" label="Password" hint="請輸入密碼" hide-hint filled dense hide-bottom-space maxlength="20">
                    <template #prepend>
                      <q-icon name="vpn_key"></q-icon>
                    </template>
                  </q-input>
                </q-card-section>
                <q-card-actions class="q-mt-md q-px-lg" vertical>
                  <q-btn label="LOGIN" type="submit" color="secondary" text-color="dark" class="text-weight-bold"></q-btn>
                  <q-card-actions align="center">
                    <q-btn label="快速登入" text-color="white" flat></q-btn>
                    <q-btn label="註冊會員" text-color="white" to="/register" flat></q-btn>
                  </q-card-actions>
                </q-card-actions>
              </q-card-section>
            </q-card-section>
          </q-card>
        </q-form>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

.container{
  width: 100vw;
  height: 100vh;
  background: url('../../assets/login_bg.jpg') no-repeat center/cover;

  .bg_effect{
    width: 100%;
    height: 100%;
    background-color:transparent;
    backdrop-filter: blur(8px);
    #star{
      position: absolute;
      width: 100%;
      height: 100%;
      background: url('/src/assets/star2.gif');
      filter: opacity(0.2);
    }
  }
  .row{
    width:100%;
    /* 即為 100vh - toolbar預設的高度 50px */
    height: calc(100% - 50px);
    .q-card{
      width: 20rem;
      background:url('../../assets/login_bg.jpg') no-repeat center/cover;
      .left{
        display: none;
      }
      .right{
          padding: 0 3rem;
          background-color: rgba(0,0,0,0.1);
          backdrop-filter: blur(5px);
      }
      .title{
        font-weight: 600;
        color: white;
        text-shadow: black 0 0 0.2em;
      }
    }
  }
}
@media(min-width: 975px){
  .container{
    .row{
      .q-card{
        width: 60rem;
        height: 40rem;
        .left{
          display: flex;
          width: 50%;
        }
        .right{
          width: 50%;
          height: 40rem;
        }
      }
    }
  }
}
@media(min-width: 1200px){
    .container{
      .row{
        .q-card{
          width: 70rem;
          height: 36rem;
          .right{
            padding: 0 5rem;
            height: 36rem;
          }
        }
      }
    }
}
</style>
<script setup>
import { reactive } from 'vue'
import validator from 'validator'
import { useRouter } from 'vue-router'
import sweetalert from 'sweetalert2'
import { useQuasar } from 'quasar'
import { useUserStore } from 'src/stores/user.js'
import { api } from 'src/boot/axios.js'

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
      title: '登入成功',
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
    user.login({
      // 對照後端
      // data 放在 result 裡面所以要寫成 data.result.xx
      user: data.result.user,
      token: data.result.token,
      email: data.result.email,
      nickname: data.result.nickname,
      avatar: data.result.avatar,
      cart: data.result.cart,
      role: data.result.role,
      block: data.result.block
    })
    if (user.isBlock) {
      await sweetalert.fire({
        icon: 'warning',
        title: '帳號停權中',
        text: '暫時關閉交易功能，已完成的訂單不受影響。',
        iconColor: '#ff0000',
        confirmButtonColor: '#ff0000',
        width: '30rem'
      })
    }
    router.push('/')
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
