<template>
  <div class="others" :class="inView ? 'in-view' : ''" ref="viewCheck">
    <others-title></others-title>
    <others-gallery @showSwiper="handleSwiperShow"></others-gallery>
    <transition name="fade">
      <gallery-swiper :imgs="images" :index="itemIndex" v-if="showSwiper" @close="handleSwiperClose"></gallery-swiper>
    </transition>
  </div>
</template>

<script>
import OthersTitle from './components/OthersTitle'
import OthersGallery from './components/OthersGallery'
import GallerySwiper from './components/GallerySwiper'
import { checkInView } from '@/common/mixin.js'
export default {
  name: 'Others',
  components: {
    OthersTitle, OthersGallery, GallerySwiper
  },
  mixins: [checkInView],
  data () {
    return {
      showSwiper: false,
      images:[],
      itemIndex: 0
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
    }
  }
}
</script>


<style lang="stylus" scoped>
  .others
    width: 100vw
    padding-bottom: 100px
    background-color: var(--theme-translucent)
    transition: background-color .6s
  .in-view
    background-color: transparent
  .fade-enter
  .fade-leave-to
    opacity: 0
  .fade-enter-to
  .fade-leave
    opacity: 1
  .fade-enter-active
  .fade-leave-active
    transition: opacity .3s
</style>
