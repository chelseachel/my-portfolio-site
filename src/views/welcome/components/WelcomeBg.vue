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
    left: 0
    right: 0
    margin: auto
    width: 80%
    opacity: .6
    z-index: -1
    @media screen and (min-width: 1600px)
      width: 1280px
    @media screen and (max-width: 992px)
      top: 0
      min-width: 600px
</style>
