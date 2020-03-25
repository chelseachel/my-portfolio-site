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
      console.log(this.rect.top); 
      let clientHeight = window.innerHeight || document.documentElement.clientHeight
      if (this.rect && this.rect.top < (clientHeight - 400)) {
        this.show = true
        console.log(true);
      }
    },
    // isElementInViewport () {
    //   if (this.rect) {
    //     return (
    //       this.rect.top >= 0 &&
    //       this.rect.left >= 0 &&
    //       this.rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //       this.rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     )
    //   }
    // }
  },
  mounted () {
    this.rect = this.$refs.item.getBoundingClientRect();
    console.log(this.rect.top);
    window.addEventListener('scroll', this.scrollTimeLine, true)
  },
  updated () {
    this.rect = this.$refs.item.getBoundingClientRect();
  }
}
</script>


<style lang="stylus" scoped>
  .item
    width: 60%
    margin: 100px
    margin-left: 100px
    line-height: 2em
    text-align: justify
    visibility: hidden
    opacity: 0
    transition: all .5s ease-in-out
  .showitem
    visibility: visible
    opacity: 1
    .title
      line-height: 80px
      font-size: 24px
      font-weight: 600
      text-align: left
  @keyframes fade-in
    from
      opacity: 0
      top: 100px
    to
      opacity: 1
      top: 0      
</style>
