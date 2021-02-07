<template>
  <div class="switch" @click="changeLanguage">
    <div class="current">
      <span>en</span>
      <i class="arrow arrow-down"></i>
    </div>
    <div class="options">
      <ul class="options-list">
        <li data-lang="en" @click="setEng">English</li>
        <li data-lang="ru" @click="setRu">Русский</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitch",
  methods: {
    changeLanguage: function () {
      let switcher = document.querySelector('.switch')
      if (switcher.classList.contains('show-options')) {
        switcher.classList.remove('show-options')
        return false
      }
      switcher.classList.add('show-options');

      setTimeout(function () {
        switcher.classList.add('anim-options');
      }, 50);

      setTimeout(function () {
        switcher.classList.add('show-shadow');
      }, 200);
    },
    setEng: function () {
      let switcher = document.querySelector('.switch')
      let options = document.querySelector('.options')
      switcher.classList.remove('anim-options');
      switcher.classList.remove('show-shadow');
      options.classList.remove('selected');
      switcher.querySelector('span').textContent = 'en'
      this.$store.dispatch('setLangEng')
    },
    setRu: function () {
      let switcher = document.querySelector('.switch')
      let options = document.querySelector('.options')
      switcher.classList.remove('anim-options');
      switcher.classList.remove('show-shadow');
      options.classList.remove('selected');
      switcher.querySelector('span').textContent = 'ru'
      this.$store.dispatch('setLangRu')
    }
  }
}
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  @media (max-width: 1279px) {
    margin-left: auto;
  }
}

.current {
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: flex;
  background-color: rgba(0, 0, 0, 0);
  transition: all .2s ease-out;
  border-radius: 3px;
  padding: 0 .2em 0 .7em;

  span {
    display: inline-block;
    line-height: 1;
    margin-right: 7px;
  }

  .arrow {
    display: inline-block;
    width: 20px;
    height: 20px;

    &:after {
      content: '';
      display: block;
      margin: 0;
      padding: 0;
      width: 9px;
      height: 9px;
      border-top: 1px solid $main-red;
      border-right: 1px solid $main-red;
      -moz-transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
      -o-transform: rotate(135deg);
      -ms-transform: rotate(135deg);
      transform: rotate(135deg);
    }
  }

}

.options {
  background: #FFFFFF;
  position: absolute;
  right: 0;
  top: 20px;
  // z-index: 5;
  z-index: 0;
  opacity: 0;
  // transform: scale(.8);
  // transform-origin: 100% 0;
  transition: all .36s ease-out;
  display: none;
  overflow: hidden;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);

  .switch.show-options & {
    display: block;
    z-index: 5;
  }

  .switch.anim-options & {
    // transform: scale(1);
    opacity: 1;
  }

  .switch.show-shadow & {
    box-shadow: 0 2px 12px -4px rgba(0, 0, 0, .4);
  }
}

.options-list {
  margin: 0;
  padding: .4rem 0.8em;
  position: relative;
  z-index: 5;

  li {
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 0.75em;
    border-bottom: 1px solid #E1E4E6;
    transform: translateX(10px);
    transition: all .24s ease-out;
    transition-delay: .1s;
    opacity: 0;
    font-size: 1rem;
    line-height: 1.3;
    white-space: nowrap;

    &:last-child {
      border-bottom: none;
    }

    &:nth-child(1) {
      transition-delay: .1s;
    }

    &:nth-child(2) {
      transition-delay: .15s;
    }

    &:nth-child(3) {
      transition-delay: .2s;
    }

    &:nth-child(4) {
      transition-delay: .25s;
    }

    &:nth-child(5) {
      transition-delay: .3s;
    }

    .switch.anim-options & {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>