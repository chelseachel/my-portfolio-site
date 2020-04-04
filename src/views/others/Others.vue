<template>
  <div class="others">
    <others-title></others-title>
    
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
  props: {
    offset: Number
  },
  data () {
    return {
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
    padding-bottom: 100px
    // box-shadow: 0 5px 10px 3px rgba(18, 22, 33, .1)
    box-shadow: 0 6px 4px 1px rgba(18, 22, 33, .1)
</style>
