<template>
  <div class="projects" id="projects" ref="projects">
    <projects-title v-if="show"></projects-title>
    <projects-scroll v-if="show"></projects-scroll>
  </div>
</template>

<script>
import ProjectsTitle from './components/ProjectsTitle'
import ProjectsScroll from './components/ProjectsScroll'
export default {
  name: 'Projects',
  props: {
    offset: Number,
  },
  components: {
    ProjectsTitle, ProjectsScroll
  },
  data () {
    return {
      show: false,
      windowTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const clientHeight = document.body.clientHeight
      if (scrollTop > this.offset - clientHeight + 100) {
        this.show = true
      }
    },
    // positionState () {
    //   const el = this.$refs.projects
    //   const top = el.getBoundingClientRect().top
    //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   if (scrollTop > this.windowTop && top > 0 && top < 50) {
    //     // window.scrollTo(0, this.offset)
    //     el.scrollIntoView()
    //     //position = 'fixed'
    //     this.windowTop = scrollTop
    //   } 
    // }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
    // window.addEventListener('scroll', this.positionState, true)
  }
}
</script>


<style lang="stylus" scoped>
  .projects
    position: relative
    width: 100vw
    min-height: 700px
    display: flex
    flex-flow: column
</style>
