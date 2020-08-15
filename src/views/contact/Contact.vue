<template>
  <div class="contact">
    <div class="back" @click="handleClickTop">
      <div class="arrow"></div>
    </div>
    <div class="contact-list">
      <a href="https://github.com/chelseachel/">
        <span class="iconfont icon-github"></span>
      </a>
      <a href="https://codepen.io/chelseachel">
        <span class="iconfont icon-codepen"></span>
      </a>
      <a href="mailto:chelseachel@icloud.com">
        <span class="iconfont icon-email_outlined"></span>
      </a>
      <a href="javascript:void(0);" class="tooltip" @click="toggleTooltip">
        <span class="iconfont icon-wechat"></span>
        <span class="tooltiptext">18518989119</span>
        <span class="mobitooltip tooltiptext" v-if="showTooltip">18518989119</span>
      </a>
    </div>
    <footer>
      <p>
        Designd with <span class="heart"></span> by Chelsea 
      </p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Contact',
  data() {
    return {
      showTooltip: false
    }
  },
  methods: {
    handleClickTop () {
      this.$emit('backToTop')
    },
    toggleTooltip () {
      if (this.utils.isMobile()) {
        console.log(true);
        this.showTooltip = !this.showTooltip
      } else {
        this.showTooltip = false
      }
    }
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .contact
    position: relative
    width: 100vw
    height: 400px
    background: var(--theme-translucent)
    &:before
      content: ''
      width: 66px
      height: 33px
      border-radius: 33px 33px 0 0
      background: var(--theme-translucent)
      position: absolute
      top: -33px
      left: 50%
      transform: translateX(-50%)
    .back
      position: absolute
      top: -30px
      left: 50%
      transform: translateX(-50%)
      width: 60px
      height: 60px
      border-radius: 50%
      background: #fdfcf6
      transition: all .2s ease-in-out
      cursor: pointer
      z-index: 10
      &:hover
        transform: translateX(-50%) scale(.92)
      .arrow
        position: absolute
        top: 29px
        left: 25px
        width: 8px
        height: 8px
        border-left: 2px solid $color1
        border-top: 2px solid $color1
        transform: rotate(45deg)
    .contact-list
      margin: 0 50px
      height: 340px
      display: flex
      justify-content: center
      align-items: center
      a
        position: relative
        margin: 0 30px
        background: #fdfcf6
        padding: 10px
        border-radius: 50%
        font-size: 30px
        color: var(--theme-color)
        @media screen and (max-width: 769px)
          margin: 0 10px
        .icon-email_outlined
          font-size: 29px
      .tooltip
        .tooltiptext
          visibility: hidden
          opacity: 0
          background: #fdfcf6
          padding: 10px 15px
          border-radius: 20px
          text-align: center
          font-size: 14px
          font-weight: 600
          transition: opacity .5s ease
          position: absolute
          top: 130%
          left: -16px
          z-index: 1
          &:before
            content: ''
            width: 10px
            height: 10px
            background: #fdfcf6
            transform: rotate(45deg)
            position: absolute
            top: -5px
            left: 30px
        @media screen and (min-width: 769px)
          &:hover 
            .tooltiptext
              visibility: visible
              opacity: 1
        .mobitooltip
          visibility: visible
          opacity: 1
    footer
      position: absolute
      bottom: 0px
      width: 100%
      p
        line-height: 60px
        font-size: 14px
        color: var(--theme-color)
        text-align: center
        .heart
          display: inline-block
          position: relative
          margin-left: 6px
          margin-right: 6px
          width: 8px
          height: 8px
          border-radius: 1px
          background: var(--theme-color)
          transform: rotate(45deg)
          &:before
            content: ''
            width: 8px
            height: 8px
            position: absolute
            top: -4px
            left: 0px
            background: var(--theme-color)
            border-radius: 50%
            animation: move1 3s ease-in-out infinite
            @keyframes move1
              0% 
                top: -4px
                left: 0px
              25%  
                top: -4px
                left: 0px
              50%
                top: 4px
                left: 0px
              75%
                top: 4px
                left: 0px 
              100%
                top: -4px
                left: 0px
          &:after
            content: ''
            width: 8px
            height: 8px
            position: absolute
            top: 0px
            left: -4px
            background: var(--theme-color)
            border-radius: 50%
            animation: move2 3s ease-in-out infinite
            @keyframes move2
              0% 
                top: 0px
                left: -4px
              25% 
                top: 0px
                left: 4px
              50%
                top: 0px
                left: 4px
              75%
                top: 0px
                left: -4px
              100%
                top: 0px
                left: -4px
</style>
