<template>
  <q-layout view="hhh Lpr fff">
    <q-header class="text-white " height-hint="98">
      <!-- 上層的 bar -->
      <q-toolbar class="row q-mt-md">
        <q-btn class="menuBtn" dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="col-md-2">
          <!-- 左側 logo -->
          <a href="#">
            <q-avatar size="3rem">
              <img src="../assets/sky-logo-white.png">
            </q-avatar>
            <q-avatar size="4rem" class="overlapping" style="z-index: -1;right: 55px; " color="primary">
            </q-avatar>
          </a>
        </q-toolbar-title>
        <!-- 中間索引列 -->
        <q-tabs align="center" active-color="primary" class="col-md-8 q-mt-md">
          <q-route-tab to="/" label="首頁" />
          <q-route-tab to="/latestnews" label="最新消息" />
          <q-route-tab to="/realms" label="區域" />
          <q-route-tab to="/trade" label="交易" />
          <q-route-tab to="/contact" label="聯絡" />
        </q-tabs>
        <!-- 右側 -->
        <!-- 之後再刻 遊客/會員/管理員 -->
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
      <!-- 波浪背景 -->
      <div class="deco"></div>
    </q-header>
    <!-- 手機螢幕才會有的側邊欄 -->
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered behavior="mobile">
      <!-- 之後藥補的側邊攔內容 -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style lang="scss" scoped>

.q-header{
  width: 100vw;
  height: 20rem;
  background-image: url('../assets/front.png');
  background-repeat: no-repeat;
  background-size:  cover;
  .q-toolbar{
    position: fixed;
  }
  .q-tab__label{
    font-size: 18px;
  }
  .q-tab{
  display: none;
  }
  .deco{
    width: 100%;
    height: 8rem;
    position: relative;
    top: 12rem;
    background: url('../assets/deco.png') repeat-x center/cover;
    &::before{
      content: "";
      width: 100%;
      height: 8rem;
      display: block;
      position: relative;
      top: -.5rem;
      background: url('../assets/deco.png') repeat-x center/cover;
      opacity: 0.5;
    }
  }
}
@media(min-width:768px){
.q-header{
  height: 32rem;
  .menuBtn{
    display: none;
  }
  .q-tab{
    display: block;
  }
  .deco{
    height: 9rem;
    top: 23.5rem;
    &::before{
      height: 9rem;
    }
  }
}
}

@media(min-width:1200px){
  .q-header{
    height: 50rem;
    .deco{
    height: 16rem;
    top: 34.5rem;
    &::before{
      height: 16rem;
    }
  }

}
}
</style>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
