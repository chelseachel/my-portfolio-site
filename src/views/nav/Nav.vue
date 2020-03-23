<template>
  <ul class="nav" ref="nav" :class="show ? showNav : hideNav">
    <li 
      :class="index == anchorIndex ? 'activeColor' : ''"
      v-for="(item, index) in category" :key="index" @click="handleClickAnchor(index)"
    >
      {{item}}
    </li>
    <!-- <li @click="handleClickAnchor('about')">About</li>
    <li @click="handleClickAnchor('projects')">Projects</li>
    <li @click="handleClickAnchor('others')">Others</li>
    <li @click="handleClickAnchor('contact')">Contact</li> -->
  </ul>
</template>

<script>

export default {
  name: 'Nav',
  props: {
    anchorIndex: Number
  },
  data () {
    return {
      category: ['About', 'Projects', 'Otherworks', 'Contact'],
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
      }, 2000)
    },
    dynamicNav () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > (document.body.clientHeight - 150)) {
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
  watch: {
    activeIndex: function () {

    }
  },
  mounted () {
    this.initNav()
    window.addEventListener('scroll', this.dynamicNav, true)
  }
}
</script>


<style lang="stylus" scoped>
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
    // box-shadow: 0 .06rem .1rem -.04rem rgba(18, 22, 33, .1)
    li
      position: relative
      padding: 0 35px
      line-height: 52px
      cursor: pointer
      &:after
        content: '·'
        color: #F1B908
        position: absolute
        right: 0
      &:last-child:after
        content: ''
    .activeColor
      color: #F1B908
      font-weight: 500
  .showNav
    opacity: 1
    transform: translate3d(0, 0, 0)
  .hideNav
    transform: translate3d(0, -100%, 0)
</style>
