<template>
  <div id="container" class="q-ml-xl q-my-lg q-pl-lg q-py-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" to="/" />
      <q-breadcrumbs-el label="聯絡" class="" />
    </q-breadcrumbs>
    <div id="title" class=" text-h3 text-weight-bold non-selectable  q-pl-lg q-py-sm q-my-lg">聯絡</div>
    <div id="section">
      <q-card class="bg-accent">
        <q-card-section horizontal>
          <div class="text-h5 text-weight-bold text-white">稱呼</div>
          <div class="text-h5 text-weight-bold text-white">文字</div>
        </q-card-section >
        <q-card-section horizontal>
          <div class="text-h5 text-weight-bold text-white">稱呼</div>
          <div class="text-h5 text-weight-bold text-white">文字</div>
        </q-card-section>
        <q-card-section horizontal>
          <div class="text-h5 text-weight-bold text-white">稱呼</div>
          <div class="text-h5 text-weight-bold text-white">文字</div>
        </q-card-section>
        <q-card-actions>
          <q-btn flat round icon="event" />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#container{
  #title{
    border-left: .8rem solid $accent;
  }
}
</style>
