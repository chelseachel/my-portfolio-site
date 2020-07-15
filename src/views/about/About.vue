<template>
  <div class="about" ref="about">
    <common-pad-title>About</common-pad-title>
    <about-left :scrollHeight="scrollHeight" v-if="!isMobile"></about-left>
    <about-right></about-right>
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
    width: 100vw
    min-height: 100vh
</style>
