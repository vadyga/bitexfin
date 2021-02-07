<template>
  <section id="exchange">
    <div class="container">
      <div class="table-header">
        <div class="name">
          {{ getExchangeHeaderTitles.pair }}
        </div>
        <div class="last-amount">
          {{ getExchangeHeaderTitles.lastAmount }}
        </div>
        <div class="change">
          {{ getExchangeHeaderTitles.change }}
        </div>
        <div class="markets">
          {{ getExchangeHeaderTitles.markets }}
        </div>
      </div>
      <div class="table-items">
        <ExchangeItem
            v-for="(item,index) in getExchangeItems"
            :key="item.name"
            :name="item.name"
            :fullName="item.fullName"
            :logo="item.logo"
            :amount="item.amount"
            :change="item.change"
            :changeStyle="item.changeStyle"
            :markets="item.markets"
            v-bind:class="{'hidden': (index>4 && isHidden)}"
        ></ExchangeItem>
        <div class="show-more" @click="isHidden = !isHidden" v-bind:class="{'shown': (!isHidden)}">
          <img src="./../assets/more.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import ExchangeItem from "@/components/ExchangeItem";

export default {
  name: "Exchange",
  data: function (){
    return {
      isHidden: true
    }
  },
  components: {
    ExchangeItem
  },
  computed: {
    ...mapGetters([
      'getExchangeHeaderTitles',
      'getExchangeItems',
    ])
  }
}
</script>

<style lang="scss" scoped>
#exchange{
  padding: 70px 0;
  .show-more{
    text-align: center;
    &.shown{
      transform: rotate(180deg);
    }
  }
  .table-header{
    display: flex;
    justify-content: space-between;
    @media (max-width: 1023px) {
      justify-content: unset;
    }
      padding-bottom: 30px;
    border-bottom: 1px solid #e1e1e1;
    font-size: 14px;
    font-weight: 600;
    .name{
      width: 40%;
    }
    @media (max-width: 1023px) {
      .name{
        width: 50%;
      }
      .last-amount{
        width: 18%;
      }
      .change{
        width: 17%;
      }
    }
  }
}
</style>