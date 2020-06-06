<template>
  <div class="others" :class="inView ? 'in-view' : ''" ref="others">
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
    
  },
  data () {
    return {
      showSwiper: false,
      images:[],
      itemIndex: 0,
      inView: false
    }
  },
  methods: {
    handleSwiperShow (images, index) {
      this.images = images
      this.itemIndex = index
      this.$nextTick(() => {
        this.showSwiper = true
      })
    },
    handleSwiperClose () {
      this.showSwiper = false
    },
    checkInView () {
      const el = this.$refs.others
      if (this.utils.isElementInView(el)) {
        this.inView = true
      } else {
        this.inView = false
      }
    },
  },
  mounted () {
    this.checkInView()
    window.addEventListener('scroll', this.utils.throttle(this.checkInView), true)
    window.addEventListener('resize', this.utils.throttle(this.checkInView), true)
  }
}
</script>


<style lang="stylus" scoped>
  .others
    width: 100vw
    padding-bottom: 100px
    box-shadow: 0 6px 4px 1px rgba(18, 22, 33, .1)
    background-color: rgba(241, 185, 8, .2)
    transition: background-color .6s
  .in-view
    background-color: transparent
</style>
