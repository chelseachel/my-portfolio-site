<template>
  <div class="projects" ref="projects">
    <projects-scroll ref="scroll"></projects-scroll>
    <projects-display :scrollHeight="scrollHeight" :offset="offset" @scrollToIndex="handleScrollToIndex"></projects-display>
  </div>
</template>

<script>
import ProjectsScroll from './components/ProjectsScroll'
import ProjectsDisplay from './components/ProjectsDisplay'
export default {
  name: 'Projects',
  props: {
    offset: Number,
  },
  components: {
    ProjectsScroll, ProjectsDisplay
  },
  data () {
    return {
      scrollHeight: 0,
      windowTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
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
    window.addEventListener('resize', this.getHeight, true)
    window.addEventListener('scroll', this.getHeight, true)
  }
}
</script>


<style lang="stylus" scoped>
  .projects
    position: relative
    width: 100vw
    // box-shadow: 0 .06rem .1rem -.04rem rgba(18, 22, 33, .1)
</style>
