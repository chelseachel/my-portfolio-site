<template>
  <div class="others">
    <others-title></others-title>
    <others-gallery @showSwiper="handleSwiperShow"></others-gallery>
    <gallery-swiper :imgs="images" :index="itemIndex" v-show="showSwiper" @close="handleSwiperClose"></gallery-swiper>
  </div>
</template>

<script>
import OthersTitle from './components/OthersTitle'
import OthersGallery from './components/OthersGallery'
import GallerySwiper from './components/children/GallerySwiper'
export default {
  name: 'Others',
  components: {
    OthersTitle, OthersGallery, GallerySwiper
  },
  props: {
    offset: Number
  },
  data () {
    return {
      showSwiper: false,
      images:[],
      itemIndex: 0
    }
  },
  methods: {
    handleSwiperShow (images, index) {
      this.showSwiper = true
      this.images = images
      this.itemIndex = index
    },
    handleSwiperClose () {
      this.showSwiper = false
    }
  },
  mounted () {
  }
}
</script>


<style lang="stylus" scoped>
  .others
    width: 100vw
    padding-bottom: 100px
    box-shadow: 0 6px 4px 1px rgba(18, 22, 33, .1)
</style>
