<template>
  <q-layout view="hhh Lpr fff">
    <q-header class="text-white " height-hint="98">
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
        <div>
          <q-btn-dropdown color="primary" label="設定">
            <q-list>
              <q-item clickable v-close-popup >
                <q-item-section>
                  <q-item-label>遊客</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator inset />
              <q-item clickable v-close-popup to="/register">
                <q-item-section>
                  <q-item-label>註冊</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/login">
                <q-item-section>
                  <q-item-label>登入</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="/member">
                <q-item-section>
                  <q-item-label>會員後台</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="admin">
                <q-item-section>
                  <q-item-label>管理後台</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator inset />
              <q-item clickable v-close-popup to="/">
                <q-item-section>
                  <q-item-label>回首頁</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
      <div class="deco"></div>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered behavior="mobile">
      <!-- drawer content -->
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

<style lang="scss" scoped>

.q-header{
  width: 100%;
  height: 300px;
  background-image: url('../assets/front.png');
  background-repeat: no-repeat;
  background-size:  cover;
  .q-tab__label{
    font-size: 18px;
  }
  .q-tab{
  display: none;
  }
  .deco{
    width: 100%;
    height: 90px;
    position: relative;
    top: 145px;
    background: url('../assets/deco.png') repeat-x center/cover;
    &::before{
      content: "";
      width: 100%;
      height: 90px;
      display: block;
      position: relative;
      top: -8px;
      background: url('../assets/deco.png') repeat-x center/cover;
      opacity: 0.5;
    }
  }
}
@media(min-width:768px){
.q-header{
  height: 500px;
  .menuBtn{
    display: none;
  }
  .q-tab{
    display: block;
  }
  .deco{
    height: 150px;
    top: 270px;
    &::before{
      height: 150px;
      top: -10px;
    }
  }
}
}

  @media(min-width:1200px){
.q-header{
  height: 800px;
  .deco{
    height: 250px;
    top: 480px;
    &::before{
      height: 250px;
      top: -10px;
    }
  }

}
}
</style>
