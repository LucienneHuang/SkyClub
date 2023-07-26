<template>
  <div class="container">
    <div class="row justify-center items-center">
      <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section>

        </q-card-section>
        <q-card-section>

        </q-card-section>
      </q-card-section>
    </q-card>
      </div>
    </div>
</template>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  .left{
    display: none;
  }
  .right{
    width: 80%;
  }
}

@media(min-width:768px){
  .left{
    display: block;
  }
}

  @media(min-width:1200px){
}
</style>
