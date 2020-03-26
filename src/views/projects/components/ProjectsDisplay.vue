<template>
  <div class="display" :style="{position: position, top: top + 'px'}" ref="display">
    <div class="wrapper">
      <div class="title">Projects.</div>
      <div class="nav">
        My Portfolio Site<br>
        Tally App<br>
        去哪儿网<br>
        Color Sort Game<br>
        Othello Game<br>
        字体排版优化<br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsDisplay',
  props: {
    scrollHeight: Number,
    offset: Number
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
      if (scrollTop >= this.offset && scrollTop < (this.offset + this.scrollHeight - clientHeight)) {
        this.position = 'fixed'
        this.top = 0
        this.$refs.display.style.opacity = '1'
      } else if (scrollTop >= (this.offset + this.scrollHeight - clientHeight)) {
        this.position = 'absolute'
        this.top = this.scrollHeight - clientHeight
        this.$refs.display.style.opacity = '.7'
      } else if (scrollTop < this.offset) {
        this.position = 'absolute'
        this.top = 0
        this.$refs.display.style.opacity = '.7'
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
  .display
    width: 50%
    height: 100vh
    background: transparent
    opacity: .7
    z-index: 2
    transition: opacity .5s ease
    .wrapper
      position: absolute
      left: 50px
      top: 50%
      
      transform: translateY(-50%)
      display: block
      .title
        line-height: 4em
        text-align: left
        font-size: 28px
        font-weight: 600
        // font-variant: small-caps
      .nav
        line-height: 4em
        text-align: left
        // padding: 20px 25px
        // border: 1px solid #F1B908
        // border-radius: 6px
</style>
