<template>
  <nav class="mobile-menu hide">
    <ul>
      <HeaderNavItem v-for="item in getNavData" :text="item" :key="item"></HeaderNavItem>
    </ul>
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
  </nav>
</template>

<script>
import HeaderNavItem from "@/components/HeaderNavItem";
import {mapGetters} from  'vuex';

export default {
  name: "HeaderNav",
  components: {
    HeaderNavItem
  },
  computed:{
    ...mapGetters([
        'getNavData',
      'getLoginData',
      'getRegisterData'
    ])
  }
}
</script>

<style lang="scss" scoped>
ul{
  padding: 0;
  list-style: none;
  display: flex;
  font-weight: 600;
}
@media (min-width: 1280px) {
  .apps,.login,.register{
    display: none;
  }
}
@media (max-width: 1279px) {
  .mobile-menu{
    padding-bottom: 30px;
    z-index: 111;
  }
  .hide{
    display: none;
  }
  nav{
    position: absolute;
    width: 100%;
    background-color: $color-bg-light;
    left: 0;
    text-align: center;
    top: 100px;
    ul{
      flex-direction: column;
      li{
        margin-bottom: 15px;
      }
    }
  }
  .apps {
    margin-bottom: 15px;
    .appStore {
      margin-right: 10px;
    }
  }

  .login {
    margin-bottom: 15px;

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
    margin-bottom: 15px;

    a {
      width: 90%;
      margin: auto;
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
}
</style>