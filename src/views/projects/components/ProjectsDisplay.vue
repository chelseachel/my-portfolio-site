<template>
  <div class="display" ref="sticky">
    <div class="title">Projects<span>.</span></div>
    <ul class="nav" :class="inView ? 'in-view' : ''" ref="viewCheck">
      <li 
        v-for="(item, index) in list" :key="index" 
         
        @click="handleClickIndex(index)"
      >
        <span :class="index == activeIndex ? 'active-class' : ''">
          {{item}} 
        </span>
      </li>
    </ul>
    <div class="img">
      <img src="@/assets/images/1.jpg"/>
    </div>
    <div class="blob-wrapper">
      <morphing-blob></morphing-blob>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { checkInView } from '@/common/mixin.js'
import MorphingBlob from '../../common/MorphingBlob'
export default {
  name: 'ProjectsDisplay',
  components: {
    MorphingBlob
  },
  mixins: [checkInView],
  props: {
    scrollHeight: Number,
    offset: Number
  },
  data () {
    return {
      list: ['My Portfolio', '滑动交互记账 App', '旅游网站 App', '分页器插件', '颜色排序游戏', '黑白棋游戏' ]
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
      const el = this.$refs.sticky
      if (scrollTop >= this.offset && scrollTop < (this.offset + this.scrollHeight - clientHeight)) {
        el.style.position = 'fixed'
        el.style.top = 0
      } else if (scrollTop >= (this.offset + this.scrollHeight - clientHeight)) {
        el.style.position = 'absolute'
        el.style.top = this.scrollHeight - clientHeight + 'px'
      } else if (scrollTop < this.offset) {
        el.style.position = 'absolute'
        el.style.top = 0
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
  .display
    position: sticky
    top: 0
    width:45vw
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    overflow: hidden
    z-index: 2
    .title
      position: absolute
      top: 6%
      left: 8%
      // font-size: 33px
      font-size: 3.5vw
      font-weight: 600
      @media screen and (min-width: 1440px)
        font-size: 50px
      @media screen and (max-width: 992px)
        font-size: 30px
      span
        color: var(--theme-color)
    .nav
      height: 100vh
      display: flex
      flex-flow: column
      justify-content: center
      align-items: flex-end
      position: absolute
      top: calc(50% + 50px)
      left: 10%
      transform: translateY(-50%)
      opacity: 0
      transition: all .6s ease-in-out
    .in-view
      opacity: 1
      top: 50%
      li
        width: 100%
        line-height: 3.7em
        white-space: nowrap
        font-size: 15px
        font-weight: 400
        text-align: left
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
            // left: 100%
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
            // left: 0
            opacity: 1
    .img
      width: 450px
      max-width: calc(90% - 170px)
      height: 500px
      max-height: 60vh
      position: absolute
      top: 20%
      right: 0px
      img
        max-width: 100%
        max-height: 100%
        position: relative
        top: 0px
        right: 0px
    .blob-wrapper
      position: absolute
      top: 30%
      right: 20%
      width: 60%
      height: 60%
      min-width: 300px
      min-height: 300px
      z-index: -1
      
</style>
