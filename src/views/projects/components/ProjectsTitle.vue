<template>
  <div class="container">
    <!-- <div class="wrapper"> -->
      <div class="title">Projects</div>
      <!-- <div class="psuedo"></div> -->
    <!-- </div> -->
  </div>
</template>

<script>

export default {
  name: 'ProjectsTitle',
}
</script>


<style lang="stylus" scoped>
  .container
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 200px
    z-index: 2
    // .wrapper
    //   position: absolute
    //   top: 50%
    //   left: 50%
    //   transform: translate(-50%, -50%)
    .title
      line-height: 200px
      font-size: 48px
      font-weight: 800
      text-align: center
        // letter-spacing: 1px
        // font-variant: small-caps
        // animation: fade-in 1s both
      // .psuedo
      //   position: absolute
      //   top: 0
      //   width: 100%
      //   height: 100%
      //   animation: slide-out 1s both
  // @keyframes fade-in
  //   from
  //     opacity: 0
  //     top: 80px
  //   to
  //     opacity: 1
  //     top: 0
  // @keyframes slide-out
  //   from
  //     height: 100%
  //   to
  //     height: 0
  //     background: #F1B908
      
    
</style>
