<template>
  <Header></Header>
  <Promo></Promo>
  <Offers></Offers>
  <Exchange v-if="getSiteData"></Exchange>
  <LearnMore></LearnMore>
  <Pay></Pay>
  <Api></Api>
  <Advantages></Advantages>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header";
import Promo from "@/components/Promo";
import Offers from "@/components/Offers";
import Exchange from "@/components/Exchange";
import LearnMore from "@/components/LearnMore";
import Pay from "@/components/Pay";
import Api from "@/components/Api";
import Advantages from "@/components/Advantages";
import Footer from "@/components/Footer";

import {mapGetters} from 'vuex'

export default {
  name: 'App',
  data(){
    return{
      data: ''
    }
  },
  components: {
    Header, Promo, Offers, Exchange, LearnMore, Pay, Api, Advantages, Footer
  },
  mounted() {
    this.$store.dispatch('getSiteData')
  },
  computed:{
    ...mapGetters([
        'getSiteData'
    ])
  }
}

</script>

<style lang="scss">
@import "../../node_modules/normalize.css/normalize";
@import "assets/scss/mixins/_breakpoint.scss";
@import "assets/scss/_helpers.scss";
@import "assets/scss/_base.scss";
@import "assets/scss/layout.scss";

body{
  font-family: 'Roboto', sans-serif;
}

</style>
