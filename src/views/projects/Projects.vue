<template>
  <div class="projects" id="projects">
    <projects-title v-if="show"></projects-title>
    <projects-scroll></projects-scroll>
  </div>
</template>

<script>
import ProjectsTitle from './components/ProjectsTitle'
import ProjectsScoll from './components/ProjectsScoll'
export default {
  name: 'Projects',
  props: {
    offset: Number
  },
  components: {
    ProjectsTitle, ProjectsScoll
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const clientHeight = document.body.clientHeight
      if (scrollTop > this.offset - clientHeight + 200) {
        this.show = true
      }
    }
  },
  mounted () {
    const _this = this
    window.addEventListener('scroll', _this.handleScroll, true)
  }
}
</script>


<style lang="stylus" scoped>
  .projects
    position: relative
    width: 100vw
    height: 100vh
    // display: flex
</style>
