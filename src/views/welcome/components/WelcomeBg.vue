<template>
  <div class="bg">
    <morphing-blob></morphing-blob>
  </div>
</template>

<script>
import MorphingBlob from '../../common/MorphingBlob'
export default {
  name: 'WelcomeBg',
  components: {
    MorphingBlob
  }
}

</script>


<style lang="stylus" scoped>
  .bg
    position: absolute
    top: 15%
    bottom: 0
    left: 50%
    transform: translateX(-50%)
    width: 80%
    opacity: .6
    z-index: -1
    @media screen and (min-width: 1600px)
      width: 1280px
    @media screen and (max-width: 992px)
      top: 10%
      min-width: 600px
</style>
