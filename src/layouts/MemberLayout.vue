<template>
  <q-layout view="lHh lpR lff">
    <q-header  class="text-white" height-hint="98">
      <q-toolbar>
        <q-btn  class="menuBtn" dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>管理員後台</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer :breakpoint="991" width="300" class="bg-secondary" show-if-above v-model="leftDrawerOpen" side="left">
      <!-- 頭貼名字區 -->
      <div class="absolute-top flex column items-center q-my-xl">
        <q-avatar size="8rem" class="q-mb-lg shadow-9">
          <img :src="user.avatar">
        </q-avatar>
        <div class="text-weight-bold text-h4 text-white name"><a href="#/member">{{ user.nickname }}</a></div>
        <q-separator inset />
      </div>

      <q-scroll-area style="height: calc(100% - 17rem); margin-top:  17rem;">
          <q-list padding>
            <q-item>
              <q-item-section>
                <q-separator inset />
              </q-item-section>
            </q-item>
            <q-item v-for="navItem in navList" :key="navItem.to" :to="navItem.to" class="non-selectable" clickable v-ripple>
              <q-item-section >
                {{ navItem.name }}
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
<script setup>
import { ref } from 'vue'
import { useUserStore } from 'src/stores/user.js'

const user = useUserStore()

const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const navList = [
  {
    to: '/member/products',
    name: '個人商品管理'
  },
  {
    to: '/member/sales',
    name: '出售訂單管理'
  },
  {
    to: '/member/orders',
    name: '購買訂單查詢'
  }, {
    to: '/',
    name: '回首頁'
  }
]

</script>

<style lang="scss" scoped>
.name a{
  text-decoration: none;
  color: white;
}
.q-toolbar{
  background: $secondary;
}
.q-item__section:not(:first-child){
    font-weight: 700;
    font-size: 1.2rem;
    background: white;
    text-align: center;
    border-radius:3rem;
    height: 2.8rem;
}
.q-item.q-router-link--active, .q-item--active{
  color: $secondary;
}

@media(min-width:975px){
  .menuBtn{
    display: none;
  }
  // 把 toolbar 弄透明
  .q-layout__section--marginal,.q-toolbar{
    background: transparent;
    .q-toolbar__title{
      display: none;
    }
  }

}
</style>
