<template>
  <div id="container" class="q-ma-md">
    <div id="head" class="q-my-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="區域介紹" />
      </q-breadcrumbs>
      <div id="title" class="text-weight-bold non-selectable q-mt-md q-pl-md">區域介紹</div>
    </div>
    <div id="section" class="flex justify-center">
      <div v-for="realm in realms" :key="realm._id" class="q-mx-xl">
        <RealmCard v-bind="realm" data-aos="flip-left"  data-aos-duration="800" data-aos-easing="ease-in-out-back"></RealmCard>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import RealmCard from 'src/components/RealmCard.vue'
const $q = useQuasar()
const realms = ref([]);
(async () => {
  try {
    const { data } = await api.get('/articles/getRealms')
    realms.value.push(...data.result)
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: '發生錯誤'
    })
  }
})()

</script>

<style lang="scss" scoped>
#container{
  #section{
    margin: 6rem 2rem;
  }
}
@media(min-width:768px){
  #container{
    #section{
      margin: 6rem 0rem;
    }
}}

@media(min-width:1200px){
  #container{
    #section{
      margin: 6rem 3rem;
    }
  }

}
@media(min-width:1570px){
  #container{
    #section{
      margin: 6rem 14.5rem;
    }
  }

}
</style>
