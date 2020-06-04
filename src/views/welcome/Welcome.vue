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
      setTimeout(() => {
        this.show = true
      }, 2000)
    }
  },
  mounted () {
    this.showCompo()
  }
}
</script>


<style lang="stylus" scoped>
  .welcome
    position:relative
    width: 100vw
    height: 100vh
  .v-enter
    opacity: 0
  .v-enter-active
    transition: opacity 1s ease  
</style>
