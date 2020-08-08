<template>
  <div class="display" :style="{position: position, top: top + 'px'}" ref="display">
    <div class="wrapper" :class="inView ? 'in-view' : ''" ref="viewCheck">
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
import { checkInView } from '@/common/mixin.js'
export default {
  name: 'ProjectsDisplay',
  mixins: [checkInView],
  props: {
    scrollHeight: Number,
    offset: Number
  },
  data () {
    return {
      position: 'absolute ',
      top: 0,
      list: ['My Portfolio', '滑动交互记账 App', '分页器插件', '旅游网站 App', '颜色排序游戏', '黑白棋游戏' ]
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
    }
  },
  mounted () {
    window.addEventListener('scroll', this.utils.throttle(this.positionState), true)
    window.addEventListener('resize', this.utils.throttle(this.positionState), true)
  },
  updated () {
    this.positionState()
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.utils.throttle(this.positionState), true)
    window.removeEventListener('resize', this.utils.throttle(this.positionState), true)
  }
}
</script>


<style lang="stylus" scoped>
  .display
    width: 45%
    height: 100vh
    overflow: hidden
    z-index: 2
    .wrapper
      width: 150px
      height: 100vh
      display: flex
      flex-flow: column
      justify-content: center
      align-items: flex-end
      position: absolute
      left: 5%
      opacity: 0
      transition: all .6s ease-in-out
      @media screen and (max-width: 992px)
        left: 0
    .in-view
      opacity: 1
      transform: translateY(-6%)
      .title
        line-height: 4em
        font-size: 32px
        font-weight: 600
        @media screen and (max-width: 992px)
          font-size: 30px
        span
          color: var(--theme-color)
      .nav
        width: 150px
        line-height: 4em
        white-space: nowrap
        font-size: 15px
        font-weight: 400
        @media screen and (max-width: 992px)
          font-size: 14px
        li
          width: 100%
          text-align: right
          // font-weight: 600
          span
            position: relative
            cursor: pointer
            transition: all .2s
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
            // font-weight: 600
            // color: var(--theme-color)
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
  @media screen and (max-width: 992px)
    .display
      display: none
      
</style>
