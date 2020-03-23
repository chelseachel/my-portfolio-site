<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">Projects</div>
      <div class="psuedo"></div>
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
    top: 150px
    width: 100%
    .wrapper
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)
      .title
        position: relative
        font-size: 60px
        font-weight: 800
        // letter-spacing: 1px
        font-variant: small-caps
        animation: fade-in-title 1s both
      .psuedo
        position: absolute
        top: 0
        width: 100%
        height: 100%
        animation: slide-out 1s both
  @keyframes fade-in-title
    from
      opacity: 0
      top: 50px
    to
      opacity: 1
      top: 0
  @keyframes slide-out
    from
      height: 100%
    to
      height: 0
      background: #F1B908
      
    
</style>
