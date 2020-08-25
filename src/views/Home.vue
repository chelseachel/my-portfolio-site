<template>
  <div class="home">
    <Nav @goAnchor="handleGoAnchor" @resetSkin="handleResetSkin" :anchorIndex="anchorIndex"></Nav>
    <welcome ref="welcome"></welcome>
    <about ref="about"></about>
    <projects ref="projects" :offset="offset[2]"></projects>
    <others ref="others"></others>
    <contact ref="contact" @backToTop="handleScrollBack"></contact>
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
      themes: [
        ['rgb(241,185,8)', 'rgba(241,185,8,.2)'],
        ['rgb(130,119,23)', 'rgba(130,119,23,.2)'],
        ['rgb(140,208,189)', 'rgba(140,208,189,.2)'],
        ['rgb(247,72,78)', 'rgba(247,72,78,.1)']
        // ['rgb(238,200,182)', 'rgba(238,200,182,.2)']
      ],
      themeNum: localStorage.num || 0
    }
  },
  computed: {
    themeColor () {
      return this.themes[this.themeNum][0]
    },
    themeTranslucent () {
      return this.themes[this.themeNum][1]
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
      if (scrollTop >= this.offset[0] && scrollTop < this.offset[1]) {
          this.anchorIndex = 0
      } else if (scrollTop >= this.offset[1] && scrollTop < this.offset[2]) {
          this.anchorIndex = 1
      } else if (scrollTop >= this.offset[2] && scrollTop < this.offset[3]) {
          this.anchorIndex = 2
      } else if (scrollTop >= this.offset[3] && scrollTop < this.offset[4]) {
          this.anchorIndex = 3
      } else if (scrollTop >= this.offset[4]) {
          this.anchorIndex = 4
      }
    },
    getOffset () {
      this.anchorElements.forEach(item => {
        this.offset.push(item.offsetTop)
      })
    },
    handleScrollBack () {
      this.$el.scrollIntoView({behavior: "smooth"})
    },
    resetSkin (color, colorTranslucent) {
      document.documentElement.style.setProperty('--theme-color', color)
      document.documentElement.style.setProperty('--theme-translucent', colorTranslucent)
    },
    setLocalStorage (num, color) {
      try {
        localStorage.setItem('num', num)
        localStorage.setItem('themeColor', color)
      } catch (e) {} 
    },
    handleResetSkin () {
      if (this.themeNum < this.themes.length - 1) {
        this.themeNum ++
      } else {
        this.themeNum = 0
      }
      this.resetSkin(this.themeColor, this.themeTranslucent)
      this.setLocalStorage(this.themeNum, this.themeColor)
    }
  },
  created () {
    this.resetSkin(this.themeColor, this.themeTranslucent)
  },
  mounted () {
    this.anchorElements=[this.$refs.welcome.$el, this.$refs.about.$el, this.$refs.projects.$el, this.$refs.others.$el, this.$refs.contact.$el]
    this.$nextTick(function() {
      this.getAnchorIndex()
    }, 0)
    window.addEventListener('scroll', this.utils.throttle(this.getAnchorIndex), true)
    window.addEventListener('resize', this.utils.throttle(this.getAnchorIndex), true)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.utils.throttle(this.getAnchorIndex), true)
    window.removeEventListener('resize', this.utils.throttle(this.getAnchorIndex), true)
  }
}
</script>

<style lang="stylus" scoped>
</style>
