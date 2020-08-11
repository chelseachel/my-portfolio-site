<template>
  <div class="about" ref="about">
    <common-pad-title>About</common-pad-title>
    <div class="main">
      <div class='left' v-if="!isMobile">
        <about-left :scrollHeight="scrollHeight"></about-left>
      </div>
      <div class="right">
        <about-right></about-right>
      </div>
    </div>
  </div>
</template>

<script>
import CommonPadTitle from '../common/CommonPadTitle'
import AboutLeft from './components/AboutLeft'
import AboutRight from './components/AboutRight'
export default {
  name: 'About',
  components: {
    CommonPadTitle, AboutLeft, AboutRight
  },
  data () {
    return {
      scrollHeight: 0,
      isMobile: this.utils.isMobile()
    }
  },
  methods: {
    getHeight () {
      this.scrollHeight = parseInt(this.$refs.about.getBoundingClientRect().height)
    }
  },
  mounted () {
    this.getHeight()
    window.addEventListener('resize', this.utils.throttle(this.getHeight), true)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.utils.throttle(this.getHeight), true)
  }
}
</script>


<style lang="stylus" scoped>
  .about
    position: relative
    .main
      position: relative
      width: 100vw
      min-height: 100vh
      display: flex
      .left
        display: block
        flex: 9
        order: 1
        @media screen and (max-width: 992px)
          display: none
      .right
        flex: 11
        order: 2
</style>
