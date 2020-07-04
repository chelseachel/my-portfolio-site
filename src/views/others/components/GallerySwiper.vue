<template>
  <div class="container" @click="handleCloseClick">
    <div class="wrapper">
      <swiper :options="swiperOptions" ref="mySwiper">
        <swiper-slide v-for="item in imgs" :key="item.id">
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
    imgs: {
      type: Array,
      default () {
        return []
      }
    },
    index: Number
  },
  data () {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        observer: true,
        observeParents: true, //当swiper的父元素变化时，swiper更新
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  watch: {
    index (val) {
      this.swiper.activeIndex = val
    }
  },
  methods: {
    handleCloseClick (e) {
      if (e.target.className == 'swiper-slide swiper-slide-active' || e.target.className == 'wrapper') {
        this.$emit('close')
      }
    },
    handleButtonClick () {
      this.$emit('close')
    },
    handleNextClick () {
      this.swiper.slideNext()
    }
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
          flex-direction: column
          justify-content: center
          align-items: center
          .gallery-img
            max-width: 80%
            max-height: 100%
            box-shadow: 0px 0px 10px 3px rgba(12, 12, 12, .1)
            cursor: pointer
        .swiper-button-prev
        .swiper-button-next
          color: #FDFDF9
          opacity: .9
          transform: scale(1.2)
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
