<template>
  <div class="others">
    <others-title></others-title>
    <others-gallery :imgs="images" @showSwiper="handleSwiperShow"></others-gallery>
    <transition name="fade">
      <gallery-swiper :index="itemIndex" v-show="showSwiper" @close="handleSwiperClose"></gallery-swiper>
    </transition>
  </div>
</template>

<script>
import OthersTitle from './components/OthersTitle'
import OthersGallery from './components/OthersGallery'
import GallerySwiper from './components/GallerySwiper'
export default {
  name: 'Others',
  components: {
    OthersTitle, OthersGallery, GallerySwiper
  },
  data () {
    return {
      showSwiper: false,
      itemIndex: 0,
      images: [{
        id: '001',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/1.jpg'
      }, {
        id: '002',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/2.jpg'
      }, {
        id: '003',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/3.jpg'
      }, {
        id: '004',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/4.jpg'
      }, {
        id: '005',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/5.jpg'
      }, {
        id: '006',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/6.jpg'
      }, {
        id: '007',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/7.jpg'
      }, {
        id: '008',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/8.jpg'
      }, {
        id: '009',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/9.jpg'
      }, {
        id: '010',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/10.jpg'
      }, {
        id: '011',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/11.jpg'
      }, {
        id: '012',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/12.jpg'
      }, {
        id: '013',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/13.jpg'
      }, {
        id: '014',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/14.jpg'
      }, {
        id: '015',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/15.jpg'
      }, {
        id: '016',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/16.jpg'
      }, {
        id: '017',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/17.jpg'
      }, {
        id: '018',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/18.jpg'
      }, {
        id: '019',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/19.jpg'
      }, {
        id: '020',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/20.jpg'
      }, {
        id: '021',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/21.jpg'
      }, {
        id: '022',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/22.jpg'
      }, {
        id: '023',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/23.jpg'
      }, {
        id: '024',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/24.jpg'
      }, {
        id: '025',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/25.jpg'
      }, {
        id: '026',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/26.jpg'
      }, {
        id: '027',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/27.jpg'
      }, {
        id: '028',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/28.jpg'
      }, {
        id: '029',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/29.jpg'
      }, {
        id: '030',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/30.jpg'
      }, {
        id: '031',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/31.jpg'
      }, {
        id: '032',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/32.jpg'
      }, {
        id: '033',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/33.jpg'
      }, {
        id: '034',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/34.jpg'
      }, {
        id: '035',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/small/35.jpg'
      }],
    }
  },
  methods: {
    handleSwiperShow (index) {
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
    padding-bottom: 130px
    // background-color: var(--theme-translucent)
    // transition: background-color .6s
  // .in-view
  //   background-color: transparent
  // .fade-enter
  // .fade-leave-to
  //   opacity: 0
  // .fade-enter-to
  // .fade-leave
  //   opacity: 1
  // .fade-enter-active
  // .fade-leave-active
  //   transition: opacity .3s
</style>
