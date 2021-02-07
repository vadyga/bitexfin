<template>
  <div class="exchange-item">
    <div class="logo">
      <img :src="getImgUrl(logo)" alt="">
    </div>
    <div class="name">
    <span class="abb">
      {{ name }}
    </span>
      <span class="fullname">
      {{ fullName }}
    </span>
    </div>
    <div class="amount">
      {{ amount }}
    </div>
    <div class="change" v-bind:class="{'green': changeStyle === 'green'}">
      {{ change }}
    </div>
    <div class="markets">
      <img :src="getImgUrl(markets)" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "ExchangeItem",
  props: {
    name: String,
    fullName: String,
    logo: String,
    amount: String,
    change: String,
    changeStyle: String,
    markets: String
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + pet)
    }
  }
}
</script>

<style lang="scss" scoped>
.exchange-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  margin-bottom: 15px;
  font-size: 18px;
  &.hidden{
    display: none;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    border-bottom: 1px solid $text-gray;
  }
  .name{
    display: flex;
    align-items: center;
    .abb{
      font-weight: 600;
      width: 40px;
    }
    .fullname{
      color: #9f9f9f;
      font-size: 14px;
      font-weight: 600;
    }
  }

  .amount{
    width: 200px;
  }

  .change{
    color: #ff0000;
    font-weight: 600;
    max-width: 120px;
    &.green{
      color: #44b28f;
    }
  }

  .amount{
    font-weight: 600;
  }
  @media (max-width: 768px) {
    .logo{
      width: 30px;
    }
    .change{
      width: 50%!important;
    }
    .markets{
      width: 50%!important;
      text-align: right;
    }
    .amount{
      width: 43%;
      text-align: right;
    }
    .name{
      width: 33%!important;
    }
  }
  > * {
    width: 100%;
    @media (max-width: 768px) {
      width: unset;
      max-width: unset!important;
      min-width: unset!important;
    }
    &:first-child {
      max-width: 50px;
    }

    &:nth-child(2) {
      max-width: 500px;
      @media (max-width: 1279px) {
        width: 450px;
      }
    }

    &:nth-child(3) {
      max-width: 400px;
    }

    &:last-child {
      max-width: 110px;
    }
  }
}
</style>