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
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
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
    window.addEventListener('scroll', this.positionState, true)
    window.addEventListener('resize', this.positionState, true)
    window.addEventListener('scroll', this.checkInView, true)
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
    background: #F1B908
    &:after
      clear: both
    .cate
      font-weight: 600
      font-size: 70px
      color: #FDFDF9
      letter-spacing: 2px
      font-variant: small-caps
    .photo
      position: absolute
      top: 100px
      right: -65px
      width: 130px
      height: 130px
      border-radius: 50%
      background: khaki
      overflow: hidden
      transform: scale(.5)
      transition: all .8s ease
    .in-view
      transform: scale(1)
      img
        width: 100%

</style>
