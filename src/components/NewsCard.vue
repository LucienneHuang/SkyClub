<template>
  <q-card class="q-mx-xl q-my-lg">
    <q-card-section horizontal class="all flex">
        <q-img :src="image" class="ratio "/>
        <q-card-section class="ratio flex column justify-center items-center">
          <div class="q-my-sm text-h5 text-weight-bold">{{ title }}</div>
          <div class="q-my-sm text-h6">{{ date }}</div>
          <q-btn :to="{path:'/latestnews/'+ title, query : { articleId:_id} }" class="q-my-sm" color="accent" label="MORE" />
        </q-card-section>
    </q-card-section>
  </q-card>
</template>
<style scoped>
:deep(.q-card){
  border-top-right-radius: 1.6rem;
  border-top-left-radius: 1.6rem;
  border-bottom-right-radius: 1.6rem;
  border-bottom-left-radius: 1.6rem;
}
.q-card{
  filter: drop-shadow(0px 0px 3px rgba(131, 131, 131, 0.5));
  box-shadow: none;
  border-top-right-radius: 1.6rem;
  border-top-left-radius: 1.6rem;
  border-bottom-right-radius: 1.6rem;
  border-bottom-left-radius: 1.6rem;
  .all{
    width: 20rem;
    flex-direction: column;
    & :nth-child(1){
      border-top-right-radius: 1.6rem;
      border-top-left-radius: 1.6rem;
      border-bottom-left-radius: 0;
    }
    .ratio{
      width: 100%;
    }
    .q-card__section.ratio{
      border-bottom-right-radius: 1.6rem;
      border-bottom-left-radius: 1.6rem;
    }
  }
  :deep(img):hover{
    transform:scale(1.2,1.2);
    transition: 2s;
  }
}
@media(min-width:769px){
  .q-card{
    .all{
    width: 30rem;
    }
  }
}
@media(min-width:975px){
  .q-card{
    margin-left: auto;
    margin-right: auto;
    border-radius: 0;
    .all{
      width: 44rem;
      height: 14rem;
      flex-direction: row;
      .ratio{
        width: 50%;
      }
      & :first-child{
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
}

@media(min-width:1200px){
  .q-card{
    .all{
      width: 55rem;
      height: 20rem;
    }
  }
}

@media(min-width:1450px){
  .q-card{
    .all{
      width: 70rem;
      height: 20rem;
    }
  }
}
</style>
<script setup>
// 用 props 把資料丟進元件裡面
import { defineProps } from 'vue'
defineProps({
  _id: {
    type: String,
    default: () => ''
  },
  category: {
    type: String,
    default: () => ''
  },
  date: {
    type: String,
    default: () => ''
  },
  description: {
    type: String,
    default: () => ''
  },
  display: {
    type: Boolean,
    default: () => true
  },
  image: {
    type: String,
    default: () => ''
  },
  original: {
    type: String,
    default: () => ''
  },
  realms: {
    type: String,
    default: () => ''
  },
  title: {
    type: String,
    default: () => ''
  },
  translation: {
    type: String,
    default: () => ''
  }
})

</script>
