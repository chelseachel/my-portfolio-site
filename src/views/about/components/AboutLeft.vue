<template>
  <div class="left" :style="{position: position, top: top + 'px'}">
    <div class="cate">
      About.
    </div>
    <div class="photo" ref="photo" :class="inView ? 'in-view' : ''">
      <img src="@/assets/images/26.jpg">
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutLeft',
  props: {
    scrollHeight: Number
  },
  data () {
    return {
      position: 'absolute ',
      top: 0,
      inView: false
    }
  },
  methods: {
    positionState () {
      const clientHeight = document.body.clientHeight
      const clientWidth = document.body.clientWidth
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (clientWidth > 768) {
        if (scrollTop >= clientHeight && scrollTop < this.scrollHeight) {
          this.position = 'fixed'
          this.top = 0
        } else if (scrollTop >= this.scrollHeight) {
          this.position = 'absolute'
          this.top = this.scrollHeight - clientHeight
        } else if (scrollTop < clientHeight) {
          this.position = 'absolute'
          this.top = 0
        }
      }
    },
    checkInView () {
      const el = this.$refs.photo
      if (this.utils.isElementInView(el)) {
        this.inView = true
      } else {
        this.inView = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.utils.throttle(this.positionState), true)
    window.addEventListener('resize', this.utils.throttle(this.positionState), true)
    window.addEventListener('scroll', this.utils.throttle(this.checkInView), true)
    window.addEventListener('resize', this.utils.throttle(this.checkInView), true)
  },
  updated () {
    this.positionState()
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.utils.throttle(this.positionState), true)
    window.removeEventListener('resize', this.utils.throttle(this.positionState), true)
    window.removeEventListener('scroll', this.utils.throttle(this.checkInView), true)
    window.removeEventListener('resize', this.utils.throttle(this.checkInView), true)
  }
}
</script>


<style lang="stylus" scoped>
  .left
    width: 45%
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    background: var(--theme-color)
    &:after
      clear: both
    .cate
      font-weight: 600
      font-size: 64px
      color: #FDFDF9
      // letter-spacing: 2px
      // font-variant: small-caps
    .photo
      position: absolute
      top: 100px
      right: -65px
      width: 130px
      height: 130px
      border-radius: 50%
      background: khaki
      overflow: hidden
      transform: scale(0)
      transition: all .8s ease
      @media screen and (max-width: 1024px)
        right: -50px
        width: 100px
        height: 100px
    .in-view
      transform: scale(1)
      img
        width: 100%
  @media screen and (max-width: 768px)
    .left
      display: none
</style>
