<script setup>

import {onMounted} from "vue";

let fill = 90 ;
let intervalId = null;
onMounted(()=>{
  const fishbowl = document.getElementById('fishbowl')
  const fish = document.getElementById('fish')
  const tap = document.getElementById('tap')

//设置定时器
  const emptyingFn = () => setInterval(() => {
    fill = fill - 1;
    fishbowl.style = `--filling: ${fill}`;
    if (fill <= 0) {
      clearInterval(intervalId);
    } else if (fill < 20) {
      fish.classList.add('fishbowl__fish--dead');
    } else if (fill < 50) {
      fish.classList.add('fishbowl__fish--dying');
    } else {
      fish.classList.remove('fishbowl__fish--dying');
      fish.classList.remove('fishbowl__fish--dead');
    }
  }, 200);

  intervalId = emptyingFn();

  tap.addEventListener('click', () => {
    tap.classList.add('fishbowl__tap--active');
    setTimeout(() => tap.classList.remove('fishbowl__tap--active'), 500);
    if (fill <= 0) {
      intervalId = emptyingFn();
      fish.classList.add('fishbowl__fish--floating');
    }
    fill = Math.min(fill + 20, 90);
  });

})


</script>

<template>
  <div id="fishbowl_container">
  <div id="fishbowl" class="fishbowl">
    <div class="fishbowl_pool"></div>
    <div class="fishbowl_background"></div>
    <div class="fishbowl_bottom"></div>
    <div class="fishbowl_decoration">
      <div class="fishbowl_seaweed fishbowl_seaweed--1"></div>
      <div class="fishbowl_seaweed fishbowl_seaweed--2"></div>
      <div class="fishbowl_seaweed fishbowl_seaweed--3"></div>
    </div>
    <div class="fishbowl_water">
      <div id="fish" class="fishbowl_fish">
        <div class="fishbowl_fish-tail"></div>
      </div>
      <div class="fishbowl_water-color"></div>
    </div>
    <div class="fishbowl_top"></div>
    <div id="tap" class="fishbowl__tap">
      <div class="fishbowl__tap-base"></div>
      <div class="fishbowl__tap-handle"></div>
      <div class="fishbowl__tap-stream"></div>
      <div class="fishbowl__tap-end"></div>
      <div class="fishbowl__tap-head"></div>
    </div>
  </div>
  </div>
</template>

<style lang="scss">
#fishbowl_container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

}

@keyframes swimming {
  0%,
  100% {
    transform: translateX(0);
  }
  22.5% {
    transform: translateX(2.5rem) skewY(-5deg);
  }
  45% {
    transform: translateX(6rem) translateY(-1rem) skewY(5deg);
  }
  55% {
    transform: translateX(5rem) translateY(-0.5rem) scaleX(-1);
  }
  95% {
    transform: translateX(0) scaleX(-1) skewY(10deg);
  }
}

@keyframes dead {
  0%,
  100% {
    transform: translateX(2.5rem);
  }
  22.5% {
    transform: translateX(2.5rem) translateY(-1rem) skewY(-5deg);
  }
  45% {
    transform: translateX(2.5rem) skewY(5deg);
  }
  55% {
    transform: translateX(2.5rem) translateY(-1rem) skewY(-5deg);
  }
  95% {
    transform: translateX(2.5rem) skewY(5deg);
  }
}

@keyframes stream {
  0% {
    height: 0;
  }
  50% {
    top: 2rem;
    height: calc(14rem - var(--filling) * 0.1rem);
  }
  100% {
    top: calc(2rem + 14rem - var(--filling) * 0.1rem);
    height: 0;
  }
}
.fishbowl{
  width: 15rem;
  height: 15rem;
  position: relative;
  :after {
    content: '';
    position: absolute;
    top: 12.5%;
    left: 2.5%;
    width: 95%;
    height: 85%;
    border-radius: 40%;
    background: linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.5) 200%);
  }
}

