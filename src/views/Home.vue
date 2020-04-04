<template>
  <div class="home" ref="home" id="home">
    <Nav @goAnchor="handleGoAnchor" :anchorIndex="anchorIndex"></Nav>
    <welcome ref="welcome"></welcome>
    <about ref="about"></about>
    <projects ref="projects" :offset="offset[1]"></projects>
    <others ref="others" :offset="offset[2]"></others>
    <contact ref="contact"@backToTop="handleScrollBack"></contact>
  </div>
</template>

<script>
import Welcome from './welcome/Welcome'
import About from './about/About.vue'
import Projects from './projects/Projects'
import Others from './others/Others'
import Contact from './contact/Contact'
import Nav from './nav/Nav'
export default {
  name: 'Home',
  components: {
    Nav, Welcome, About, Projects, Others, Contact, 
    
  },
  data () {
    return {
      anchorElements: [],
      anchorIndex: null,
      offset: [],
      aboutHeight: 0,
    }
  },
  methods: {
    handleGoAnchor (index) {
      const anchor = this.anchorElements[index]
      anchor.scrollIntoView({behavior: "smooth"})
    },
    getAnchorIndex () {
      this.getOffset()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop < this.offset[0]) {
        this.anchorIndex = -1
      } else if (scrollTop >= this.offset[0] && scrollTop < this.offset[1]) {
          this.anchorIndex = 0
      } else if (scrollTop >= this.offset[1] && scrollTop < this.offset[2]) {
          this.anchorIndex = 1
      } else if (scrollTop >= this.offset[2] && scrollTop < this.offset[3]) {
          this.anchorIndex = 2
      } else if (scrollTop >= this.offset[3] && scrollTop) {
          this.anchorIndex = 3
      }
    },
    getOffset () {
      for(let i = 0; i < this.anchorElements.length; i++) {
        this.offset[i] = this.anchorElements[i].offsetTop
      }
    },
    handleScrollBack () {
      this.$refs.welcome.$el.scrollIntoView({behavior: "smooth"})
    }
  },
  mounted () {
    this.anchorElements[0]=this.$refs.about.$el
    this.anchorElements[1]=this.$refs.projects.$el
    this.anchorElements[2]=this.$refs.others.$el
    this.anchorElements[3]=this.$refs.contact.$el
    this.getAnchorIndex()
    window.addEventListener('scroll', this.getAnchorIndex, true)
    window.addEventListener('resize', this.getAnchorIndex, true)
  }
}
</script>


<style lang="stylus" scoped>
  
</style>
