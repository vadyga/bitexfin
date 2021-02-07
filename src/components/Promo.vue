<template>
  <div id="promo">
    <div class="container">
    <div class="promo-left">
      <div class="promo-left__text">
        <h1>
          {{ getPromoData }}
        </h1>
        <a href="">
          {{ getMoreData }}
        </a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Promo",
  computed: {
    ...mapGetters([
      'getPromoData',
      'getMoreData'
    ])
  }
}
</script>

<style lang="scss" scoped>
#promo {
  padding: 80px 0;
  margin-top: 148px;
  display: flex;
  justify-content: space-between;
  background-image: url("./../assets/promo-bg.jpg");
  @media (max-width: 768px) {
    background-image: none;
  }
  background-position: center;
  background-repeat: no-repeat;
  .promo-left {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
    &__text {
      margin-right: 0;

      h1 {
        font-size: 44px;
        font-weight: 700;
        margin-bottom: 100px;
        line-height: 140%;
        @media (max-width: 1023px) {
          margin-top: 0;
          margin-bottom: 60px;
        }
        @media (max-width: 768px) {
          font-size: 24px;
        }
      }
      a{
        color: $main-red;
        font-weight: 600;
        &:hover{
          text-decoration: none;
        }
      }
    }
  }
}
</style>