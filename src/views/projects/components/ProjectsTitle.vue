<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">Projects</div>
      <!-- <div class="psuedo"></div> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProjectsTitle',
  components: {
  }
}
</script>


<style lang="stylus" scoped>
  .container
    position: relative
    height: 200px
    width: 100%
    .wrapper
      position: absolute
      bottom: 80px
      left: 50%
      transform: translateX(-50%)
      .title
        position: relative
        font-size: 50px
        font-weight: 800
        // letter-spacing: 1px
        // font-variant: small-caps
        animation: fade-in 1s both
      // .psuedo
      //   position: absolute
      //   top: 0
      //   width: 100%
      //   height: 100%
      //   animation: slide-out 1s both
  @keyframes fade-in
    from
      opacity: 0
      top: 80px
    to
      opacity: 1
      top: 0
  // @keyframes slide-out
  //   from
  //     height: 100%
  //   to
  //     height: 0
  //     background: #F1B908
      
    
</style>
