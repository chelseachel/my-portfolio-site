<template>
  <div class="left" ref="left" :style="{position: position, top: top + 'px'}">
    <div class="wrapper">
      <div class="cate">
        About
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutLeft',
  props: {
    scrollHeight: Number
  },
  data () {
    return {
      position: 'absolute',
      top: 0
    }
  },
  methods: {
    positionState () {
      let clientHeight = document.body.clientHeight
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= clientHeight && scrollTop < (this.scrollHeight)) {
        this.position = 'fixed'
        this.top = 0
      } else if (scrollTop >= (this.scrollHeight)) {
        this.position = 'absolute'
        this.top = this.scrollHeight - clientHeight
      } else if (scrollTop < clientHeight) {
        this.position = 'absolute'
        this.top = 0
      }
    }
  },
  mounted () {  
    let _this = this
    window.addEventListener('scroll', _this.positionState, true)
  }
}
</script>


<style lang="stylus">
  .left
    width: 40%
    height: 100vh
    flex: 2
    border-right: 1px dotted #F1B908
    display: flex
    justify-content: center
    align-items: center
    // padding: 10px 0
    // box-sizing: border-box
    // .wrapper
    //   width: 100%
    //   height: 100%
    .cate
      font-weight: 800
      font-size: 60px
      color: #F1B908
      letter-spacing: 2px
      font-variant: small-caps
</style>
