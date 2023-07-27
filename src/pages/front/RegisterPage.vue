<template>
  <div class="container">
    <q-toolbar class="text-white q-px-lg" style="height: 50px;">
      <q-btn class="q-ml-auto" flat round dense>
        <q-avatar>
          <img src="https://source.boringavatars.com/beam/250/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51">
        </q-avatar>
        <q-menu square class="bg-primary text-center">
          <q-list dense>
            <q-item clickable>
              <q-item-section >USER</q-item-section>
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
        <div class="q-card-section q-px-lg">
          <div class="title text-center text-h4 q-py-md">註冊會員</div>
          <q-input class="q-mb-xs" v-model="emailText" label="Email" hint="請輸入信箱" hide-hint filled dense clearable hide-bottom-space clear-icon="backspace">
            <template #prepend>
              <q-icon name="mail"></q-icon>
            </template>
          </q-input>
          <q-input class="q-mb-xs" type="password" label="Password" hint="請輸入密碼" hide-hint filled dense hide-bottom-space>
            <template #prepend>
              <q-icon name="vpn_key"></q-icon>
            </template>
          </q-input>
          <q-input class="q-mb-xs" type="password" label="Confirm Password" hint="確認信箱" hide-hint filled dense hide-bottom-space>
            <template #prepend>
              <q-icon name="vpn_key"></q-icon>
            </template>
          </q-input>
        </div>
        <q-card-actions class="q-mt-md q-px-lg" vertical>
          <q-btn flat label="register" class="rg-btn" color="white" style="background: #A6D8D4;font-family: 'Playfair Display', serif;"></q-btn>
          <q-card-actions align="center">
            <q-btn label="快速註冊" flat></q-btn>
            <q-btn label="登入會員" to="/login" flat></q-btn>
          </q-card-actions>
        </q-card-actions>
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
    height: 100%;
  }
  .rg{
    width: 20rem;
    height: 20rem;
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

@media(min-width:768px){

}

  @media(min-width:1200px){
}
</style>
<script setup>
import { ref } from 'vue'
const emailText = ref('')
</script>
