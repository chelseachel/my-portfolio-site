<template>
  <div class="item" ref="item" :class="show ? 'showitem' : ''">
    <div class="title">{{item.title}}</div>
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
    scrollTimeLine () {
      const clientHeight = document.body.clientHeight
      this.rect = this.$refs.item.getBoundingClientRect()
      if (this.rect && this.rect.top < 300 && this.rect.top >= 0) {
        this.show = true
      } else if (this.rect && this.rect.top > clientHeight) {
        this.show = false
      }
    },
    scrollStoreIndex () {
      const clientHeight = document.body.clientHeight
      this.rect = this.$refs.item.getBoundingClientRect()
      if (this.rect && this.rect.top < (clientHeight/2 - 200)) {
        this.$store.commit('changeActiveIndex', this.index)
      }
    }
  },
  mounted () {
    this.rect = this.$refs.item.getBoundingClientRect()
    window.addEventListener('resize', this.getRect, true)
    window.addEventListener('scroll', this.scrollTimeLine, true)
    window.addEventListener('scroll', this.scrollStoreIndex, true)
  }
}
</script>


<style lang="stylus" scoped>
  .item
    max-width: 80%
    padding: 150px 70px
    box-sizing: border-box
    line-height: 2em
    text-align: justify
    opacity: 0
    transform: translateY(50px)
    transition: all .6s ease
  .showitem
    opacity: 1
    transform: translateY(0px)
    .title
      line-height: 80px
      font-size: 24px
      font-weight: 500
      text-align: left   
</style>
