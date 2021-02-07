<template>
  <section id="pay">
    <div class="container">
      <div class="subtitle">
        {{ getPaySubtitle }}
      </div>
      <div class="title">
        <h2>
          {{ getPayTitle }}
        </h2>
      </div>
      <div class="content">
        <div class="first-group">
          <div class="w-50">
            <img src="./../assets/firstImage.png" alt="">
          </div>
          <div class="w-50">
            <h4>
              {{ getFirstHeading }}
            </h4>
          </div>
        </div>
        <div class="second-group">
          <div class="w-50">
            <h3>
              {{ getSecondHeading }}
            </h3>
            <p>
              {{ getSecondDescription }}
            </p>
          </div>
          <div class="w-50">
            <img src="./../assets/secondImage.png" alt="">
          </div>
        </div>
        <div class="third-group">
          <div class="w-50">
            <img src="./../assets/thirdImage.png" alt="">
          </div>
          <div class="w-50">
            <h3>
              {{ getThirdHeading }}
            </h3>
            <p>
              {{ getThirdDescription }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Pay",
  computed: {
    ...mapGetters([
      'getPaySubtitle',
      'getPayTitle',
      'getFirstHeading',
      'getSecondHeading',
      'getSecondDescription',
      'getThirdHeading',
      'getThirdDescription',
    ])
  }
}
</script>

<style lang="scss" scoped>
#pay {
  background-color: #f5f5f7;
  margin-top: 30px;
  padding: 50px 0;

  .subtitle {
    color: $main-red;
    font-size: 14px;
  }

  h2 {
    font-size: 36px;
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      display: inline-block;
      width: 175px;
      height: 1px;
      position: absolute;
      top: 50%;
      right: -270px;
      background-color: $main-red;
    }
  }

  .content {
    > * {
      display: flex;
      flex-wrap: wrap;

      .w-50 {
        width: 50%;
        @media (max-width: 768px) {
          width: 100%;
        }
        h4 {
          font-size: 36px;
          font-weight: 600;
          padding-right: 40px;
          @media (max-width: 768px) {
            font-size: 26px;
            padding-right: 10px;
          }
        }

        h3 {
          font-size: 48px;
          font-weight: 600;
          padding-right: 40px;
          @media (max-width: 768px) {
            font-size: 26px;
            padding-right: 10px;
          }
        }

        p {
          color: #737374;
          font-size: 18px;
          padding-right: 40px;

        }

        img{
          width: 90%;
        }
      }

    }
    .second-group{
      @media (max-width: 768px) {
        flex-wrap: wrap-reverse;
      }
      margin-top: -150px;
      @media (max-width: 768px) {
        margin-top: 0;
      }
      h3{
        margin-top: 200px;
        @media (max-width: 768px) {
          margin-top: 0;
        }
      }
      .w-50:last-child{
        text-align: right;
      }
    }
  }
}
</style>