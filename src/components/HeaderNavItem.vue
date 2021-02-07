<template>
  <li>
    <a :href="'#' + text.section" v-bind:data-section="text.section">
      {{ text.text }}
    </a>
  </li>
</template>

<script>
export default {
  name: "HeaderNavItem",
  props: {
    text: Object
  },
  methods: {

  },

}
</script>

<style lang="scss" scoped>
li {
  &:not(:last-child) {
    margin-right: 15px;
    @media (max-width: 1279px) {
      margin-right: 0;
    }
  }
  a{
    color: inherit;
    text-decoration: none;
    position: relative;
  }
  &.active{
    a{
      color: $main-red;
      &:after{
        content: '';
        position: absolute;
        width: 1px;
        height: 20px;
        background-color: $main-red;
        left: 50%;
        bottom: -25px;
      }
    }
  }
  &:hover{
    color: $main-red;
  }
}
</style>