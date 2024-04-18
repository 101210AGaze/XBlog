<script setup>
import {onMounted,ref} from "vue";
import NavLeft from "@/component/navLeft.vue";
import {register,login} from "../../../Apis/Login/loginApi.js";
import throttle from "../../../Debounce/throttle.js";

function sayHi(){
  console.log("say Hello")
}




onMounted(()=>{
  /**
   * Variables
   */
  const signupButton = document.getElementById('signup-button'),
      loginButton = document.getElementById('login-button'),
      userForms = document.getElementById('user_options-forms')

  /**
   * Add event listener to the "Sign Up" button
   */
  signupButton.addEventListener('click', () => {
    userForms.classList.remove('bounceRight')
    userForms.classList.add('bounceLeft')
  }, false)

  /**
   * Add event listener to the "Login" button
   */
  loginButton.addEventListener('click', () => {
    userForms.classList.remove('bounceLeft')
    userForms.classList.add('bounceRight')
  }, false)

  //为提交按钮绑定请求接口，并添加节流函数

  let SignUpFormButton = document.getElementById("SignUpFormButton")
 


  //测试部分当不得真
   const fullName = ref(document.getElementById('SignUpName'));
   const email = ref(document.getElementById('SignUpEmail'));
   const password = ref(document.getElementById('SignUpPassword'));
  function testInput(){
   console.log("输入获取测试",fullName.value.value,email.value.value,password.value.value)
  }
  SignUpFormButton.addEventListener('click',function (){
    register("/api/register",fullName.value.value,email.value.value,password.value.value)
  },true)
  SignUpFormButton.addEventListener('click',testInput,true)

})


</script>

<template>
  <div class="login">
    <nav-left></nav-left>
    <div class="user">
    <div class="user_options-container">
      <div class="user_options-text">
        <div class="user_options-unregistered">
          <h2 class="user_unregistered-title">Don't have an account?</h2>
          <p class="user_unregistered-text">welcome to new world! You can write what you want to write down!</p>
          <button class="user_unregistered-signup" id="signup-button">Sign up</button>
        </div>

        <div class="user_options-registered">
          <h2 class="user_registered-title">Have an account?</h2>
          <p class="user_registered-text">welcome back! My old friend!</p>
          <button class="user_registered-login" id="login-button">Login</button>
        </div>
      </div>

      <div class="user_options-forms" id="user_options-forms">
        <div class="user_forms-login">
          <h2 class="forms_title">Login</h2>
          <form class="forms_form">
            <fieldset class="forms_fieldset">
              <div class="forms_field">
                <input type="email" placeholder="Email" class="forms_field-input" required autofocus />
              </div>
              <div class="forms_field">
                <input type="password" placeholder="Password" class="forms_field-input" required />
              </div>
            </fieldset>
            <div class="forms_buttons">
              <button type="button" class="forms_buttons-forgot">Forgot password?</button>
              <input type="submit" value="Log In" class="forms_buttons-action">
            </div>
          </form>
        </div>
        <div class="user_forms-signup">
          <h2 class="forms_title">Sign Up</h2>
          <form class="forms_form">
            <fieldset class="forms_fieldset">
              <div class="forms_field">
                <input id="SignUpName" type="text" placeholder="Full Name" class="forms_field-input" required />
              </div>
              <div class="forms_field">
                <input id="SignUpEmail" type="email" placeholder="Email" class="forms_field-input" required />
              </div>
              <div class="forms_field">
                <input id="SignUpPassword" type="password" placeholder="Password" class="forms_field-input" required />
              </div>
            </fieldset>
            <div class="forms_buttons">
              <input type="submit" value="Sign up" class="forms_buttons-action" id="SignUpFormButton">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>

.login{
  background-image: url("public/background.jpg");
  background-size: cover;
  box-sizing: border-box;
  display: grid;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: normal;
  grid-template-columns: 15% 85%;
  grid-template-rows: 100%;

  @media screen and (max-width: 1030px) {
    grid-template-columns: 100%;
  }
}


button{
  background-color: #CEA9EA;
  padding: 0;
  border: 0;
  outline: 0;
  cursor: pointer;
}

input{
  background-color: #CEA9EA;
  padding: 0;
  border: 0;
  outline: 0;

  &[type="submit"]{
    cursor: pointer;
  }

  &::placeholder{
    font-size: .85rem;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    letter-spacing: .1rem;
    color: #8F53C9;
  }
}

