<template>
  <section id="advantages">
    <div class="container">
      <div class="subtitle">
        {{ getAdvantageSubtitle }}
      </div>
      <div class="title">
        <h2>
          {{ getAdvantageTitle }}
        </h2>
      </div>
      <div class="cards-wrapper">
        <div class="card" v-for="item in getAdvantageCards" :key="item.name">
          <div class="card-header">
            {{ item.name }}
          </div>
          <div class="card-text">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Advantages",
  computed: {
    ...mapGetters([
      'getAdvantageSubtitle',
      'getAdvantageTitle',
      'getAdvantageCards',
    ])
  }
}
</script>

<style lang="scss" scoped>
#advantages {
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
  .cards-wrapper{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    >*{
      width: 100%;
      max-width: 285px;
      margin: auto;
      margin-bottom: 15px;
      border-radius: 80px;
      padding: 40px;
      height: 282px;
      background-color: white;
      .card-header{
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 30px;
      }
      .card-text{
        font-size: 16px;
        color: #1d1d1d;
        line-height: 140%;
      }
    }
  }
}
</style>