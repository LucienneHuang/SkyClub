<template>
  <div id="container" class="q-ma-md">
    <div id="head" class="q-my-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="聯絡" />
      </q-breadcrumbs>
      <div id="title" class="text-weight-bold non-selectable q-mt-md q-pl-md">聯絡我們</div>
    </div>
    <div id="section" class="flex justify-center q-ma-xl">
      <div id="background" class="q-ma-xl">
        <div id="backgroundtext" class="text-white text-h4 text-weight-bold">Contact Us</div>
        <q-form @submit.prevent="sendContact" class="q-ma-xl">
          <q-card class="bg-accent flex column justify-center items-center q-ma-xl">
            <q-card-section class="q-mb-sm" horizontal>
              <div class="text-h5 text-weight-bold text-white q-mr-md" >名稱</div>
              <q-input type="text" v-model="contactForm.name" :rules="[rules.required]" dense rounded outlined bg-color="white" label="稱呼" hint="請輸入名稱" hide-hint clearable />
            </q-card-section >
            <q-card-section class="q-mb-sm" horizontal>
              <div class="text-h5 text-weight-bold text-white q-mr-md">信箱</div>
              <q-input type="email" v-model="contactForm.email" :rules="[rules.required,rules.email]" rounded outlined bg-color="white" label="信箱" hint="請輸入信箱" dense hide-hint clearable />
            </q-card-section>
            <q-card-section class="q-mb-sm" horizontal>
              <div class="text-h5 text-weight-bold text-white q-mr-md">內容</div>
              <q-input type="textarea" v-model="contactForm.message" :rules="[rules.required]" rounded outlined bg-color="white" label="內容" hint="請輸入內容" dense hide-hint clearable />
            </q-card-section>
            <q-card-actions class="q-mt-sm">
              <q-btn type="submit" unelevated rounded style="width: 6rem;" size="1rem" color="primary" label="送出" />
            </q-card-actions>
          </q-card>
        </q-form>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#container{
  #background{
    background: $primary;
    border-radius: 2rem;
    #backgroundtext{
      position: relative;
      top: 3rem;
      left: 7rem;
    }
  }
  .q-card{
    padding: 1rem;
    width: 22rem;
    border-radius: 2rem;
    :deep(.q-field__control){
      width: 12rem;
    }
  }

}
@media(min-width:975px){
  #container{
    #background{
      width: 48rem;
      height: 33rem;
    }
    #section{
      margin: 6rem 6rem 12rem;
    }
    .q-card{
      width: 48rem;
      height: 33rem;
      :deep(.q-field__control){
        width: 30rem;
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
import { api } from 'src/boot/axios.js'
import { useUserStore } from 'src/stores/user.js'
const user = useUserStore()
const $q = useQuasar()
const router = useRouter()
let nickname = ''
if (user.nickname !== '遊客') {
  nickname = user.nickname
} else {
  nickname = ''
}
const contactForm = reactive({
  name: nickname,
  email: user.email,
  message: '',
  date: ''
})
const rules = {
  required: (value) => !!value || '欄位必填',
  email: (value) => validator.isEmail(value) || '信箱格式錯誤'
}

const sendContact = async () => {
  const trueDate = new Date().toJSON().slice(0, 10)
  contactForm.date = trueDate
  try {
    await api.post('/contactUs', contactForm)
    await sweetalert.fire({
      icon: 'success',
      title: '成功送出',
      text: '靜待我們的回覆'
    })
    router.push('/')
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: '發生錯誤'
    })
  }
}
</script>
