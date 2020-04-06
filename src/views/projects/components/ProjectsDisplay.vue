<template>
  <div class="display" :style="{position: position, top: top + 'px'}" ref="display">
    <div class="wrapper" :class="inView ? 'in-view' : ''" ref="wrapper">
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
      inView: false,
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
      } else if (scrollTop >= (this.offset + this.scrollHeight - clientHeight)) {
        this.position = 'absolute'
        this.top = this.scrollHeight - clientHeight
      } else if (scrollTop < this.offset) {
        this.position = 'absolute'
        this.top = 0
      }
    },
    handleClickIndex (index) {
      this.handleStoreIndex(index)
      this.$emit('scrollToIndex', index)
    },
    handleStoreIndex (index) {
      this.$store.commit('changeActiveIndex', index)
    },
    checkInView () {
      const el = this.$refs.wrapper
      if (this.utils.isElementInView(el)) {
        this.inView = true
      } else {
        this.inView = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.checkInView, true)
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
    overflow: hidden
    z-index: 2
    .wrapper
      width: 130px
      display: flex
      flex-flow: column
      position: absolute
      left: 30px
      top: 50%
      transform: translateY(-56%)
      opacity: 0
      transition: all 1s ease
    .in-view
      opacity: 1
      transform: translateY(-62%)
      .title
        width: 140px
        line-height: 4em
        text-align: right
        font-size: 31px
        font-weight: 600
        span
          color: #F1B908
      .nav
        width: 140px
        line-height: 4em
        font-size: 15px
        font-weight: 400
        li
          width: 100%
          text-align: right
          span
            position: relative
            cursor: pointer
            transition: all .3s
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
          .active-class
            &:before
              width: 100%
              height: 2px
              left: 0
              opacity: 1
    .img
      max-width: calc(100% - 200px)
      width: 50%
      height: 400px
      background: #D0CAC2
      position: absolute
      top: 20%
      right: 10px
</style>
