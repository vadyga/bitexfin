<template>
  <section id="integration">
    <div class="container">
      <div class="left-image">
        <img src="./../assets/api-img.png" alt="">
      </div>
      <div class="right-swiper">
        <div class="navs">
          <div class="swiper-button-prev" @click="prev"></div>
          <div class="swiper-button-next" @click="next"></div>
        </div>
        <swiper
            :slides-per-view="1"
            :space-between="150"
            navigation
            effect="fade"
        >
          <swiper-slide v-for="slide in getApiSlides" :key="slide.name">
            <div class="card">
              <div class="card-name">
                {{ slide.name }}
              </div>
              <div class="card-desc">
                {{ slide.description }}
              </div>
              <a href="">
                {{ getMoreData }}
              </a>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';
import {mapGetters} from 'vuex';
SwiperCore.use([Navigation]);

export default {
  name: "Api",
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    prev: function (){
      document.querySelector('#integration .swiper-container .swiper-button-prev').click()
    },
    next: function (){
      document.querySelector('#integration .swiper-container .swiper-button-next').click()
    }
  },
  computed: {
    ...mapGetters([
      'getApiSlides',
      'getMoreData'
    ])
  }
}
</script>

<style lang="scss" scoped>
#integration {
  padding: 80px 0;
  .swiper-container {
    background-color: #f5f5f7;
    border-bottom-left-radius: 40px;
    padding: 40px;
    position: relative;
  }
.right-swiper{
  position: relative;
  @media (max-width: 1600px) {
    margin: auto;
    width: 100%;
  }
  &:before{
    position: absolute;
    top: -85px;
    right: -85px;
    width: 160px;
    height: 160px;
    background-color: $main-red;
    border-top-right-radius: 50px;
    content: '';
    z-index: 111;
  }
}
  .navs {
    width: 150px;
    position: absolute;
    top: 30px;
    left: unset;
    right: 0;
    z-index: 999;
  }

  .swiper-container {
    padding-top: 100px;
    margin-top: -50px;
  }

  .swiper-button-prev {
    color: $main-red;
    border: 1px solid $main-red;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    &:hover{
      &:after{
        color: white;
      }
    }
    &:after {
      transform: scale(0.8);
      color: $main-red;
    }
  }

  .swiper-button-next {
    color: white;
    border: 1px solid white;
    border-radius: 50%;
    width: 50px;
    height: 50px;

    &:after {
      transform: scale(0.8);
      color: white;
    }
  }
}

.container {
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
  @media (max-width: 1024px) {
    padding: 0 0;
  }
  flex-wrap: wrap;
  .right-swiper {
    max-width: 640px;
  }

  .left-image{
    margin: auto;
    @media (max-width: 1024px) {
      padding-top: 30px;
      padding-bottom: 80px;
      img{
        width: 100%;
      }
    }
  }

  .card-name {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 50px;
    @media (max-width: 768px) {
      font-size: 24px;
      margin-top: 20px;
      margin-bottom: 20px;

    }
  }

  .card-desc {
    color: #1d1d1d;
    font-size: 14px;
    margin-bottom: 50px;
  }
  a{
    color: $main-red;
    font-weight: 600;
  }
}
</style>