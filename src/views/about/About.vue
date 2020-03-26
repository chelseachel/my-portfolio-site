<template>
  <div class="about" ref="about" id="about">
    <about-right></about-right>
    <about-left :scrollHeight="scrollHeight"></about-left>
  </div>
</template>

<script>
import AboutLeft from './components/AboutLeft'
import AboutRight from './components/AboutRight'
export default {
  name: 'About',
  components: {
    AboutLeft, AboutRight
  },
  data () {
    return {
      scrollHeight: 0
    }
  },
  methods: {
    getHeight () {
      this.scrollHeight = parseInt(this.$refs.about.getBoundingClientRect().height)
    }
  },
  mounted () {
    this.getHeight()
    window.addEventListener('resize', this.getHeight, true)
  }
}
</script>


<style lang="stylus" scoped>
  .about
    position: relative
    width: 100vw

</style>
