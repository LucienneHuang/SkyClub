<template>
  <div id="title" class="q-ml-xl q-my-lg q-pl-lg q-py-sm text-h4 text-weight-bold non-selectable">個人商品管理
    <q-btn class="q-mb-sm" round color="secondary" icon="mdi-plus-thick" @click="openDialog" />
  </div>
  <div id="container" class="flex justify-center">
  </div>
  <q-dialog persistent v-model="dialog">
    <q-form>
      <q-card class="flex column justify-center items-center">
          <!-- 商品標題 -->
        <q-card-section horizontal>
          <div>標題</div>
          <q-input type="text"/>
        </q-card-section>
          <!-- 金額與數量 -->
        <q-card-section horizontal>
          <div>金額</div>
          <!-- 輸入金額 -->
          <q-input type="text"/>
          <!-- 選擇單位 -->
          <q-select v-model="model" :options="options" label="Standard" />
        </q-card-section >
        <q-card-section horizontal>
          <div>數量</div>
          <q-input type="text"/>
        </q-card-section>
        <q-card-section horizontal>
          <div>內文</div>
          <q-input type="textarea"/>
        </q-card-section>
        <q-card-section horizontal>
          <div>上架</div>
          <q-checkbox color="secondary"/>
        </q-card-section>
        <q-card-actions class="q-mt-sm">
          <q-btn type="submit" unelevated rounded style="width: 6rem;" size="1rem" color="secondary" label="送出" />
          <q-btn unelevated rounded style="width: 6rem;" size="1rem" outline color="secondary" label="取消" />
        </q-card-actions>
      </q-card>
    </q-form>
  </q-dialog>

</template>
<style lang="scss" scoped>
#title{
  border-left: .8rem solid $secondary;
  }
#container{
  width: 100%;
  // height: calc(100vh - 164px);
}
.q-card{
    width: 23rem;
  }
@media(min-width:992px){
  #title{
  font-size: 3rem;
  }
}
</style>
<script setup>
import { ref } from 'vue'

const dialog = ref(false)
const openDialog = () => {
  dialog.value = true
}
</script>
