<template>
  <div class="projects" ref="projects">
    <common-pad-title>Projects</common-pad-title>
    <projects-display :scrollHeight="scrollHeight" :offset="offset" @scrollToIndex="handleScrollToIndex"></projects-display>
    <projects-scroll ref="scroll" @refreshHeight='getHeight'></projects-scroll>
  </div>
</template>

<script>
import CommonPadTitle from '../common/CommonPadTitle'
import ProjectsScroll from './components/ProjectsScroll'
import ProjectsDisplay from './components/ProjectsDisplay'
export default {
  name: 'Projects',
  props: {
    offset: Number,
  },
  components: {
    CommonPadTitle, ProjectsScroll, ProjectsDisplay
  },
  data () {
    return {
      scrollHeight: 0,
    }
  },
  methods: {
    getHeight () {
      this.scrollHeight = parseInt(this.$refs.projects.getBoundingClientRect().height)
    },
    handleScrollToIndex () {
      this.$refs.scroll.scrollToItem()
    }
  },
  mounted () {
    this.getHeight()
    window.addEventListener('resize', this.utils.throttle(this.getHeight), true)
  },
  updated () {
    this.getHeight()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.utils.throttle(this.getHeight), true)
  }
}
</script>


<style lang="stylus" scoped>
  .projects
    position: relative
    width: 100vw
    @media screen and (max-width: 768px)
      margin-top: 65px
</style>
