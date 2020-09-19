<template>
  <div class="sticky" ref="sticky">
    <div class="wrapper">
      <div class="cate">
        About.
      </div>
      <div class="photo" ref="viewCheck" :class="inView ? 'in-view' : ''">
        <img src="https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/portrait.jpg">
      </div>
    </div>
  </div>
</template>

<script>
import { checkInView } from '@/common/mixin.js'
export default {
  name: 'AboutLeft',
  mixins: [checkInView],
  props: {
    scrollHeight: Number
  },
  methods: {
    positionState () {
      const clientHeight = document.body.clientHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const el = this.$refs.sticky
      if (scrollTop >= clientHeight && scrollTop < this.scrollHeight) {
        el.style.position = 'fixed'
        el.style.top = 0
      } else if (scrollTop >= this.scrollHeight) {
        el.style.position = 'relative'
        el.style.top = this.scrollHeight - clientHeight + 'px'
        console.log(this.scrollHeight - clientHeight,el);
      } else if (scrollTop < clientHeight) {
        el.style.position = 'relative'
        el.style.top = 0
      }
    }
  },
  mounted () {
    const clientWidth = document.body.clientWidth
    if (this.utils.isIE() && clientWidth > 992) {
      window.addEventListener('scroll', this.utils.throttle(this.positionState), true)
      window.addEventListener('resize', this.utils.throttle(this.positionState), true)
    }
  },
  updated () {
    const clientWidth = document.body.clientWidth
    if (this.utils.isIE() && clientWidth > 992) {
      this.positionState()
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.utils.throttle(this.positionState), true)
    window.removeEventListener('resize', this.utils.throttle(this.positionState), true)
  }
}
</script>


<style lang="stylus" scoped>
  .sticky
    position: sticky
    top: 0
    width:45vw
    height: 100vh
    .wrapper
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
      .photo
        position: absolute
        top: 100px
        right: -65px
        width: 130px
        height: 130px
        border-radius: 50%
        background: #eee
        overflow: hidden
        transform: scale(0)
        transition: all .8s ease
        @media screen and (max-width: 1100px)
          right: -50px
          width: 100px
          height: 100px
        img
          position: absolute
          bottom: 0
      .in-view
        transform: scale(1)
        img
          width: 100%
</style>
