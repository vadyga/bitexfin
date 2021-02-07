<template>
  <header>
    <div class="container header">
      <div class="logo">
        <img src="./../assets/logo.png" alt="logo">
      </div>
      <HeaderNav></HeaderNav>
      <LanguageSwitch></LanguageSwitch>
      <div class="apps">
        <a class="appStore" href="">
          <img src="./../assets/app-store.png" alt="">
        </a>
        <a class="PlayMarket" href="">
          <img src="./../assets/gstore.png" alt="">
        </a>
      </div>
      <div class="login">
        <a href="">
          <img src="./../assets/login.png" alt="">
          <span>
        {{ getLoginData }}
      </span>
        </a>
      </div>
      <div class="register">
        <a href="">
          {{ getRegisterData }}
        </a>
      </div>
      <a class="target-burger" @click="toggleMenu">
        <ul class="buns">
          <li class="bun"></li>
          <li class="bun"></li>
        </ul>
      </a>
    </div>
  </header>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
import LanguageSwitch from "@/components/LanguageSwitch";
import {mapGetters} from 'vuex'

export default {
  name: "Header",
  components: {
    HeaderNav, LanguageSwitch
  },
  methods: {
    toggleMenu: function () {
        document.querySelector('.target-burger').classList.toggle('toggled')
        document.querySelector('.mobile-menu').classList.toggle('hide')
    }
  },
  computed: {
    ...mapGetters([
      'getLoginData',
      'getRegisterData'
    ])
  }
}
</script>

<style lang="scss" scoped>
header {
  background-color: $color-bg-light;
  padding-top: 150px;
  padding-bottom: 50px;
  position: relative;

  //ifFixed
  padding-top: 50px;
  position: fixed;
  width: 100%;
  z-index: 9999;
  box-shadow: 0px 15px 15px rgba(0,0,0,0.10);

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: black;

    .apps {
      .appStore {
        margin-right: 10px;
      }
    }

    .login {
      a {
        display: inline-flex;
        align-items: center;
        color: inherit;
        text-decoration: none;

        &:hover {
          color: $main-red;
        }

        img {
          margin-right: 5px;
        }
      }
    }

    .register {
      a {
        display: block;
        color: white;
        background-color: $main-red;
        padding: 15px 35px;
        border-radius: 21px;
        text-decoration: none;
        border: 1px solid $main-red;
        transition: all ease-in-out 0.2s;

        &:hover {
          border: 1px solid $main-red;
          background-color: white;
          color: black;
        }
      }
    }
    @media (max-width: 1279px) {
      justify-content: unset;
      .apps,.login,.register{
        display: none;
      }
    }

    a.target-burger{
      width: 20px;
      height: 20px;
      display: block;
      @media (min-width: 1279px) {
          display: none!important;
      }
      position: relative;
      &:hover{
        cursor: pointer;
      }
      &.toggled{
        ul.buns{
          li.bun{
            -webkit-transform: rotate(45deg) translateZ(0);
            transform: rotate(45deg) translateZ(0);
            &:last-child{
              -webkit-transform: rotate(-45deg) translateZ(0);
              transform: rotate(-45deg) translateZ(0);
              margin-top: -2px;
            }
          }
        }
      }
      ul.buns{
        width: 20px;
        height: 20px;
        list-style: none;
        margin-top: 5px;
        padding: 0;
        position: relative;
        -webkit-transition: -webkit-transform 1s cubic-bezier(.23,1,.32,1),color 1s cubic-bezier(.23,1,.32,1);
        transition: transform 1s cubic-bezier(.23,1,.32,1),color 1s cubic-bezier(.23,1,.32,1);
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        color: #000000;
        li.bun{
          width: 100%;
          height: 2px;
          background-color: #000000;
          position: relative;
          -webkit-transform: translateY(-3.75px) translateZ(0);
          transform: translateY(-3.75px) translateZ(0);
          -webkit-transition: -webkit-transform 1s cubic-bezier(.23,1,.32,1),background-color 1s cubic-bezier(.23,1,.32,1);
          transition: transform 1s cubic-bezier(.23,1,.32,1),background-color 1s cubic-bezier(.23,1,.32,1);
          &:last-child{
            -webkit-transform: translateY(3.75px) translateZ(0);
            transform: translateY(3.75px) translateZ(0);
          }
        }
      }
    }
  }
}
</style>