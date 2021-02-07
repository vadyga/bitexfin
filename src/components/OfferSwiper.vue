<template>
  <swiper
      :slides-per-view="1"
      :space-between="50"
      navigation
      effect="fade"
      class="offerSwiper"
      :breakpoints="{
        640: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
      }"
  >
    <swiper-slide v-for="slide in slides" :key="slide.name">
      <div class="card">
        <div class="card-name">
          {{ slide.name }}
        </div>
        <div class="card-desc">
          {{ slide.description }}
        </div>
        <div class="card-promo">
          {{ slide.promo }}
        </div>
        <a href="">
          {{ getMoreData }}
        </a>
      </div>
    </swiper-slide>
    <div class="navs">
      <div class="swiper-button-prev" @click="prev"></div>
      <div class="swiper-button-next" @click="next"></div>
    </div>
  </swiper>
</template>

<script>
import {mapGetters} from 'vuex'
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);
export default {
  name: "OfferSwiper",
  props: {
    slides: Array
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    prev: function () {
      document.querySelector('.swiper-container .swiper-button-prev').click()
    },
    next: function () {
      document.querySelector('.swiper-container .swiper-button-next').click()
    }
  },
  computed: {
    ...mapGetters([
      'getMoreData'
    ])
  }
}
</script>

<style lang="scss">

.navs {
  width: 150px;
  position: absolute;
  top: 30px;
  left: 60%;
  @media (max-width: 768px) {
    top: 70px;
    right: 0;
    left: unset;
  }
}

.swiper-container {
  padding-top: 100px;
  margin-top: -50px;
}

.swiper-button-prev {
  color: black;
  border: 1px solid black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: all ease-in-out 0.2s;

  &:hover {
    border-color: transparent;
    background-color: $main-red;

    &:after {
      transition: all ease-in-out 0.2s;
      color: white;
    }
  }

  &:after {
    transform: scale(0.8);
    color: black;
  }
}

.swiper-button-next {
  color: black;
  border: 1px solid black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: all ease-in-out 0.2s;

  &:hover {
    border-color: transparent;
    background-color: $main-red;

    &:after {
      transition: all ease-in-out 0.2s;
      color: white;
    }
  }

  &:after {
    transform: scale(0.8);
    color: black;
  }
}

.swiper-container > .swiper-button-next {
  display: none !important;
}

.swiper-container > .swiper-button-prev {
  display: none !important;
}

.offerSwiper {
  .card {
    background-color: white;
    border-radius: 30px 30px 0 30px;
    //height: 460px;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    transition: all ease-in-out 0.2s;
    position: relative;

    &-name {
      color: black;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    &-desc {
      color: $text-gray;
      font-size: 16px;
      margin-bottom: 40px;
    }

    &-promo {
      color: black;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 70px;
    }

    a {
      position: absolute;
      font-weight: 600;
      bottom: 50px;
      color: $main-red;

      &:hover {
        text-decoration: none;
      }
    }

    &:hover {
      background-color: black;

      > div {
        color: white;
      }
    }
  }
}

</style>