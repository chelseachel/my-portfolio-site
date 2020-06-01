<template>
  <div class="projects" ref="projects">
    <common-pad-title>Projects</common-pad-title>
    <projects-display :scrollHeight="scrollHeight" :offset="offset" @scrollToIndex="handleScrollToIndex"></projects-display>
    <projects-scroll ref="scroll"></projects-scroll>
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
    @media screen and (max-width: 768px)
      margin-top: 65px
</style>
