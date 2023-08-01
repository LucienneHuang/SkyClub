<template>
  <q-layout view="lHh lpR lff">

    <q-header  class="text-white" height-hint="98">
      <q-toolbar>
        <q-btn  class="menuBtn" dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>管理員後台</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer class="bg-primary" show-if-above v-model="leftDrawerOpen" side="left">
      <!-- 頭貼名字區 -->
      <div class="absolute-top flex column items-center q-my-xl">
        <q-avatar size="8rem" class="q-mb-lg">
          <img :src="user.avatar">
        </q-avatar>
        <div class="text-weight-bold text-h4 text-white">{{ user.nickname }}</div>
        <q-separator inset />
      </div>

      <q-scroll-area style="height: calc(100% - 17rem); margin-top:  17rem;">
          <q-list padding>
            <q-item>
              <q-item-section>
                <q-separator inset />
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section >
                會員資料管理
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                最新消息管理
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                區域介紹管理
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                全部商品管理
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                全部訂單管理
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                聯絡內容查看
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                回首頁
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-separator inset />
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<style lang="scss" scoped>

@media(min-width:768px){
  .menuBtn{
    display: none;
  }
  .q-toolbar{
    background: white;
    .q-toolbar__title{
      display: none;
    }
  }
  .q-item__section:not(:first-child){
    font-weight: 700;
    font-size: 1.2rem;
    background: white;
    text-align: center;
    border-radius:3rem;
    height: 2.8rem;
  }
}
</style>
<script setup>
import { ref } from 'vue'
import { useUserStore } from 'src/stores/user.js'

const user = useUserStore()

const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
