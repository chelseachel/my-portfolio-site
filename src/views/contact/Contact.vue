<template>
  <div class="contact">
    <div class="back" @click="handleClickTop">
      <div class="arrow"></div>
    </div>
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
</style>
