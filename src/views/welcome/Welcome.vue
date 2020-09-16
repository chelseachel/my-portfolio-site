<template>
  <div class="welcome">
    <transition>
      <welcome-bg v-if="show"></welcome-bg>
    </transition>
    <welcome-info></welcome-info>
    <transition>
      <welcome-scroll v-if="show"></welcome-scroll>
    </transition>
  </div>
</template>

<script>
import WelcomeBg from './components/WelcomeBg'
import WelcomeInfo from './components/WelcomeInfo'
import WelcomeScroll from './components/WelcomeScroll'
export default {
  name: 'Welcome',
  components: {
    WelcomeBg, WelcomeInfo, WelcomeScroll
  },
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.show = true
  }
}
</script>


<style lang="stylus" scoped>
  .welcome
    position:relative
    width: 100vw
    height: 100vh
    overflow: hidden
  .v-enter
    opacity: 0
  .v-enter-active
    transition: opacity 3s ease 1s
</style>
