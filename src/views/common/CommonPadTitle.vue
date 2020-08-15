<template>
  <div class="title-pad">
    <div class="cate">
      <slot></slot>
      <span>.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonPadTitle'
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  @media screen and (max-width: 992px)
    .title-pad
      width: 100%
      height: 50px
      margin-top: 50px
      margin-bottom: 60px
      display: flex
      justify-content: center
      align-items: center
      .cate
        color: $color1
        font-weight: 600
        @media screen and (min-width: 769px) and (max-width: 992px)
          font-size: 4.2vw
        @media screen and (max-width: 768px)
          font-size: 32px
        span
          color: var(--theme-color)
  @media screen and (min-width: 993px)
    .title-pad
      display: none
</style>
