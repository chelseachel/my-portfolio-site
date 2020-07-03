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
    <div class="img">
      <img src=""/>
    </div>
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
    this.positionState()
    window.addEventListener('scroll', this.utils.throttle(this.checkInView), true)
    window.addEventListener('resize', this.utils.throttle(this.checkInView), true)
    window.addEventListener('scroll', this.utils.throttle(this.positionState), true)
    window.addEventListener('resize', this.utils.throttle(this.positionState), true)
  },
  updated () {
    this.positionState()
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.utils.throttle(this.checkInView), true)
    window.removeEventListener('resize', this.utils.throttle(this.checkInView), true)
    window.removeEventListener('scroll', this.utils.throttle(this.positionState), true)
    window.removeEventListener('resize', this.utils.throttle(this.positionState), true)
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
      width: 150px
      display: flex
      flex-flow: column
      position: absolute
      left: 5%
      top: 50%
      transform: translateY(-56%)
      opacity: 0
      transition: all .8s ease-in-out
      @media screen and (max-width: 768px)
        left: 0
    .in-view
      opacity: 1
      transform: translateY(-62%)
      .title
        width: 150px
        line-height: 4em
        text-align: right
        font-size: 32px
        font-weight: 600
        @media screen and (max-width: 768px)
          font-size: 30px
        span
          color: var(--theme-color)
      .nav
        width: 150px
        line-height: 4em
        white-space: nowrap
        font-size: 15px
        font-weight: 400
        @media screen and (max-width: 768px)
          font-size: 14px
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
              background: var(--theme-color)
              z-index: -1
              transition: all .3s
          .active-class
            font-weight: 600
            &:before
              width: 100%
              left: 0
              opacity: 1
    .img
      max-width: calc(90% - 160px)
      width: 420px
      max-width: calc(90% - 160px)
      height: 500px
      max-height: 60vh
      background: #D0CAC2
      position: absolute
      top: 20%
      right: 0px
      img
        max-width: 100%
        max-height: 100%
        position: relative
        top: 0px
        right: 0px
  @media screen and (max-width: 768px)
    .display
      display: none
      
</style>
