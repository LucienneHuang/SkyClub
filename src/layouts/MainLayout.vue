<template>
  <q-layout @scroll="navbaranimation" view="hhh Lpr fff">
    <q-header class="text-white " height-hint="98">
      <!-- 上層的 bar -->
      <q-toolbar id="navbar" class="row q-py-md">
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
            <img :src="user.avatar">
          </q-avatar>
          <q-menu square class="bg-primary text-center">
            <q-list dense>
              <q-item clickable>
                <q-item-section >{{ user.nickname }}</q-item-section>
              </q-item>
              <q-separator inset />
              <template v-for="menuItem in menuList" :key="menuItem.to">
                <q-item v-if="menuItem.show" clickable :to="menuItem.to">
                  <q-item-section>{{ menuItem.label }}</q-item-section>
                </q-item>
              </template>
              <q-item clickable v-if="isLogin" @click="logout">
                <q-item-section >登出</q-item-section>
              </q-item>
              <q-separator inset />
              <q-item clickable href="#">
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
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered behavior="mobile" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-white'">
      <!-- 之後藥補的側邊攔內容 -->
      <q-scroll-area class="fit">
          <q-list>
            <template v-for="(navItem, index) in navList" :key="navItem.to">
              <q-item  clickable :active="navItem.label === 'Outbox'" v-ripple :to="navItem.to">
                <q-item-section avatar>
                  <q-icon :name="navItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ navItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="navItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
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
// navbar 改背景顏色的 class
.solid-nav {
    background-color: $accent;
    transition: background-color 0.2s linear;
  }
.q-header{
  width: 100%;
  height: 20rem;
  background-image: url('../assets/front.png');
  background-repeat: no-repeat;
  background-size:  cover;
  z-index: 1;
  .q-toolbar{
    position: fixed;
    z-index: 2147483647;
  }
  .q-tab{
  display: none;
  }
  .deco{
    width: 100%;
    height: 8rem;
    position: relative;
    top: 12rem;
    background: url('../assets/deco_white.png') repeat-x center/cover;
    &::before{
      content: "";
      width: 100%;
      height: 8rem;
      display: block;
      position: relative;
      top: -.5rem;
      background: url('../assets/deco_white.png') repeat-x center/cover;
      opacity: 0.5;
    }
  }
}
:deep(.q-tab__label){
  font-size: 1.2rem;
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

<script setup>
import { computed, ref } from 'vue'
import { useUserStore } from 'src/stores/user'
import { storeToRefs } from 'pinia'
import { apiAuth } from 'src/boot/axios'
import sweetalert from 'sweetalert2'
import { useQuasar } from 'quasar'
// import $ from 'jquery'

const $q = useQuasar()

const user = useUserStore()
// btw 下面這樣寫會失去響應性
// const { isLogin } = user
// 所以要寫成這樣才能恢復響應性，沒有解構出來則不會有這個問題
const { isLogin, isAdmin } = storeToRefs(user)

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
// navbar 的字 & 路徑 & icon
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
// 最右邊頭貼 menu 的文字 & 路徑 & 是否顯示
const menuList = computed(() => {
  return [
    {
      to: '/admin',
      label: '管理後台',
      show: isLogin.value && isAdmin.value
    },
    {
      to: '/member',
      label: '會員後台',
      show: isLogin.value && !isAdmin.value
    },
    {
      to: '/register',
      label: '註冊',
      show: !isLogin.value
    },
    {
      to: '/login',
      label: '登入',
      show: !isLogin.value
    }, {
      to: '/cart',
      label: '購物車',
      show: isLogin.value && !isAdmin.value
    }
  ]
})

// 登出設定
const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    // 把 user pinia 的資料清除
    user.logout()
    await sweetalert.fire({
      icon: 'success',
      title: '成功',
      text: '登出成功'
    })
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: '登出失敗'
    })
  }
}

const navbaranimation = () => {
  const navbar = document.querySelector('#navbar')
  console.log(window.scrollY)
  if (window.scrollY > 40) {
    navbar.classList.add('solid-nav')
  } else {
    navbar.classList.remove('solid-nav')
  }
}
</script>
