<template>
  <div id="title" class="q-ml-xl q-my-lg q-pl-lg q-py-sm text-h3 text-weight-bold non-selectable">個人檔案</div>
  <div id="container" class="flex justify-center">
    <q-card class="q-ma-md">
      <q-card-section id="top" align="right" class="bg-primary text-white">
        <!-- 編輯按鈕 -->
        <q-btn round flat text-color="white" color="transparent" icon="edit" size="lg" />
      </q-card-section>
      <!-- 大頭貼 -->
      <q-card-section align="center" class="q-mt-xl">
        <q-avatar size="13rem" class="q-mb-lg shadow-9">
            <img :src="user.avatar">
        </q-avatar>
      </q-card-section>
      <!-- 身分/稱呼/信箱 -->
      <q-card-section align="center">
        <div class="text-h2 text-weight-bold q-mb-md">管理員</div>
        <div class="text-h3 text-weight-bold q-mb-md">{{ user.nickname }}</div>
        <div class="text-h5">{{ user.email }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>
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
    width: 55rem;
    height: 40rem;
    #top{
      height: 5rem;
    }
  }
}
</style>
<script setup>
import { useUserStore } from 'src/stores/user.js'
const user = useUserStore()
</script>
