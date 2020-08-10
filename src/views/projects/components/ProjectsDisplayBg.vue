<template>
  <div class="bg">
    <morphing-blob></morphing-blob>
  </div>
</template>

<script>
import MorphingBlob from '../../common/MorphingBlob'
export default {
  name: 'ProjectsDisplayBg',
  components: {
    MorphingBlob
  }
}

</script>


<style lang="stylus" scoped>
  .bg
    position: absolute
    top: 30%
    right: 20%
    width: 60%
    min-width: 300px
    height: 60%
    min-height: 300px
    z-index: -1
    // @media screen and (min-width: 1600px)
    //   width: 1280px
    // @media screen and (max-width: 992px)
    //   top: 0
    //   width: 80%
    //   min-width: 600px
</style>
