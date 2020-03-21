<template>
  <div class="welcome">
    <welcome-info></welcome-info>
    <transition>
      <welcome-scroll v-if="show"></welcome-scroll>
    </transition>
  </div>
</template>

<script>
import WelcomeInfo from './components/WelcomeInfo'
import WelcomeScroll from './components/WelcomeScroll'
export default {
  name: 'Welcome',
  components: {
    WelcomeInfo, WelcomeScroll
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showCompo () {
      let _this = this
      setTimeout(function () {
        _this.show = true
      }, 2000)
    }
  },
  mounted () {
    this.showCompo()
  }
}
</script>


<style lang="stylus">
  .welcome
    position:relative
    width: 100vw
    height: calc(100vh - 50px)
    display: flex
    flex-flow: column
    overflow: visible
  .v-enter
    opacity: 0
  .v-enter-active
    transition: opacity .5s ease  
</style>
