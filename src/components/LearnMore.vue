<template>
  <section id="learnMore">
    <div class="container">
      <div class="left-block">
        <h2>
          {{ getLearnMoreHeading }}
        </h2>
        <p>
          {{ getLearnMoreDescription }}
        </p>
        <a href="">
          <img src="./../assets/play.png" alt="">
          <span>
            {{getWatchVideo}}
          </span>
        </a>
      </div>
      <div class="right-block">
        <img src="./../assets/learnmore.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "LearnMore",
  computed: {
    ...mapGetters([
      'getLearnMoreHeading',
      'getLearnMoreDescription',
      'getWatchVideo'
    ])
  }
}
</script>

<style lang="scss" scoped>
#learnMore {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1279px) {
      flex-wrap: wrap;
      .right-block{
        margin: auto;
        img{
          width: 100%;
        }
      }
    }
    h2 {
      font-size: 48px;
      font-weight: 600;
      margin-bottom: 60px;
      margin-top: 0;
      @media (max-width: 768px) {
        font-size: 32px;
        margin-bottom: 20px;
      }
    }

    p {
      font-size: 18px;
      color: #777777;
      margin-bottom: 100px;
      @media (max-width: 768px) {
        margin-bottom: 20px;
      }
    }
    a{
      display: flex;
      align-items: center;
      text-decoration: none;
      position: relative;

      &:hover{
        img{
          transition: all ease-in-out 0.5s;
          transform: rotate(90deg);
        }
        span{
          &:before{
            transition: all ease-in-out 0.5s;
            left: 70px;
            width: 0;
          }
          &:after{
            transition: all ease-in-out 0.5s;
            opacity: 0;
            width: 0;
          }
        }
      }
      img{
        margin-right: 10px;
      }
      span{
        &:before{
          content: '';
          width: 200px;
          height: 1px;
          background-color: $main-red;
          display: inline-block;
          position: absolute;
          left: -160px;
          top: 50%;
        }
        &:after{
          content: '';
          width: 55px;
          height: 1px;
          background-color: $main-red;
          display: inline-block;
          position: absolute;
          left: 153px;
          top: 55%;
        }
        color: $main-red;
      }
    }
  }
}
</style>