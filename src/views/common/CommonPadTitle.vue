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
@media screen and (max-width: 768px)
  .title-pad
    width: 100%
    height: 50px
    display: flex
    justify-content: center
    align-items: center
    .cate
      color: #2d2b29
      font-size: 32px
      font-weight: 600
      span
        color: #F1B908
@media screen and (min-width: 769px)
  .title-pad
    display: none
</style>
