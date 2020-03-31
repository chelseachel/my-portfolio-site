<template>
  <div class="others" id="others">
    <others-title ref="title"></others-title>
    <others-gallery></others-gallery>
  </div>
</template>

<script>
import OthersTitle from './components/OthersTitle'
import OthersGallery from './components/OthersGallery'
export default {
  name: 'Others',
  components: {
    OthersTitle, OthersGallery
  },
  data () {
    return {
      show: false,
    }
  },
  methods: {
    
  },
  mounted () {

  }
}
</script>


<style lang="stylus" scoped>
  .others
    width: 100vw
    // height: 100vh
</style>
