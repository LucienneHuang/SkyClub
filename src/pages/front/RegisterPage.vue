<template>
  <div class="container">
    <div class="row justify-center items-center" style="height: 100%;">
      <!-- <div class="glass flex col-12 justify-center" style="width: 80%;height: 60%;">
        <div class="text-h4 q-mt-sm">註冊會員</div>
        <q-input  label="Standard" />
      </div> -->
      <q-card class="login">

      </q-card>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url('../../assets/background_register.jpg') no-repeat center;
  background-size: cover;

  .login{
    width: 80%;
    height: 60%;
    background: transparent;
    backdrop-filter: blur(10px);
  }
  .text-h4{
    font-weight: 600;
    color: white;
  }
}

@media(min-width:768px){

}

  @media(min-width:1200px){
}
</style>

<script setup>

</script>
