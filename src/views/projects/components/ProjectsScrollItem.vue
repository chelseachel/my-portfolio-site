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
    item: Object
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
      this.rect = this.$refs.item.getBoundingClientRect();
      // let clientHeight = window.innerHeight || document.documentElement.clientHeight
      if (this.rect && this.rect.top < 300) {
        this.show = true
      } else if (this.rect && this.rect.top > clientHeight) {
        this.show = false
      }
    },
  },
  mounted () {
    this.rect = this.$refs.item.getBoundingClientRect()
    window.addEventListener('scroll', this.scrollTimeLine, true)
  }
}
</script>


<style lang="stylus" scoped>
  .item
    max-width: 60%
    margin: 150px 70px
    box-sizing: border-box
    line-height: 2em
    text-align: justify
    visibility: hidden
    opacity: 0
    transform: translateY(50px)
    transition: all .6s ease
  .showitem
    visibility: visible
    opacity: 1
    transform: translateY(0px)
    .title
      line-height: 80px
      font-size: 24px
      font-weight: 500
      text-align: left   
</style>
