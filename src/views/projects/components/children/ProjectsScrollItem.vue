<template>
  <div class="item" ref="item" :class="show ? 'showitem' : ''">
    <div class="title">{{item.title}}</div>
    <p class="pic">
      <img :src="item.url">
    </p>
    <div>{{item.content}}</div>
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
      if (this.rect && this.rect.top < (clientHeight * 0.45)) {
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
  .item
    max-width: 60%
    width: 500px
    padding: 150px 0
    margin: 0 13%
    box-sizing: border-box
    line-height: 2em
    font-size: 15px
    text-align: justify
    opacity: 0
    transform: translateY(100px)
    transition: all .8s ease-in-out
    .pic
      display: none
    .title
      line-height: 80px
      font-size: 24px
      font-weight: 500
      text-align: left  
  .showitem
    opacity: 1
    transform: translateY(0px) 
  @media screen and (max-width: 768px)
    .item
      width: 100%
      max-width: 100%
      padding: 50px 10vw
      margin: 0px
      font-size: 13px
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
