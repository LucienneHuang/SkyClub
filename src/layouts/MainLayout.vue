<template>
  <q-layout @scroll="navbaranimation" view="hhh Lpr fff">
    <q-header class="text-white " height-hint="98">
      <!-- 上層的 bar -->
      <q-toolbar id="navbar" class="row q-py-md">
        <q-btn class="menuBtn" dense flat round icon="menu" @click="toggleLeftDrawer" />
          <!-- 左側 logo -->
        <a href="#" class="logo flex items-center">
          <q-avatar size="4rem">
            <img src="../assets/logo.png">
          </q-avatar>
          <q-toolbar-title class="col-md-2 text-weight-bold text-h4">光遇 Club</q-toolbar-title>
        </a>
        <!-- 中間索引列 -->
        <q-tabs align="center" active-color="primary" class="col-md-8 q-mt-md">
          <q-route-tab to="/" label="首頁" />
          <q-route-tab to="/latestnews" label="最新消息" />
          <q-route-tab to="/realms" label="區域介紹" />
          <q-route-tab to="/trade" label="交易專區" />
          <q-route-tab to="/contact" label="聯絡我們" />
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
      <!-- swiper? -->
      <swiper
        :modules="modules"
        :loop="true"
        :autoplay="{
          delay: 6000,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide v-for="img in carouselImages" :key="img.name">
          <div class="carousel">
            <div class="text non-selectable">{{ img.text }}</div>
            <q-img :src="img.src"/>
          </div>
        </swiper-slide>
      </swiper>
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
    <ScrollToTop/>
    <MainFooter/>
  </q-layout>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'
import sweetalert from 'sweetalert2'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { apiAuth } from 'src/boot/axios'
import ScrollToTop from 'src/components/ScrollToTop.vue'
import MainFooter from 'src/components/MainFooter.vue'
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
// 輪播圖 - module
const modules = [Autoplay]
// 輪播圖 - 圖片
const carouselImages = [
  {
    name: 'img1',
    src: new URL('../assets/carousel1.JPG', import.meta.url).href,
    text: '懷著溫暖的心一同冒險吧。'
  },
  {
    name: 'img2',
    src: new URL('../assets/carousel2.JPG', import.meta.url).href,
    text: '在光遇，遇見你真好。'
  },
  {
    name: 'img3',
    src: new URL('../assets/carousel3.JPG', import.meta.url).href,
    text: 'PC 版即將上市。'
  },
  {
    name: 'img4',
    src: new URL('../assets/carousel4.JPG', import.meta.url).href,
    text: '讓 AURORA 帶領你踏上音樂之旅。'
  }
]
// 登出設定
const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    // 把 user pinia 的資料清除
    user.logout()
    await sweetalert.fire({
      icon: 'success',
      title: '登出成功',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      iconColor: '#B0A9EC',
      confirmButtonColor: '#B0A9EC',
      width: '20rem'
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
  if (window.scrollY > 50) {
    navbar.classList.add('solid-nav')
  } else {
    navbar.classList.remove('solid-nav')
  }
}
</script>

<style lang="scss" scoped>
// navbar 改背景顏色的 class
.solid-nav {
    background-color: #5c51b3;
    transition: background-color 0.5s linear;
  }
.q-item.q-router-link--active, .q-item--active{
  color: #000;
}
.q-header{
  width: 100%;
  height: 20rem;
  z-index: 2;
  .q-toolbar{
    position: fixed;
    z-index: 2147483647;
    .logo{
      text-decoration: none;
      color: white;
    }
  }
  .carousel{
    position: relative;
    .text{
      position: absolute;
      z-index: 1;
      font-size: 1rem;
      font-weight: bolder;
      top: 40%;
      padding: .5rem 1.2rem;
      background: linear-gradient(90deg,rgba(0,0,0,0.7),rgba(0,0,0,0.3),transparent);
    }
  }
  .q-img{
    height: 20rem;
  }
  .q-tab{
  display: none;
  }
  .deco{
    width: 100%;
    height: 8rem;
    position: relative;
    top: -8rem;
    background: url('../assets/deco_white.png') repeat-x center/cover;
    z-index: 1;
    &::before{
      content: "";
      width: 100%;
      height: 8rem;
      display: block;
      position: relative;
      top: -.75rem;
      background: url('../assets/deco_white.png') repeat-x center/cover;
      opacity: 0.5;
    }
  }
}
.footer{
  font-size: 1rem;
  font-weight: 500;
}
@media(min-width:768px){
.q-header{
  height: 60rem;
  .q-img{
      height: 60rem;
  }
  .carousel{
    .text{
      font-size: 3rem;
      font-weight: bolder;
      top: 65%;
      padding: .5rem 5rem;
    }
  }
  .menuBtn{
    display: none;
  }
  .q-tab{
    display: block;
  }
  .deco{
    height: 10rem;
    top: -9.5rem;
    &::before{
      height: 10rem;
    }
  }
}
}

@media(min-width:1200px){
  .q-header{
    height: 60rem;
    .q-img{
      height: 60rem;
    }
    .carousel{
    .text{
      font-size: 3.5rem;
      font-weight: bolder;
      top: 55%;
    }
  }
    .deco{
      height: 18rem;
      top: -18rem;
      &::before{
        height: 18rem;
      }
    }

}
}
</style>
