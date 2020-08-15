<template>
  <div class="display" ref="sticky">
    <div class="title">Projects<span>.</span></div>
    <ul class="nav" :class="inView ? 'in-view' : ''" ref="viewCheck">
      <li 
        v-for="(item, index) in list" :key="index" 
         
        @click="handleClickIndex(index)"
      >
        <span :class="index === activeIndex ? 'active-class' : ''">
          {{item}} 
        </span>
      </li>
    </ul>
    
    <div class="img" 
      :class="inView ? 'img-in-view' : ''"
      >
      <transition mode="out-in">
        <img 
          v-for="(item, index) in gifs" 
          :key="index"
          v-if="index === activeIndex"
          :src="gifs[index]" 
          :style="lowHeight(index) ? {marginTop: '50px'} : {}"
        />
      </transition>
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
    offset: Number,
    gifs: Array
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
    },
    lowHeight(index) {
      return index === 0 || index === 3 || index === 4 || index === 5
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
    z-index: 2
    .title
      position: absolute
      top: 8%
      left: 9%
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
      transition: all .7s ease-in-out
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
      top: calc(20% + 50px)
      right: -20px
      text-align: center
      transition: all .7s ease-in-out
    .img-in-view
      opacity: 1
      top: 20%
      img
        max-width: 100%
        max-height: 100%
        border-radius: 5px
        // box-shadow: 0 2px 4px 1px rgba(238, 238, 238, .04)
        box-shadow: 0 2px 4px 1px rgba(18, 22, 33, .02)
    .blob-wrapper
      // display: none
      opacity: .5
      position: absolute
      bottom: -4%
      left: -5%
      width: 60%
      height: 0
      padding-bottom: 60%
      transform: scaleX(1.2) rotate(240deg)
      z-index: -1
  .v-enter, .v-leave-to
    opacity: 0
    transform: scale(.9)
  .v-enter-to, .v-leave
    opacity: 1
    transform: scale(1)
  .v-enter-active, .v-leave-active
    transition: all .25s ease-in-out
</style>
