<template>
    <q-page-container>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn flat>
              <q-avatar square  size="70px">
                <img src="https://stickershop.line-scdn.net/stickershop/v1/sticker/297078240/android/sticker.png?v=1">
              </q-avatar>
            </q-btn>
      </q-page-scroller>
      <router-view />
    </q-page-container>
</template>
