<template>
  <div class="home" ref="home">
    <Nav @goAnchor="handleGoAnchor"></Nav>
    <welcome></welcome>
    <about ref="about"></about>
    <projects ref="projects"></projects>
    <others ref="others"></others>
    <contact ref="contact"></contact>
  </div>
</template>

<script>
import Welcome from './welcome/Welcome'
import About from './about/About.vue'
import Projects from './projects/Projects'
import Others from './others/Others'
import Contact from './contact/Contact'
import Nav from './nav/Nav'
// import Footer from './footer/Footer'
export default {
  name: 'Home',
  components: {
    Welcome, About, Projects, Others, Contact, Nav
  },
  data () {
    return {
      anchorElements: []
    }
  },
  methods: {
    handleGoAnchor (index) {
      let anchor = this.anchorElements[index]
      anchor.scrollIntoView({behavior: "smooth"})
    }
  },
  mounted () {
    this.anchorElements[0]=this.$refs.about.$el
    this.anchorElements[1]=this.$refs.projects.$el
    this.anchorElements[2]=this.$refs.others.$el
    this.anchorElements[3]=this.$refs.contact.$el
  }
}
</script>


<style lang="stylus">
</style>
