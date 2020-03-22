<template>
  <div class="home" ref="home" id="home">
    <Nav @goAnchor="handleGoAnchor" :anchorIndex="anchorIndex"></Nav>
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
      anchorElements: [],
      anchorIndex: null
    }
  },
  methods: {
    handleGoAnchor (index) {
      const anchor = this.anchorElements[index]
      anchor.scrollIntoView({behavior: "smooth"})
    },
    getAnchorIndex () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const offset = []
      for(let i = 0; i < this.anchorElements.length; i++) {
        offset[i] = this.anchorElements[i].offsetTop
      }
      if (scrollTop < offset[0]) {
        this.anchorIndex = -1
      } else if (scrollTop >= offset[0] && scrollTop < offset[1]) {
          this.anchorIndex = 0
      } else if (scrollTop >= offset[1] && scrollTop < offset[2]) {
          this.anchorIndex = 1
      } else if (scrollTop >= offset[2] && scrollTop < offset[3]) {
          this.anchorIndex = 2
      } else if (scrollTop >= offset[3] && scrollTop) {
          this.anchorIndex = 3
      }
      console.log(this.anchorIndex);
    }
  },
  mounted () {
    this.anchorElements[0]=this.$refs.about.$el
    this.anchorElements[1]=this.$refs.projects.$el
    this.anchorElements[2]=this.$refs.others.$el
    this.anchorElements[3]=this.$refs.contact.$el
    const _this = this
    window.addEventListener('scroll', _this.getAnchorIndex, true)
  }
}
</script>


<style lang="stylus">
  .home
    // overflow: scroll
</style>
