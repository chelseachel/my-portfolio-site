<template>
  <div class="left" :style="{position: position, top: top + 'px'}">
    <div class="cate">
      About.
    </div>
    <div class="photo"></div>
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
      top: 0
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
    }
  },
  mounted () {
    window.addEventListener('scroll', this.positionState, true)
    window.addEventListener('resize', this.positionState, true)
  }
}
</script>


<style lang="stylus" scoped>
  .left
    width: 40%
    height: 100vh
    flex: 2
    display: flex
    justify-content: center
    align-items: center
    background: #F1B908
    &:after
      clear: both
    .cate
      font-weight: 800
      font-size: 60px
      color: #FDFDF9
      letter-spacing: 2px
      font-variant: small-caps
    .photo
      position: absolute
      top: 100px
      right: -60px
      width: 120px
      height: 120px
      border-radius: 50%
      background: #eee
</style>
