<template>
  <div class="container" @click="handleCloseClick">
    <div class="wrapper">
      <swiper :options="swiperOptions" ref="mySwiper">
        <swiper-slide v-for="item in fullsizeImgs" :key="item.id">
          <img class="gallery-img" :src="item.url" @click="handleNextClick">
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="close" @click="handleButtonClick"></div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'GallerySwiper',
  props: {
    index: Number
  },
  data () {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        observer: true,
        observeParents: true, //当swiper的父元素变化时，swiper更新
      },
      fullsizeImgs:[{
        id: '001',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/1.jpg'
      }, {
        id: '002',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/2.jpg'
      }, {
        id: '003',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/3.jpg'
      }, {
        id: '004',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/4.jpg'
      }, {
        id: '005',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/5.jpg'
      }, {
        id: '006',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/6.jpg'
      }, {
        id: '007',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/7.jpg'
      }, {
        id: '008',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/8.jpg'
      }, {
        id: '009',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/9.jpg'
      }, {
        id: '010',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/10.jpg'
      }, {
        id: '011',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/11.jpg'
      }, {
        id: '012',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/12.jpg'
      }, {
        id: '013',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/13.jpg'
      }, {
        id: '014',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/14.jpg'
      }, {
        id: '015',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/15.jpg'
      }, {
        id: '016',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/16.jpg'
      }, {
        id: '017',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/17.jpg'
      }, {
        id: '018',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/18.jpg'
      }, {
        id: '019',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/19.jpg'
      }, {
        id: '020',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/20.jpg'
      }, {
        id: '021',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/21.jpg'
      }, {
        id: '022',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/22.jpg'
      }, {
        id: '023',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/23.jpg'
      }, {
        id: '036',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.9/imgs/gallery/36.jpg'
      }, {
        id: '024',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/24.jpg'
      }, {
        id: '025',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/25.jpg'
      }, {
        id: '026',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/26.jpg'
      }, {
        id: '027',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/27.jpg'
      }, {
        id: '028',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/28.jpg'
      }, {
        id: '029',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/29.jpg'
      }, {
        id: '030',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/30.jpg'
      }, {
        id: '031',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/31.jpg'
      }, {
        id: '032',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/32.jpg'
      }, {
        id: '033',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/33.jpg'
      }, {
        id: '034',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/34.jpg'
      }, {
        id: '035',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.8/imgs/gallery/35.jpg'
      }],
    }
  },
  watch: {
    index (val) {
      this.swiper.activeIndex = val
    }
  },
  methods: {
    handleCloseClick (e) {
      if (e.target.className === 'swiper-slide swiper-slide-active' || e.target.className === 'wrapper') {
        this.$emit('close')
      }
    },
    handleButtonClick () {
      this.$emit('close')
    },
    handleNextClick () {
      this.swiper.slideNext()
    }
  },
  mounted() {
    this.swiper = this.$refs.mySwiper.$swiper
  }
}
</script>

<style lang="stylus" scoped>
  .container
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: rgba(12,12,12,.8)
    z-index: 100
    .wrapper
      width: 100%
      height: 100%
      display: flex
      justify-content: center
      align-items: center
      cursor: zoom-out
      .swiper-container
        height: 80%
        max-height: 600px
        .swiper-slide
          display: flex
          justify-content: center
          align-items: center
          .gallery-img
            max-width: 80%
            max-height: 100%
            box-shadow: 0px 0px 10px 3px rgba(12, 12, 12, .1)
            cursor: pointer
            @media screen and (max-width: 768px)
              max-width: 70%
        .swiper-button-prev
        .swiper-button-next
          color: #FDFDF9
          opacity: .9
          transform: scale(1.2)
          @media screen and (max-width: 768px)
            transform: scale(1)
        .swiper-button-prev
          left: 20px
        .swiper-button-next
          right: 20px
    .close
      position: absolute
      top: 16px
      right: 16px
      width: 40px
      height: 40px
      background: transparent
      opacity: .9
      transform: rotate(45deg)
      cursor: pointer
      &:hover
        opacity: .6
        transition: opacity .3s ease
      &:before
        content: ''
        position: absolute
        top: 19px
        left: 8px
        width: 24px
        height: 2px
        border-radius: 2px
        background: #FDFDF9
      &:after
        content: ''
        position: absolute
        top: 8px
        left: 19px
        width: 2px
        height: 24px
        border-radius: 2px
        background: #FDFDF9
</style>
