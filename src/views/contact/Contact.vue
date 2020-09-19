<template>
  <div class="contact">
    <div class="back" @click="handleClickTop">
      <div class="arrow"></div>
    </div>
    <section>
      <div class="contact-list">
        <a href="https://github.com/chelseachel/" target="_blank">
          <span class="iconfont icon-github"></span>
        </a>
        <a href="https://codepen.io/chelseachel" target="_blank">
          <span class="iconfont icon-codepen"></span>
        </a>
        <a href="mailto:chelseachel@icloud.com">
          <span class="iconfont icon-email_outlined"></span>
        </a>
        <a class="wechat" href="javascript:void(0);" 
          @click.stop="toggleTooltip"
        >
          <span class="iconfont icon-wechat">
            <img class="qr-code" src="https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/wechat.jpg" />
            <span class="mobitooltip" v-if="showTooltip">
              <span class="info">18518989119</span>
              <span class="triangle"></span>
            </span>
          </span>
        </a>
      </div>
      <div class="contact-msg" :class="inView ? 'in-view' : ''" ref="viewCheck">
        <div class="triangle"></div>
        <p>期待能有机会与您共事</p>
      </div>
    </section>
    <footer>
      <p>
        Designd with <span class="heart"></span> by Chelsea 
      </p>
    </footer>
  </div>
</template>

<script>
import { checkInView } from '@/common/mixin.js'
export default {
  name: 'Contact',
  mixins: [checkInView],
  data() {
    return {
      showTooltip: false,
    }
  },
  methods: {
    handleClickTop () {
      this.$emit('backToTop')
    },
    toggleTooltip () { // 移动端 tooltip
      if (this.utils.isMobile()) {
        this.showTooltip = !this.showTooltip
      } else {
        return
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
    section
      height: inherit
      display: flex
      flex-direction: column
      justify-content: center
      .contact-list
        display: flex
        justify-content: center
        align-items: center
        a
          position: relative
          margin: 0 20px
          background: #fdfcf6
          padding: 11px
          border-radius: 50%
          font-size: 32px
          color: var(--theme-color)
          @media screen and (max-width: 769px)
            margin: 0 10px
            padding: 10px
            font-size: 30px
        a.wechat
          @media (hover: hover) and (pointer: fine)
            &:hover
              .qr-code
                display: block
            .qr-code
              width: 120px
              height: 120px
              position: absolute
              bottom: 100%
              left: 100%
              border-radius: 5px
              background: #fdfcf6
              z-index: 1
              display: none
            .mobitooltip
              position: absolute
              bottom: 120%
              left: -50px
              transition: opacity .5s ease
              display: flex
              flex-direction: column
              justify-content: center
              align-items: center
              z-index: 1
              .info
                padding: 12px 17px
                border-radius: 10px
                font-family: "Open Sans", "Avenir", "Helvetica Neue", Helvetica, "PingFang SC", "Microsoft Yahei", Arial, sans-serif
                font-size: 15px
                background: var(--theme-translucent)
                color: #fdfcf6
              .triangle
                width: 0px
                height: 0px
                border: 7px solid transparent
                border-top: 7px solid var(--theme-translucent)
                position: relative
                left: 12px
      .contact-msg
        opacity: 0
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        margin-top: 20px
        .triangle
          width: 0px
          height: 0px
          border: 7px solid transparent
          border-bottom: 7px solid var(--theme-translucent)
        p
          line-height: 1em
          padding: 12px 20px
          border-radius: 10px
          background: var(--theme-translucent)
          color: #fdfcf6
      .in-view
        opacity: 1
        transition: opacity 1s ease 2s
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
