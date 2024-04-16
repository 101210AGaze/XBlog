<script setup>
import {onMounted,ref} from "vue";

onMounted(() => {
  var test = document.getElementsByClassName("item").length;


  console.log("测试渲染后" + test);

  const slider = document.querySelector('.slider');

  function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0]);
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
  }

  document.addEventListener('click', activate, false);
});


</script>

<template>
  <main>
    <ul class='slider'>
      <!--      照片-->
      <li class='item' style="background-image: url('public/studyPagePhoto/photo6.jpg')">

        <!--        文本部分-->
        <div class='content'>
          <h2 class='title'>"Lossless Youths"</h2>
          <p class='description'> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
            praesentium nisi. Id laboriosam ipsam enim. </p>
          <button>Read More</button>
        </div>
      </li>
      <li class='item' style="background-image: url('public/studyPagePhoto/photo1.jpg')">
        <div class='content'>
          <h2 class='title'>"Estrange Bond"</h2>
          <p class='description'> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
            praesentium nisi. Id laboriosam ipsam enim. </p>
          <button>Read More</button>
        </div>
      </li>
      <li class='item' style="background-image: url('public/studyPagePhoto/photo2.jpg')">
        <div class='content'>
          <h2 class='title'>"The Gate Keeper"</h2>
          <p class='description'> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
            praesentium nisi. Id laboriosam ipsam enim. </p>
          <button>Read More</button>
        </div>
      </li>
      <li class='item' style="background-image: url('public/studyPagePhoto/photo3.jpg')">
        <div class='content'>
          <h2 class='title'>"Last Trace Of Us"</h2>
          <p class='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
            praesentium nisi. Id laboriosam ipsam enim.
          </p>
          <button>Read More</button>
        </div>
      </li>
      <li class='item'
          style="background-image: url('public/studyPagePhoto/photo4.jpg')">
        <div class='content'>
          <h2 class='title'>"Urban Decay"</h2>
          <p class='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
            praesentium nisi. Id laboriosam ipsam enim.
          </p>
          <button>Read More</button>
        </div>
      </li>
      <li class='item' style="background-image: url('public/studyPagePhoto/photo5.jpg')">
        <div class='content'>
          <h2 class='title'>"The Migration"</h2>
          <p class='description'> Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
            praesentium nisi. Id laboriosam ipsam enim. </p>
          <button>Read More</button>
        </div>
      </li>
    </ul>

    <!--    这里是按钮部分,需要添加事件，按理来说不应该有什么影响-->
    <nav class='nav'>
      <ion-icon class='btn prev' name="arrow-back-outline">Prev</ion-icon>
      <ion-icon class='btn next' name="arrow-forward-outline">Next</ion-icon>
     <router-link to="/">
       <ion-icon class='btn back' name="arrow-forward-outline">Back</ion-icon>
     </router-link>
    </nav>
  </main>
</template>

<style scoped>



main {
  width: 100%;
  height: 100%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  margin:auto;
}

.item {
  width: 200px;
  height: 300px;
  list-style-type: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 20px 30px rgba(73, 48, 48, 0.3) inset;
  transition: transform 0.1s, left 0.75s, top 0.75s, width 0.75s, height 0.75s;

  &:nth-child(1), &:nth-child(2) {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: none;
    border-radius: 0;
    box-shadow: none;
    opacity: 1;
  }

  &:nth-child(3) {
    left: 50%
  }

  &:nth-child(4) {
    left: calc(50% + 220px);
  }

  &:nth-child(5) {
    left: calc(50% + 440px);
  }

  &:nth-child(6) {
    left: calc(50% + 660px);
    overflow: hidden;
  }
}

.content {
  width: min(30vw, 400px);
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
  font: 400 0.85rem Helvetica, sans-serif;
  color: #f8f8f8;
  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
  opacity: 1;
  display: none;

  & .title {
    font-family: arial-black;
    text-transform: uppercase;
  }

  & .description {
    line-height: 1.7;
    margin: 1rem 0 1.5rem;
    font-size: 0.8rem;
  }

  & button {
    width: fit-content;
    background-color: rgba(0, 0, 0, 0.1);
    color: white;
    border: 2px solid white;
    border-radius: 0.25rem;
    padding: 0.75rem;
    cursor: pointer;
  }
}

.item:nth-of-type(2) .content {
  display: block;
  animation: show 0.75s ease-in-out 0.3 forwards;
}

@keyframes show {
  0% {
    filter: blur(0px);
    transform: translateY(calc(-50% + 75px));
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}

.nav {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  user-select: none;

  & .btn {
    background-color: rgba(255, 255, 255, 0.5);
    color: rgba(0, 0, 0, 0.7);
    border: 2px solid rgba(0, 0, 0, 0.6);
    margin: 0 0.25rem;
    padding: 0.75rem;
    border-radius: 25%;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
}

@media (width > 650px) and (width < 900px) {
  .content {
    & .title {
      font-size: 1rem;
    }

    & .description {
      font-size: 0.7rem;
    }

    & button {
      font-size: 0.7rem;
    }
  }

  .item {
    width: 160px;
    height: 270px;

    &:nth-child(3) {
      left: 50%;
    }

    &:nth-child(4) {
      left: calc(50% + 170px);
    }

    &:nth-child(5) {
      left: calc(50% + 340px);
    }

    &:nth-child(6) {
      left: calc(50% + 510px);
      opacity: 0;
    }
  }
}

@media (width < 650px) {
  .content {
    & .title {
      font-size: 0.9rem;
    }

    & .description {
      font-size: 0.65rem;
    }

    & button {
      font-size: 0.7rem;
    }
  }

  .item {
    width: 130px;
    height: 220px;

    &:nth-child(3) {
      left: 50%;
    }

    &:nth-child(4) {
      left: calc(50% + 140px);
    }

    &:nth-child(5) {
      left: calc(50% + 280px);
    }

    &:nth-child(6) {
      left: calc(50% + 420px);
      opacity: 0;
    }
  }
}

</style>