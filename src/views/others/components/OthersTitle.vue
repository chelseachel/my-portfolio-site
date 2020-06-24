<template>
  <div class="container">
    <div class="wrapper">
      <div class="title" ref="title" :class="inView ? 'in-view' : ''">
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
      <!-- <div class="psuedo"></div> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'OthersTitle',
  data () {
    return {
      inView: false,
      word1: ['W', 'h', 'a', 't', '&nbsp;',],
      word2: ['I', '&nbsp;'],
      word3: ['m', 'a', 'd', 'e', '&nbsp;'],
      word4: ['e', 'l', 's', 'e']
    }
  },
  methods: {
    checkInView () {
      const el = this.$refs.title
      if (this.utils.isElementInView(el)) {
        this.inView = true
      } else {
        this.inView = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.utils.throttle(this.checkInView), true)
    window.addEventListener('resize', this.utils.throttle(this.checkInView), true)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.utils.throttle(this.checkInView), true)
    window.removeEventListener('resize', this.utils.throttle(this.checkInView), true)
  }
}
</script>


<style lang="stylus" scoped>
  .container
    position: relative
    height: 200px
    margin-bottom: 30px
    box-sizing: border-box
    @media screen and (max-width: 768px)
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
        @media screen and (max-width: 768px)
          font-size: 32px
          font-weight: 600
        span
          display: inline-block
          color: #e0dad2
          transition: all .2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          transition-delay: var(--delay)
        span.yellow
          font-weight: 600
      .in-view
        span.normal
          color: #332c21
        span.yellow
          color: var(--theme-color)
      
      
    
</style>
