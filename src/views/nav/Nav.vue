<template>
  <div class="header" :class="showNav ? 'shownav' : 'hidenav'" ref="header">
    <a class="logo" href="./index.html">CHELSEA'S</a>
    <ul class="nav">
      <li 
        :class="{'active-color' : index === anchorIndex}"
        v-for="(item, index) in category" :key="index" @click="handleClickAnchor(index)"
      >
        {{item}}
      </li>
    </ul>
    <div class="right"><transition>
      <div class="round" @click="handleClickRound"></div>
    </transition></div>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  props: {
    anchorIndex: Number
  },
  data () {
    return {
      category: ['Home', 'About', 'Projects', 'Otherworks', 'Contact'],
      windowTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
      showNav: true,
      topStyle: true
    }
  },
  methods: {
    dynamicNav () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > (document.body.clientHeight - 60)) {
        this.showNav = scrollTop >= this.windowTop ? false : true
        this.windowTop = scrollTop
      } else {
        this.showNav = true
      }
    },
    handleClickAnchor (index) {
      this.$emit('goAnchor', index)
    },
    handleClickRound() {
      this.$emit('resetSkin')
    }
  },
  watch: {
    activeIndex: function () {

    }
  },
  mounted () {
    window.addEventListener('scroll', this.utils.throttle(this.dynamicNav), true)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.utils.throttle(this.dynamicNav), true)
  }
}
</script>


<style lang="stylus" scoped>
  .header
    z-index: 99
    position: sticky
    top: 0px
    margin-top: 4px
    width: 100%
    height: 60px
    background: #fdfcf6
    border-bottom: 1px dotted var(--theme-translucent)
    box-sizing: border-box
    opacity: .95
    display: flex
    transition: all .6s ease
    .logo
      float: left
      padding-left: 25px
      height: 60px
      line-height: 60px
      font-size: 18px
      font-weight: 600
      color: var(--theme-color)
      @media screen and (max-width: 768px)
        display: none
    .nav
      flex: 1
      height: 60px
      display: flex
      justify-content: center
      align-items: center
      @media screen and (max-width: 768px)
        padding: 0 10px
        justify-content: space-around
      li
        position: relative
        margin: 0 25px
        line-height: 60px
        font-size: 14px
        cursor: pointer
        transition: all .3s
        @media screen and (max-width: 768px)
          margin: 0
        &:hover:before
          width: 100%
          left: 0
          border-radius: 1px
        &:before
          content: ''
          position: absolute
          bottom: 0px
          left: 50%
          width: 0
          height: 2px
          background: var(--theme-color)
          transition: all .3s
      .active-color
        color: var(--theme-color)
        font-weight: 600
        &:before
          width: 100%
          left: 0
          border-radius: 1px
    .right
      float: right
      position: relative
      width: 80px
      height: 60px
      @media screen and (max-width: 992px)
        display: none
    .round
      position: absolute
      right: 40px
      width: 22px
      height: 22px
      background: var(--theme-color)
      border-radius: 50%
      border: 8px solid var(--theme-color)
      cursor: pointer
      transition: all .6s ease, background .2s, opacity .2s
      &:before
        content: ''
        width: 4px
        height: 4px
        position: absolute
        top: 9px
        right: 9px
        background: #fdfcf6
        border-radius: 50%
        transition: opacity .3s ease
      &:hover:before
        opacity: 0
      &:active
        opacity: .7
  .shownav
    transform: translateY(0)
    .round
      top: 11px
      border: 8px solid #fdfcf6
  .hidenav
    transform: translateY(-100%)
    .round
      top: 41px
      border: 8px solid var(--theme-color)
      &:hover
        top: 46px
        transition: top .3s ease-in-out, background .2s, opacity .2s, border .2s
      &:before
        opacity: 0
</style>
