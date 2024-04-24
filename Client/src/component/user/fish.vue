<script setup>

</script>

<template>
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
      <div class="fishbowl__tap-text">该加水了，老登</div>
    </div>
  </div>

</template>

<style lang="scss">

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


.fishbowl{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 30rem;
  background-color: #8F53C9;
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
  bottom: 5%;
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
  bottom: 3%;
  left: 3%;
  width: 94%;
  height: 80%;
  border-radius: 40% 40% 10.5rem 10.5rem;
  transition: height 0.3s ease;
  overflow: hidden;
}
.fishbowl_water-color {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(1% * var(--filling, 90));
  background: linear-gradient(transparent -50%, blue 250%);
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
    background: linear-gradient(transparent 0%, blue 250%);
    box-shadow: inset 0 -1px 0 0 rgba(white, 0.5);
  }
}
.fishbowl_top {
  position: absolute;
  top: 5%;
  left: 15%;
  width: 70%;
  height: 20%;
  border-radius: 50%;
  box-shadow: 0 2px 2px 3px rgba(white, 0.3);
}

.fishbowl_fish {
  position: absolute;
  bottom: 25%;
  left: 18%;
  width: 2rem;
  height: 1rem;
  border-radius: 50%;
  background: linear-gradient(white -200%, orange);
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
    background: radial-gradient(circle at 0 0, white -100%, dark-blue);
    transition: height 0.5s ease;
  }

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
  background: linear-gradient(white -100%, blue);
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
    border-right: 2px solid white;
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
  width: 12rem;
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
  background: linear-gradient(#919ea3, #66777f 150%);
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
  background: radial-gradient(circle at 0 0, #fff -100%, #919ea3);
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
  height: 0rem;
  border-radius: 50% 50% 0 0;
  border-top: 2rem solid #919ea3;
  border-left: 2rem solid #919ea3;
  border-right: 2rem solid #919ea3;
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
  background: linear-gradient(transparent, rgba(255, 255, 255, 0.4) 60%, transparent 200%);
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

.fishbowl__tap-text {
  position: absolute;
  top: 4rem;
  left: -6rem;
  color: #fff;
  font-family: 'Arial', sans-serif;
  font-size: 0.875rem;
}

.fishbowl__tap-text:after {
  content: '';
  position: absolute;
  bottom: -1rem;
  right: -1rem;
  width: 2rem;
  height: 1px;
  background-color: #fff;
  transform: rotate(45deg);
}


</style>