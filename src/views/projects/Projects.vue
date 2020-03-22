<template>
  <div class="projects" id="projects">
    <projects-title></projects-title>
  </div>
</template>

<script>
import ProjectsTitle from './components/ProjectsTitle'
export default {
  name: 'Projects',
  components: {
    ProjectsTitle
  }
}
</script>


<style lang="stylus">
  .projects
    position: relative
    width: 100vw
    height: 100vh
    display: flex
</style>
