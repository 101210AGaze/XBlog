<script setup>

</script>

<template>
  <div class="x-blog-nav">
    <a href="#" class="blog-menu"></a>
    <router-link to="/">
    <a href="#" class="blog-menu">Work</a>
    </router-link>
    <router-link to="/user">
    <a href="#" class="blog-menu">Write</a>
    </router-link>
    <a href="#" class="blog-menu">Blog</a>
    <router-link to="/login">
    <a href="#" class="blog-menu">Contact</a>
    </router-link>
    <a class="blog-menu subscribe">@XinLin</a>
  </div>
</template>

<style scoped>
.x-blog-nav {
  display: flex;
  flex-direction: column;
  padding: 1em;
  top: 2em;

  @media screen and (max-width: 1030px) {
    display: none;
  }

}

.x-blog-nav :not(:last-child) {
  color: white;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  border-right: 1px solid white;


  @media screen and (max-width: 1260px) {
    font-size: 1.6vw;
  }

  & + & {
    margin: 32px;
  }

}
.x-blog-nav>.subscribe {
  margin-top: auto;
  color: white;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1260px) {
    font-size: 1.4vw;
  }

}

</style>