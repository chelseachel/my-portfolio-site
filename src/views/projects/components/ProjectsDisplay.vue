<template>
  <div class="display" :style="{position: position, top: top + 'px'}" ref="display">
    <div class="wrapper">
      <div class="title">Projects</div>
      <ul class="nav">
        <li v-for="(item, index) in list" :key="index">{{item}}</li>
      </ul>
    </div>
    <div class="img"></div>
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
      top: 0,
      list: ['My Portfolio Site', 'Tally App', '去哪儿网', 'Color Sort Game', 'Othello Game', '字体排版优化']
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
    width: 45%
    height: 100vh
    background: transparent
    opacity: .7
    z-index: 2
    transition: opacity .5s ease
    .wrapper
      display: flex
      flex-flow: column
      position: absolute
      left: 50px
      top: 9%
      .title
        line-height: 4em
        text-align: left
        font-size: 28px
        font-weight: 600
        // font-variant: small-caps
      .nav
        line-height: 4em
        text-align: right
        font-size: 15px
        font-weight: 200
        li
          position: relative
          &:first-child:after
            content: ''
            position: absolute
            top: 50%
            right: -20px
            transform: translateY(-50%)
            width: 10px
            height: 10px
            border-radius: 50%
            background: #F1B908
    .img
      width: 250px
      height: 400px
      background: #D0CAC2
      position: absolute
      top: 140px
      right: 10px
</style>
