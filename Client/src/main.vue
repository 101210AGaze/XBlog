<script setup>
import NavLeft from "@/component/navLeft.vue";
import MainRight from "@/component/mainRight.vue";
</script>

<template>



  <div class="x-blog">
    <nav-left></nav-left>
    <main-right></main-right>
  </div>
</template>

<style scoped>

.x-blog {
  background-image: url("public/background.jpg");
  background-size: cover;
  box-sizing: border-box;
  display: grid;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: normal;
  grid-template-columns: 15% 25% 35% 25%;
  grid-template-rows: 100%;

  @media screen and (max-width: 1030px) {
    grid-template-columns: 20% 50% 30%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 25% 75%;
    width: 100%;
    max-width: none;
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: 100%;
  }

}

</style>

