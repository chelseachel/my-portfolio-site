<template>
  <div class="container">
    <div class="wrapper">
      <projects-scroll-item v-for="(item, index) in list" :key="item.id" :item="item" :index="index" ref="item"></projects-scroll-item>
      <div class="bottom" ref="bottom" :style="{height: bottomHeight + 'px'}"></div>
    </div>
  </div>
</template>

<script>
import ProjectsScrollItem from './ProjectsScrollItem'
import { mapState } from 'vuex'
export default {
  name: 'ProjectsScroll',
  components: {
    ProjectsScrollItem
  },
  props:{
    list: Array
  },
  data () {
    return {
      itemElements:[],
      itemHeight: 0,
      bottomHeight: 0
    }
  },
  computed: {
    ...mapState([
      'activeIndex'
    ]),
  },
  watch: {
    itemHeight: function () {
      let clientHeight = document.body.clientHeight
      // 使 item 顶部与展示图片平齐
      let bottomH = clientHeight - 0.2*clientHeight - (this.itemHeight - 150)
      this.bottomHeight = bottomH < 0 ? 0 : bottomH
    }
  },
  methods: {
    getItemHeight () {
      this.$nextTick(function() {
        this.itemHeight = parseInt(this.$refs.item[5].$el.getBoundingClientRect().height)
      }, 10)
    },
    getItemElements () {
      for (let i = 0; i < this.list.length; i++) {
        this.itemElements[i] = this.$refs.item[i].$el
      }
    },
    scrollToItem () {
      const item = this.itemElements[this.activeIndex]
      item.scrollIntoView({behavior: "smooth"})
    }
  },
  mounted () {
    this.getItemHeight()
    window.addEventListener('resize', this.utils.throttle(this.getItemHeight), true)
    this.getItemElements()
  },
  updated () {
    this.getItemHeight()
    this.$emit('refreshHeight')
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.utils.throttle(this.getItemHeight), true)
  }
}
</script>


<style lang="stylus" scoped>
  .wrapper
    margin-top: calc(20vh - 150px)
    .bottom
      width: 100%
  @media screen and (max-width: 992px)
    .bottom
      display: none
</style>
