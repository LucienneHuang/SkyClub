<template>
  <div id="title" class="q-ml-xl q-my-lg q-pl-lg q-py-sm text-h4 text-weight-bold non-selectable">個人商品管理
    <q-btn class="q-mb-sm" round color="secondary" icon="mdi-plus-thick" to="/member/addproduct" />
  </div>
  <div id="container" class="flex justify-center">
  </div>
</template>
<style lang="scss" scoped>
#title{
  border-left: .8rem solid $secondary;
  }
#container{
  width: 100%;
  // height: calc(100vh - 164px);
}

@media(min-width:992px){
  #title{
  font-size: 3rem;
  }
}
</style>
<script setup>

</script>
