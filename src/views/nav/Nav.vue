<template>
  <ul class="nav" ref="nav" :class="show ? showNav : hideNav">
    <li v-for="(item, index) in category" :key="index" @click="handleClickAnchor(index)">{{item}}</li>
    <!-- <li @click="handleClickAnchor('about')">About</li>
    <li @click="handleClickAnchor('projects')">Projects</li>
    <li @click="handleClickAnchor('others')">Others</li>
    <li @click="handleClickAnchor('contact')">Contact</li> -->
  </ul>
</template>

<script>

export default {
  name: 'Nav',
  data () {
    return {
      category: ['About', 'Projects', 'Others', 'Contact'],
      windowTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
      show: false,
      showNav: 'showNav',
      hideNav: 'hideNav'
    }
  },
  methods: {
    initNav () {
      let _this = this
      setTimeout(function () {
        // _this.$refs.nav.style.opacity = 1
        _this.show = true
      }, 1500)
    },
    dynamicNav () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > (document.body.clientHeight - 120)) {
        this.show = scrollTop >= this.windowTop ? false : true
        this.windowTop = scrollTop
      } else {
        this.show = true
      }
    },
    handleClickAnchor (index) {
      this.$emit('goAnchor', index)
    }
  },
  mounted () {
    this.initNav()
    window.addEventListener('scroll', this.dynamicNav, true)
  }
}
</script>


<style lang="stylus">
  .nav
    z-index: 100
    position: fixed
    top: 0
    width: 100%
    height: 52px
    background: #FDFDF9
    border-bottom: 1px dotted #ddd
    display: flex
    justify-content: center
    align-items: center
    transition: all .8s
    li
      position: relative
      padding: 0 25px
      cursor: pointer
      &:after
        content: '·'
        color: #F1B908
        position: absolute
        right: 0
      &:last-child:after
        content: ''
  .showNav
    opacity: 1
    transform: translate3d(0, 0, 0)
  .hideNav
    // opacity: 0
    transform: translate3d(0, -100%, 0)
  // .showNav
  //   animation: fadeInDown 1s
  //   animation-fill-mode: both
  // .hideNav
  //   animation: fadeOutUp 1s
  //   animation-fill-mode: both
  // @keyframes fadeInDown
  //   from
  //     opacity: 0
  //     transform: translate3d(0, -100%, 0)
  //   to 
  //     opacity: 1
  //     transform: translate3d(0, 0, 0)
  // @keyframes fadeOutUp
  //   from
  //     opacity: 1
  //     transform: translate3d(0, 0, 0)
  //   to 
  //     opacity: 0
  //     transform: translate3d(0, -100%, 0)
</style>
