<template>
  <div class="container">
    <div class="bg_effect">
      <div id="shine"></div>
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
              <q-item-section >遊客</q-item-section>
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
      <!-- 註冊表單 -->
      <div class="row flex-center register">
        <q-form @submit.prevent="register">
          <q-card>
            <q-card-section horizontal>
              <!-- 左放圖片 -->
              <q-card-section class="left"></q-card-section>
              <!-- 右放表單 -->
              <q-card-section class="right flex column justify-center">
                <q-card-section>
                  <div class="title text-center text-h4 q-py-md non-selectable">註冊會員</div>
                  <!-- 信箱 -->
                  <q-input v-model="registerForm.email" :rules="[rules.required,rules.email]" dark class="q-mb-xs" type="email" label="Email" hint="請輸入信箱" hide-hint filled dense clearable hide-bottom-space clear-icon="backspace">
                    <template #prepend>
                      <q-icon name="mail"></q-icon>
                    </template>
                  </q-input>
                </q-card-section>
                <q-card-section>
                  <!-- 密碼 -->
                  <q-input v-model="registerForm.password" :rules="[rules.required,rules.min,rules.max,rules.confirm]" dark class="q-mb-xs" ref="elPassword" type="password" label="Password" hint="請輸入密碼" hide-hint filled dense hide-bottom-space maxlength="20">
                    <template #prepend>
                      <q-icon name="vpn_key"></q-icon>
                    </template>
                  </q-input>
                </q-card-section>
                <q-card-section>
                  <!-- 確認密碼 -->
                  <q-input v-model="registerForm.confirmPassword" :rules="[rules.required,rules.min,rules.max,rules.confirm]" ref="elPasswordConfirm" dark class="q-mb-xs" type="password" label="Confirm Password" hint="確認密碼" hide-hint filled dense hide-bottom-space maxlength="20">
                    <template #prepend>
                      <q-icon name="vpn_key"></q-icon>
                    </template>
                  </q-input>
                </q-card-section>
                <q-card-actions class="q-mt-md q-px-lg" vertical>
                  <q-btn label="register" type="submit" color="secondary" text-color="dark" class="text-weight-bold"></q-btn>
                  <q-card-actions align="center">
                    <!-- <q-btn label="快速註冊" text-color="white" flat></q-btn> -->
                    <q-btn label="登入會員" text-color="white" to="/login" flat></q-btn>
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
<script setup>
import { reactive, ref, watch } from 'vue'
import validator from 'validator'
import { api } from '../../boot/axios.js'
import { useRouter } from 'vue-router'
import sweetalert from 'sweetalert2'
import { useQuasar, QSpinnerHearts } from 'quasar'
import { useUserStore } from 'src/stores/user.js'
import 'animate.css'

const user = useUserStore()

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

const register = async () => {
  try {
    $q.loading.show({
      spinner: QSpinnerHearts,
      spinnerSize: 140,
      message: '<h6>註冊中，請耐心等候...</h6>',
      html: true
    })
    await api.post('/users', registerForm)
    $q.loading.hide()
    await sweetalert.fire({
      icon: 'success',
      title: '註冊成功',
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
    // 註冊完送到 login 頁面
    router.push('/login')
  } catch (error) {
    console.log(error)
    $q.loading.hide()
    $q.notify({
      type: 'negative',
      message: error.response.data.message
    })
  }
}
const navList = [
  {
    to: '/latestnews',
    label: '最新消息',
    icon: 'announcement'
  },
  {
    to: '/realms',
    label: '區域介紹',
    icon: 'location_on'
  },
  {
    to: '/trade',
    label: '交易專區',
    icon: 'local_mall'
  },
  {
    to: '/contact',
    label: '聯絡我們',
    icon: 'call'
  }
]
</script>

<style lang="scss" scoped>
.container{
  width: 100vw;
  height: 100vh;
  background: url('../../assets/register_bg.jpg') no-repeat center/cover;

  .bg_effect{
    width: 100%;
    height: 100%;
    background-color:transparent;
    backdrop-filter: blur(8px);
      #shine{
      position: absolute;
      width: 100%;
      height: 100%;
      background: url('/src/assets/shine.gif');
      background-size: cover;
      filter: opacity(0.1);
    }
  }
  .row{
    width:100%;
    /* 即為 100vh - toolbar預設的高度 50px */
    height: calc(100% - 50px);
    .q-card{
      width: 20rem;
      background:url('../../assets/register_bg.jpg') no-repeat center/cover;;
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