.fishbowl_background{
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50% 50% 40% 40%;
  background: linear-gradient(transparent 10%, #FFF 150%);
  border-bottom: 1px solid #FFF;
}
.fishbowl_bottom{
  position: absolute;
  bottom: 4%;
  left: 17.5%;
  width: 65%;
  height: 20%;
  border-radius: 50%;
  background: linear-gradient(yellow, brown 200%);
}
.fishbowl_decoration{
  position: absolute;
  top: 20%;
  left: 5%;
  width: 90%;
  height: 75%;
}
.fishbowl_seaweed{
  position: absolute;
  width: 0;
  height: 0;
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-bottom: 5rem solid green;
}
.fishbowl_seaweed--1 {
  bottom: 15%;
  right: 20%;
  border-bottom: 5rem solid green;
}
.fishbowl_seaweed--2 {
  bottom: 10%;
  right: 30%;
  border-bottom: 8rem solid green;
}
.fishbowl_seaweed--3 {
  bottom: 15%;
  right: 40%;
  border-bottom: 6rem solid green;
}
.fishbowl_water {
  position: absolute;
  bottom: 2%;
  left: 2%;
  width: 96%;
  height: 80%;
  border-radius: 40% 40% 6rem 6rem;
  transition: height 0.3s ease;
  overflow: hidden;
}
.fishbowl_water-color {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(1% * var(--filling, 90));
  background: linear-gradient(transparent -50%, #419197 250%);
  border-radius: 20% 20% 4rem 4rem;
  transition: height 0.5s linear;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 5%;
    width: 90%;
    height: 3rem;
    border-radius: 50%;
    background: linear-gradient(transparent 0%, #419197 250%);
    box-shadow: inset 0 -1px 0 0 rgba(#FFF, 0.5);
  }
}
.fishbowl_top {
  position: absolute;
  top: 5%;
  left: 15%;
  width: 70%;
  height: 20%;
  border-radius: 50%;
  box-shadow: 0 2px 2px 3px rgba(#FFF, 0.3);
}

.fishbowl_fish {
  position: absolute;
  bottom: 25%;
  left: 18%;
  width: 2rem;
  height: 1rem;
  border-radius: 50%;
  background: linear-gradient(#FFF -200%, orange);
  box-shadow: 0 2rem 4px -2px rgba(black, 0.3);
  transition-property: bottom, transform, box-shadow;
  transition-duration: 1s;
  transition-timing-function: ease;
  animation: swimming;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  &:after {
    content: '';
    position: absolute;
    top: 15%;
    right: 15%;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background: radial-gradient(circle at 0 0, #FFF -100%, dark-#419197);
    transition: height 0.5s ease;
  }

}

.fishbowl_fish--dying {
  bottom: 10%;
  box-shadow: 0 1rem 4px -2px rgba(black, 0.3);
}

.fishbowl_fish--dead {
  animation: dead;
  animation-duration: 2s;
  animation-iteration-count: 2;
  animation-fill-mode: forwards;
  box-shadow: none;
}

.fishbowl_fish--floating {
  bottom: max(calc(var(--filling, 0) * 1% - 15%), 10%);
  transform: translateX(2.5rem);
  animation: none;
  box-shadow: none;
}

.fishbowl_fish-tail {
  position: absolute;
  top: 0;
  left: -0.75rem;
  width: 0;
  height: 0;
  border-top: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  border-left: 0.94rem solid orange;
  box-shadow: 0 2rem 4px -2px rgba(black, 0.3);
  transition: box-shadow 1s ease;
}

.fishbowl_pool {
  position: absolute;
  right: 0;
  bottom: -5%;
  width: 50%;
  height: 15%;
  border-radius: 50%;
  background: linear-gradient(#FFF -100%, #419197);
  opacity: 0.5;
  &:after {
    @keyframes wave {
      from {
        top: 25%;
        left: 25%;
        width: 50%;
        height: 50%;
      }
      to {
        top: 10%;
        left: 10%;
        width: 80%;
        height: 80%;
      }
    }
    content: '';
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    border-right: 2px solid #FFF;
    border-radius: 50%;
    animation: wave;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    opacity: 0.5;
  }
}
.fishbowl__tap {
  position: absolute;
  bottom: 0;
  left: -3rem;
  width: 18rem;
  height: 15.9rem;
  cursor: pointer;
}

.fishbowl__tap--active .fishbowl__tap-stream {
  animation: stream 0.5s;
}

.fishbowl__tap--active .fishbowl__tap-handle {
  animation: handle 0.5s;
}

.fishbowl__tap-base {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 2rem;
  height: 14rem;
  border-radius: 0 0 1.2rem 1.2rem;
  box-shadow: inset -1px -1px 0 0px rgba(255, 255, 255, 0.5);
  background: linear-gradient(#F3E796, #66777f 150%);
}

.fishbowl__tap-base:before {
  content: '';
  position: absolute;
  z-index: -1;
  bottom: 4rem;
  right: 15rem;
  width: 100%;
  height: 100%;
  border-radius: 1rem 1rem 0 0;
  box-shadow: -4rem 10rem 1rem 0 rgba(0, 0, 38, 0.3);
  transform: rotate(-70deg);
}

.fishbowl__tap-base:after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4) 60%, transparent 200%);
  border-radius: 0 0 1.2rem 1.2rem;
}

.fishbowl__tap-handle {
  position: absolute;
  left: -1rem;
  bottom: 6rem;
  width: 2rem;
  height: 2rem;
  border-radius: 0.2rem;
  border-top: 1px solid #fff;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  background: radial-gradient(circle at 0 0, #fff -100%, #F3E796);
  transform: rotate(45deg);
}

.fishbowl__tap-handle:after {
  content: '';
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: radial-gradient(circle at 0 0, #fff -200%, #12486b);
}

.fishbowl__tap-stream {
  position: absolute;
  top: 2rem;
  left: 6.25rem;
  width: 1.5rem;
  height: 0;
  background: linear-gradient(#fff -100%, #12486b);
  border-radius: 1rem;
  opacity: 0.3;
}

.fishbowl__tap-head {
  position: absolute;
  top: 0;
  left: 0;
  width: 4rem;
  height: 0;
  border-radius: 50% 50% 0 0;
  border-top: 2rem solid #F3E796;
  border-left: 2rem solid #F3E796;
  border-right: 2rem solid #F3E796;
  box-shadow: 1px -1px 0 0 #fff;
}

.fishbowl__tap-head:before {
  content: '';
  position: absolute;
  z-index: -1;
  bottom: 3rem;
  right: 23rem;
  width: 150%;
  height: 200%;
  box-shadow: -4rem 10rem 1rem 1rem rgba(0, 0, 38, 0.3);
  transform: rotate(2deg) skewX(60deg);
}

.fishbowl__tap-head:after {
  content: '';
  position: absolute;
  top: -2rem;
  left: -2rem;
  width: 8rem;
  height: 2rem;
  background: linear-gradient(transparent, rgba(#F3E796, 0.8) 60%, transparent 200%);
  border-radius: 50% 50% 0 50%;
}

.fishbowl__tap-end {
  position: absolute;
  left: 6rem;
  top: 1.5rem;
  width: 2rem;
  height: 1rem;
  border-radius: 50%;
  background: linear-gradient(#fff -70%, #919ea3);
}


</style>