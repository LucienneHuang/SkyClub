<template>
  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered behavior="mobile" :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-white'">
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
</template>
<script setup>
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
</script>
