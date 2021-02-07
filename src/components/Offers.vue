<template>
  <section id="offers">
    <div class="container">
      <div class="subtitle">
        {{ getOfferSubtitle }}
      </div>
      <div class="title">
        <h2>
          {{ getOfferTitle }}
        </h2>
      </div>
      <OfferSwiper :slides="getOfferSlides"></OfferSwiper>
    </div>
  </section>
</template>

<script>
import OfferSwiper from "@/components/OfferSwiper";
import {mapGetters} from "vuex";

export default {
  name: "Offers",
  components: {
    OfferSwiper
  },
  computed: {
    ...mapGetters([
      'getOfferSubtitle',
      'getOfferTitle',
      'getOfferSlides'
    ])
  }
}
</script>

<style lang="scss" scoped>
#offers {
  background-color: $color-bg-light;
  padding: 70px 0;

  .subtitle {
    color: $main-red;
    font-size: 14px;
  }

  h2 {
    font-size: 36px;
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    @media (max-width: 768px) {
      font-size: 24px;
    }
    &:after {
      content: '';
      display: inline-block;
      width: 175px;
      height: 1px;
      position: absolute;
      top: 50%;
      right: -270px;
      background-color: $main-red;
      @media (max-width: 1279px) {
        right: -180px;
      }
      @media (max-width: 1023px) {
        display: none;
      }
    }
  }
}
</style>