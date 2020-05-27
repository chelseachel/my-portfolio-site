<template>
  <div class="container">
    <div class="wrapper">
      <div class="title" ref="title" :class="inView ? 'in-view' : ''">What I <span>made</span> else</div>
      <!-- <div class="psuedo"></div> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'OthersTitle',
  data () {
    return {
      inView: false
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
    window.addEventListener('scroll', this.checkInView, true)
  }
}
</script>


<style lang="stylus" scoped>
  .container
    position: relative
    height: 220px
    margin-bottom: 30px
    box-sizing: border-box
    .wrapper
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      .title
        position: relative
        font-size: 52px
        font-weight: 200
        text-align: center
        opacity: 0
        // transform: translateY(50px)
        // transform: rotate(30deg)
        transition: all .8s ease
        // &:before
        //   content: ''
        //   position: absolute
        //   bottom: 8px
        //   right: -200px
        //   width: 5px
        //   height: 5px
        //   border-radius: 50%
        //   background: #F1B908
        //   transition: all 1s ease
        @media screen and (max-width: 768px)
          font-size: 44px
        span
          display: inline-block
          font-size: 52px
          font-weight: 600
          color: #F1B908
          // transform: translateY(-80px)
          transition: all .8s ease
          @media screen and (max-width: 768px)
            font-size: 44px
      .in-view
        // font-size: 52px
        opacity: 1
        transform: rotate(0deg)
        // transform: translateY(0px)
        // &:before
        //   right: -10px
        span
          // font-size: 52px
          // transform: translateY(0px)
      
      
    
</style>
