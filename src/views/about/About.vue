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
      this.scrollHeight = parseInt(this.$refs.about.scrollHeight)
    }
  },
  mounted () {
    this.getHeight()
    
  }
}
</script>


<style lang="stylus">
  .about
    position: relative
    width: 100vw
    // height: 100vh
    // display: flex

</style>
