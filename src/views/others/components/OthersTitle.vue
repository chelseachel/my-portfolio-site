<template>
  <div class="container">
    <div class="wrapper">
      <div class="title" ref="viewCheck" :class="inView ? 'in-view' : ''">
        <span class="normal"
          v-for="(item, index) in word1" :key="'word1' + index"
          v-html="item"
          :style="{'--delay': `${200 + index * 60}ms`}"
        >
        </span> 
        <span class="normal"
          v-for="(item, index) in word2" :key="'word2' + index"
          v-html="item"
          :style="{'--delay': '260ms'}"
        >
        </span> 
        <span class="yellow"
          v-for="(item, index) in word3" :key="'word3' + index"
          v-html="item"
          :style="{'--delay': `${200 + index * 60}ms`}"
        >
        </span> 
        <span class="normal"
          v-for="(item, index) in word4" :key="'word4' + index"
          v-html="item"
          :style="{'--delay': `${200 + index * 60}ms`}"
        >
        </span> 
        <span class="yellow" :style="{'--delay': '260ms'}">.</span>
      </div>
    </div>
  </div>
</template>

<script>
import { checkInView } from '@/common/mixin.js'
export default {
  name: 'OthersTitle',
  mixins: [checkInView],
  data () {
    return {
      word1: ['W', 'h', 'a', 't', '&nbsp;',],
      word2: ['I', '&nbsp;'],
      word3: ['m', 'a', 'd', 'e', '&nbsp;'],
      word4: ['e', 'l', 's', 'e']
    }
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .container
    position: relative
    height: 200px
    margin-bottom: 30px
    box-sizing: border-box
    @media screen and (max-width: 992px)
      margin-bottom: 0px
    .wrapper
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      .title
        position: relative
        font-size: 56px
        font-weight: 400
        text-align: center
        white-space: nowrap
        transition: all .6s ease
        @media screen and (min-width: 769px) and (max-width: 992px)
          font-size: 4.2vw
          font-weight: 600
        @media screen and (max-width: 768px)
          font-size: 32px
          font-weight: 600
        span
          display: inline-block
          color: #E0DAD2
          transition: all .2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          transition-delay: var(--delay)
        span.yellow
          font-weight: 600
      .in-view
        span.normal
          color: $color1
        span.yellow
          color: var(--theme-color)
      
    
</style>
