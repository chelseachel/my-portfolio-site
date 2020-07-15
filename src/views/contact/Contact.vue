<template>
  <div class="wrapper">
    <div class="back" @click="handleClickTop">
      <div class="arrow"></div>
    </div>
    <section class="container">
      <!-- <p>
        <span class="iconfont icon-github"></span>
        <a href="https://github.com/chelseachel/">github.com/chelseachel</a>
      </p>
      <p>
        <span class="iconfont icon-codepen"></span>
        <a href="https://codepen.io/chelseachel">codepen.io/chelseachel</a>
      </p> -->
      <p>
        <a href="https://github.com/chelseachel/">Github</a>
        <a href="https://codepen.io/chelseachel/">CodePen</a>
      </p>
      <p>chelseachel@icloud.com<br>wechat: 18518989119</p>
      <!-- <p>wechat: 18518989119</p> -->
    </section>
  </div>
</template>

<script>

export default {
  name: 'Contact',
  components: {
  },
  methods: {
    handleClickTop () {
      this.$emit('backToTop')
    }
  }
}
</script>


<style lang="stylus" scoped>
  .wrapper
    position: relative
    width: 100vw
    height: 400px
    background: var(--theme-translucent)
    display: flex
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
      // box-shadow: 0 5px 10px 3px rgba(18, 22, 33, .04)
      transition: all .2s ease-in-out
      cursor: pointer
      z-index: 10
      &:hover
        transform: translateX(-50%) scale(.92)
        // box-shadow: 0 4px 4px 1px rgba(18, 22, 33, .04)
      .arrow
        position: absolute
        top: 29px
        left: 25px
        width: 8px
        height: 8px
        border-left: 2px solid #332c21
        border-top: 2px solid #332c21
        transform: rotate(45deg)
    .container
      margin: 100px auto
      text-align: center
      // p
      //   margin: 22px 0
      //   padding: 5px 12px
      //   // border-radius: 14px
      //   // border: 2px solid #fdfcf6
      //   // background: #fdfcf6
      //   a
      //     color: var(--theme-color)
      //     font-size: 14px
      //     // font-weight: 600
      //   .iconfont
      //     // display: inline-block
      //     font-size: 24px
      //     vertical-align: middle
      //     margin-right: 8px
      //     // margin-top: 2px
      //     color: var(--theme-color)
      //     background: #fdfcf6
      //     border-radius: 3px
      p
        margin: 22px 0
        padding: 5px 12px
        line-height: 1.75em
        color: var(--theme-color)
        a
          margin: 0 30px
          padding: 5px 12px
          border-radius: 20px
          border: 2px solid var(--theme-color)
          color: var(--theme-color)
          font-weight: 600
</style>
