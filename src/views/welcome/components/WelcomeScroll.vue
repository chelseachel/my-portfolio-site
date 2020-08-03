<template>
  <div class="scroll" :style="parallaxStyle" ref="parallax">
    <div class="mouse"></div>
    <div class="arrow"></div>
  </div>
</template>

<script>
import { scrollParallax } from '@/common/mixin.js'
export default {
  name: 'WelcomeScroll',
  mixins: [scrollParallax],
  data () {
    return {
      speed: .1
    }
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .scroll  
    position: absolute;
    bottom: 100px;
    left: 0;
    right: 0;
    margin: auto
    width: 60px
    height: 60px
    transition: all .5s ease-out
    .mouse
      position:relative
      width: 14px
      height: 26px
      margin: auto
      border: 2px solid $color1
      border-radius: 9px
      &:before
        content: ''
        position: absolute
        left: 6px
        top: -6px
        width: 2px
        height: 6px 
        border-radius: 1px
        background: $color1
      &:after
        content: ''
        position: absolute
        left: 6px
        top: 5px
        width: 2px
        height: 2px
        border-radius: 1px
        background: $color1
        animation: scroll 1.6s infinite
        @keyframes scroll
          0%
            opacity: 0
            transform: translateY(0)
          60%
            opacity: 1
          80%
            opacity: 1
            transform: translateY(4px)
          100%
            opacity: 0
            transform: translateY(4px)
    .arrow
      position:relative
      left: 31px
      top: 6px
      animation: down 1.6s infinite
      @keyframes down
        0%
          opacity: 0
          transform: translateY(0)
        90%
          opacity: 1
          transform: translateY(4px)
        100%
          opacity: 0
          transform: translateY(4px)
      &:before
        content: ''
        position: absolute
        left: 0
        top: 3px
        width: 2px
        height: 7px
        border-radius: 1px
        background: $color1
        transform: rotate(45deg)
      &:after
        content: ''
        position: absolute
        left: -4px
        top: 3px
        width: 2px
        height: 7px 
        border-radius: 1px
        background: $color1
        transform: rotate(-45deg)
</style>
