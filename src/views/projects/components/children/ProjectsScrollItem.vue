<template>
  <div class="item" ref="item" :class="show ? 'showitem' : ''">
    <div class="title">
      <span>{{item.title}}</span>
      
    </div>
    <p>
      <a href="">源码</a>
      <a href="">预览</a>
    </p>
    <div class="pic">
      <img :src="item.url">
    </div>
    <p class="desc">{{item.desc}}</p>
    <div class="sub-title">功能难点</div>
    <p class="content" v-html="item.content"></p>
    <div class="sub-title">技术栈</div>
    <div class="techs">
      <span class="tech" v-for="(value, index) in item.techs" :key="index">{{value}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProjectsScrollItem',
  props: {
    item: Object,
    index: Number
  },
  data () {
    return {
      show: false,
      rect: null
    }
  },
  methods: {
    checkInView () {
      const el = this.$refs.item
      if (this.utils.isElementInView(el)) {
        this.show = true
      } else {
        this.show = false
      }
    },
    scrollStoreIndex () {
      const clientHeight = document.body.clientHeight
      this.rect = this.$refs.item.getBoundingClientRect()
      if (this.rect && this.rect.top < (clientHeight * 0.35) && this.rect.top > 0) {
        this.$store.commit('changeActiveIndex', this.index)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.utils.throttle(this.checkInView), true)
    window.addEventListener('resize', this.utils.throttle(this.checkInView), true)
    window.addEventListener('scroll', this.utils.throttle(this.scrollStoreIndex), true)
    window.addEventListener('resize', this.utils.throttle(this.scrollStoreIndex), true)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.utils.throttle(this.checkInView), true)
    window.removeEventListener('resize', this.utils.throttle(this.checkInView), true)
    window.removeEventListener('scroll', this.utils.throttle(this.scrollStoreIndex), true)
    window.removeEventListener('resize', this.utils.throttle(this.scrollStoreIndex), true)
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .item
    width: 65%
    max-width: 500px
    padding: 100px 0
    margin-left: 13.5%
    box-sizing: border-box
    line-height: 1.75em
    font-size: 15px
    text-align: justify
    opacity: 0
    transform: translateY(100px)
    transition: all .8s ease-in-out
    .pic
      display: none
    .title
      margin-bottom: .5em
      font-size: 20px
      font-weight: 600
      // line-height: 20px
      // text-align: left
      // display: flex
      // align-items: center
      // span
      //   font-size: 20px
      //   font-weight: 600
      //   margin-right: 15px
    a
      position: relative
      display: inline-block
      margin-right: 10px
      margin-bottom: .8em
      // padding: .12em .45em
      // border-radius: 5px
      // border: 1px solid var(--theme-color)
      line-height: 1em
      font-size: 15px
      opacity: .9
      // font-weight: 400
      // background: var(--theme-translucent)
      // color: var(--theme-color)
      &:before 
        content: ''
        position: absolute
        left: 0
        bottom: -3px
        width: 100%
        height: 2px
        background: var(--theme-color)
    .desc
      margin-bottom: 1em
    .content
      margin-bottom: 1em
    .sub-title
      margin: .6em 0
      font-weight: 600
    .techs
      .tech
        display: inline-block
        margin-right: 10px
        padding: .3em .65em
        border-radius: .85em
        line-height: 1em
        // background: var(--theme-color)
        border: 1px solid var(--theme-color)
        color: var(--theme-color)
        font-size: 13px
  .showitem
    opacity: 1
    transform: translateY(0px) 
  @media screen and (max-width: 992px)
    .item
      width: 100%
      max-width: 100%
      padding: 50px 10vw
      margin: 0px
      .pic
        height: 300px
        margin-bottom: 25px
        background: #ccc
        text-align: center
        img
          width:50%
          height: 100%
          background: #998
      .title
        text-align: center
</style>
