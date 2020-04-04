<template>
  <ul class="nav" ref="nav" :class="show ? showNav : hideNav">
    <li 
      :class="index == anchorIndex ? 'active-color' : ''"
      v-for="(item, index) in category" :key="index" @click="handleClickAnchor(index)"
    >
      {{item}}
    </li>
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
      showNav: 'shownav',
      hideNav: 'hidenav'
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
      if (scrollTop > (document.body.clientHeight - 60)) {
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
    border-bottom: 1px dotted #D0CAC2
    display: flex
    justify-content: center
    align-items: center
    transition: all .7s
    // box-shadow: 0 0px 4px 1px rgba(18, 22, 33, .1)
    li
      position: relative
      margin: 0 40px
      line-height: 52px
      font-size: 15px
      font-weight: 400
      cursor: pointer
      transition: all .3s
      &:hover:before
        width: 100%
        left: 0
      &:before
        content: ''
        position: absolute
        bottom: -1px
        left: 50%
        width: 0
        height: 2px
        background: #F1B908
        transition: all .3s
      &:after
        content: '·'
        position: absolute
        right: -40px
        color: #D0CAC2
      &:last-child:after
        content: ''
    .active-color
      color: #F1B908
      font-weight: 500
  .shownav
    opacity: 1
    transform: translate3d(0, 0, 0)
  .hidenav
    transform: translate3d(0, -100%, 0)
</style>