@keyframes bounceLeft {
  0% {
    transform: translate3d(100%,-50%,0);
  }
  50% {
    transform: translate3d(-30px,-50%,0);
  }
  100%{
    transform: translate3d(0,-50%,0);

  }
}

@keyframes bounceRight {
  0% {
    transform: translate3d(0,-50%,0);
  }
  50% {
    transform: translate3d(calc(100% + 30px),-50%,0);
  }
  100% {
    transform: translate3d(100%,-50%,0);
  }
}

@keyframes showSignUp {
  100% {
    opacity: 1;
    visibility: visible;
    transform: translate3d(0,0,0);
  }
}

.user {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-size: cover;


}
.user_options-container{
  position: relative;
  width: 80%;
}
.user_options-text{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.user_options-registered,.user_options-unregistered{
  width: 50%;
  padding: 75px 45px;
  color: #6053A3;
  font-weight: 300;
}


.user_registered-title,
.user_unregistered-title{
  margin-bottom: 15px;
  font-size: 1.66rem;
  line-height: 1em;
}

.user_unregistered-text,
.user_registered-text{
  font-size: .83rem;
  line-height: 1.4em;
  font-weight: 500;
}

.user_registered-login,
.user_unregistered-signup{
  margin-top: 30px;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 10px 30px;

  color: #6053A3;
  text-transform: uppercase;
  line-height: 1em;
  letter-spacing: .2rem;

  transition: background-color .2s ease-in-out, color .2s ease-in-out;

  &:hover{
  color: blanchedalmond;
  background-color: #3e1086;
  }
}

.user_options-forms{
  position: absolute;
  top: 50%;
  left: 30px;

  width: calc(50% - 30px);
  min-height: 420px;
  background-color: #593799;
  border-radius: 3px;
  box-shadow: 2px 0 15px black;
  overflow: hidden;

  transform: translate3d(100%, -50%, 0);
  transition: transform .4s ease-in-out;
}
.user_forms-login{
      transition: opacity .4s ease-in-out, visibility .4s ease-in-out
}

.forms_title{
  margin-bottom: 45px;

  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1em;
  text-transform: uppercase;
  color: white;
  letter-spacing: .1rem
}

.forms_field{
     &:not(:last-of-type)
    {
      margin-bottom: 20px
     }
}


.forms_field-input{
  width: 100%;
  border-bottom: 1px solid gray;
  padding: 6px 20px 6px 6px;

  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  color: #3e1086;
  letter-spacing: .1rem;

  transition: border-color .2s ease-in-out;

  &:focus{
  border-color:#6053A3;
  }
}

.forms_buttons{
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 35px;

  &-forgot{
  font-family: "Inter", sans-serif;
  letter-spacing: .1rem;
  color: gray;
  text-decoration: underline;

  transition: color .2s ease-in-out;

  &:hover{
  color: #D0B7BA;
  }
}
  &-action{
    background-color: black;
    border-radius: 3px;
    padding: 10px 35px;

    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    color: white;
    text-transform: uppercase;
    letter-spacing: .1rem;

    transition: background-color .2s ease-in-out;

    &:hover{
    background-color: black}
  }}

.user_forms-signup,
.user_forms-login{
  position: absolute;
  top: 70px;
  left: 40px;

  width: calc(100% - 80px);

  opacity: 0;
  visibility: hidden;
  transition: opacity .4s ease-in-out, visibility .4s ease-in-out, transform .5s ease-in-out;
}


.user_forms-signup{
  transform: translate3d(120px, 0, 0)
}
.forms_buttons{
  justify-content: flex-end
}

.user_forms-login{
  transform: translate3d(0, 0, 0);
  opacity: 1;
  visibility: visible

}

.user_options-forms{
  &.bounceLeft{
    animation: bounceLeft 1s forwards;
    .user_forms-signup{
      animation: showSignUp 1s forwards
  }
    .user_forms-login{
      opacity: 0;
      visibility: hidden;
      transform: translate3d(-120px, 0, 0);
    }
  }
  &.bounceRight{
    animation: bounceRight 1s forwards
  }
}

@media screen and (max-width: 990px){
  .user_options-forms {
    min-height: 350px;

    .forms_buttons{
    flex-direction: column
  }
    .user_forms-login
    .forms_buttons-action{
      background-color: #8F53C9;
      color: #CEA9EA;
    margin-top: 30px}

  .user_forms-signup,
  .user_forms-login{
    top: 40px}
  }
  .user_options-registered,
  .user_options-unregistered{
  padding: 50px 45px}

}
</style>