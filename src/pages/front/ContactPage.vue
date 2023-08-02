<template>
  <div id="container" class="q-ma-xl q-pa-xl">
    <div id="head" class="q-ml-xl">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="聯絡" class="" />
      </q-breadcrumbs>
    <div id="title" class=" text-h3 text-weight-bold non-selectable  q-pl-lg q-py-sm q-my-lg">聯絡</div>
    </div>
    <div id="section" class="flex justify-center q-ma-xl">
      <div id="background" class="q-ma-xl">
        <q-form @submit.prevent="sendContact" class="q-ma-xl">
          <q-card class="bg-accent flex column justify-center items-center q-ma-xl">
            <q-card-section class="q-mb-sm" horizontal>
              <div class="text-h5 text-weight-bold text-white q-mr-md" >名稱</div>
              <q-input type="text" v-model="contactForm.name" :rules="[rules.required]" dense rounded outlined bg-color="white" label="稱呼" hint="請輸入名稱" hide-hint clearable style="width: 30rem;" />
            </q-card-section >
            <q-card-section class="q-mb-sm" horizontal>
              <div class="text-h5 text-weight-bold text-white q-mr-md">信箱</div>
              <q-input type="email" v-model="contactForm.email" :rules="[rules.required,rules.email]" rounded outlined bg-color="white" label="信箱" hint="請輸入信箱" dense hide-hint clearable style="width: 30rem;" />
            </q-card-section>
            <q-card-section class="q-mb-sm" horizontal>
              <div class="text-h5 text-weight-bold text-white q-mr-md">內容</div>
              <q-input type="textarea" v-model="contactForm.message" :rules="[rules.required]" rounded outlined bg-color="white" label="內容" hint="請輸入內容" dense hide-hint clearable style="width: 30rem;" />
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
    width: 48rem;
    height: 33rem;
    background: $primary;
    border-radius: 2rem;
  }
  #title{
    border-left: .8rem solid $accent;
  }
  .q-card{
    width: 48rem;
    height: 33rem;
    border-radius: 2rem;
  }

}

</style>
<script setup>
import { reactive } from 'vue'
import validator from 'validator'
import { api } from 'src/boot/axios.js'
// import { useRouter } from 'vue-router'
import sweetalert from 'sweetalert2'
import { useQuasar } from 'quasar'
const $q = useQuasar()
// const router = useRouter()
const contactForm = reactive({
  name: '',
  email: '',
  message: ''
})
const rules = {
  required: (value) => !!value || '欄位必填',
  email: (value) => validator.isEmail(value) || '信箱格式錯誤'
}

const sendContact = async () => {
  try {
    await api.post('/contactUs', contactForm)
    await sweetalert.fire({
      icon: 'success',
      title: '成功送出',
      text: '靜待我們的回覆'
    })
  } catch (error) {
    console.log(error)
    $q.notify({
      type: 'negative',
      message: '發生錯誤'
    })
  }
}
</script>
