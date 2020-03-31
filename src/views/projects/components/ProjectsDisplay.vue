<template>
  <div class="display" :style="{position: position, top: top + 'px'}" ref="display">
    <div class="wrapper">
      <div class="title">Projects<span>.</span></div>
      <ul class="nav">
        <li 
          v-for="(item, index) in list" :key="index" 
           
          @click="handleClickIndex(index)"
        >
          <span :class="index == activeIndex ? 'active-class' : ''">
            {{item}} 
          </span>
        </li>
      </ul>
    </div>
    <div class="img"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
      list: ['My Portfolio Site', 'Tally App', 'Qunaer', 'Color Sort Game', 'Othello Game', 'Font Optimization']
    }
  },
  computed: {
    ...mapState([
      'activeIndex'
    ]),
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
    },
    handleClickIndex (index) {
      this.handleStoreIndex(index)
      this.$emit('scrollToIndex', index)
    },
    handleStoreIndex (index) {
      this.$store.commit('changeActiveIndex', index)
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
    overflow: hidden
    z-index: 2
    transition: opacity .5s ease
    .wrapper
      width: 130px
      display: flex
      flex-flow: column
      position: absolute
      left: 30px
      top: 50%
      transform: translateY(-62%)
      // transform-origin:0, 0
      .title
        width: 140px
        line-height: 4em
        text-align: right
        font-size: 30px
        font-weight: 600
        // font-variant: small-caps
        // &:after
        //   content: ''
        //   position: absolute
        //   top: 50px
        //   right: -20px
        //   width: 6px
        //   height: 20px
        //   border-radius: 3px
        //   background: #F1B908
        span
          color: #F1B908
      .nav
        width: 140px
        line-height: 4em
        // text-align: right
        font-size: 15px
        font-weight: 400
        li
          width: 100%
          text-align: right
          span
            position: relative
            cursor: pointer
            transition: all .5s
            &:hover:before
              width: 100%
              left: 0
              opacity: 1
            &:before
              content: ''
              position: absolute
              bottom: -1px
              left: 100%
              width: 0
              height: 2px
              opacity: 0
              border-radius: 1px
              background: #F1B908
              z-index: -1
              transition: all .3s
            // &:after
            //   content: ''
            //   position: absolute
            //   top: 50%
            //   right: -18px
            //   transform: translateY(-50%)
            //   width: 10px
            //   height: 10px
            //   border-radius: 50%
            //   background: transparent
            //   transition: all .5s
          .active-class
            // &:after
            //   background: #F1B908
            &:before
              width: 100%
              height: 2px
              left: 0
              opacity: 1
    .img
      width: 250px
      height: 400px
      background: #D0CAC2
      position: absolute
      top: 140px
      right: 10px
</style>
