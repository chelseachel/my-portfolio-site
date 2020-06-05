<template>
  <div class="header" :class="show ? showNav : hideNav">
    <a href="index.html" class="logo"></a>
    <ul class="nav">
      <li 
        :class="index == anchorIndex ? 'active-color' : ''"
        v-for="(item, index) in category" :key="index" @click="handleClickAnchor(index)"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  props: {
    anchorIndex: Number
  },
  data () {
    return {
      category: ['Home', 'About', 'Projects', 'Otherworks', 'Contact'],
      windowTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
      show: true,
      showNav: 'shownav',
      hideNav: 'hidenav'
    }
  },
  methods: {
    // initNav () {
    //   let _this = this
    //   setTimeout(function () {
    //     _this.show = true
    //   }, 2000)
    // },
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
    window.addEventListener('scroll', this.dynamicNav, true)
  }
}
</script>


<style lang="stylus" scoped>
  .header
    z-index: 99
    position: fixed
    top: 0
    width: 100%
    height: 60px
    background: #FDFDF9
    border-bottom: 1px solid #eee
    box-sizing: border-box
    transition: all .6s ease
    .logo
      position: absolute
      top: 18px
      left: 30px
      width: 24px
      height: 24px
      background: #F1B908
      border-radius: 50%
      animation: rotate 30s linear infinite
      @media screen and (max-width: 768px)
        display: none
      &:before
        content: ''
        width: 4px
        height: 4px
        position: absolute
        top: 10px
        right: -2px
        background: #FDFDF9
        opacity: 1
        border-radius: 50%
        transition: all .3s ease
      &:hover:before
        right: 20px
      @keyframes rotate
        0%
          transform: rotate(0deg)
        25%
          transform: rotate(90deg)
        50%
          transform: rotate(180deg)
        75%
          transform: rotate(270deg)
        100%
          transform: rotate(360deg)
    .nav
      width: 100%
      height: 60px
      display: flex
      justify-content: center
      align-items: center
      @media screen and (max-width: 768px)
        padding: 0 10px
        justify-content: space-around
      li
        position: relative
        margin: 0 36px
        line-height: 60px
        font-size: 14px
        font-weight: 400
        cursor: pointer
        transition: all .3s
        @media screen and (max-width: 768px)
          margin: 0
        &:hover:before
          width: 100%
          left: 0
        &:before
          content: ''
          position: absolute
          bottom: 0px
          left: 50%
          width: 0
          height: 2px
          background: #F1B908
          transition: all .3s
      .active-color
        color: #F1B908
        font-weight: 600
        &:before
          width: 100%
          left: 0
  .shownav
      opacity: .9
      transform: translate3d(0, 0, 0)
  .hidenav
      transform: translate3d(0, -100%, 0)
</style>
