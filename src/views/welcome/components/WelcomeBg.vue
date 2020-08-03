<template>
  <div class="bg">
  </div>
</template>

<script>

export default {
  name: 'WelcomeBg',
}

</script>


<style lang="stylus" scoped>
  .bg
    position: absolute
    bottom: 50px
    left: 0
    right: 0
    margin: auto
    width: 150px
    height: 150px
    display: grid
    border-radius: 50%
    background: var(--theme-translucent)
    grid-template-rows: repeat(auto-fill, 30px)
    grid-template-columns: repeat(auto-fill, 30px) 
    place-items: center
</style>
