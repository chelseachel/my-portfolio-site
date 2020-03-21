<template>
  <div class="home">
    <Nav @goAnchor="handleGoAnchor"></Nav>
    <welcome></welcome>
    <about></about>
    <projects></projects>
    <others></others>
    <contact></contact>
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
      anchor: null,
      item: null
    }
  },
  methods: {
    handleGoAnchor (item) {
      // let anchor = this.$el.querySelector("about")
      console.log(item);
      console.log(this.$el.querySelector("about"));
      // if (anchor) {
      //   anchor.scrollIntoView(true)
      // }
    }
  }
}
</script>


<style lang="stylus">

</style>
