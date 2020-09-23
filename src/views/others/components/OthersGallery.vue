<template>
  <div class="gallery" ref="viewCheck">
    <div class="container" 
      ref="container" 
      :style="{width: width + 'px', height: height + 'px'}"
    >
      <div class="box" 
        v-for="(item, index) in imgs" :key="item.id" 
        ref="box" 
        @click="handleGalleryClick(index)"
        >
        <div class="pic">
          <img 
            :src="item.url" 
            :class="inView ? 'in-view' : ''"
            @load=imageLoaded 
            @error=imageLoaded
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { checkInView } from '@/common/mixin.js'
export default {
  name: 'OthersGallery',
  mixins: [checkInView],
  props: {
    imgs: Array
  },
  data () {
    return {
      heightArr: [], // 存储每列高度
      minIndex: 0,
      width: 0,
      height: 0,
      loadedImages: 0,
    }
  },
  watch: {
    loadedImages: function () {
      if (this.loadedImages === this.imgs.length) {
        this.$nextTick(function() {
          this.waterfall()
        })
      }
    }
  },
  methods: {
    waterfall () {
      const boxes = this.$refs.box // array
      const galleryWidth = this.$refs.viewCheck.offsetWidth
      const boxWidth = boxes[0].offsetWidth
      const cols = Math.floor(galleryWidth / boxWidth) // 计算 gallery 的总列数
      this.width = boxWidth * cols // container 的宽度
      
      this.heightArr = [] // 存储每列高度
      for (let i = 0; i < cols; i++) {
        this.heightArr[i] = 0
      }
      this.$nextTick(() => {
        for (let i = 0; i < boxes.length; i++) {     
          let minH = Math.min.apply(null, this.heightArr)
          this.minIndex = this.getMinhIndex(this.heightArr, minH)
          boxes[i].style.position = 'absolute'
          boxes[i].style.top = minH + 'px'
          boxes[i].style.left = this.minIndex * (boxWidth) + 'px'
          this.heightArr[this.minIndex] += (boxes[i].offsetHeight)
        }
        this.height = Math.max.apply(null, this.heightArr) // container 的高度
      })
    },
    getMinhIndex(arr, val) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) { 
          return i
        }
      }
    },
    imageLoaded() {
      this.loadedImages += 1
    },
    handleGalleryClick (index) {
      this.$emit('showSwiper', index)
    }
  },
  mounted () {
    window.addEventListener('resize', this.utils.throttle(this.waterfall), true)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.utils.throttle(this.waterfall), true)
  }
}
</script>


<style lang="stylus" scoped>
  .gallery
    position: relative
    width: 80%
    max-width: 1280px
    margin: 0 auto
    .container
      position: relative
      margin: 0 auto
      overflow: hidden
      .box
        padding: 12px
        width: 250px
        background: transparent
        .pic
          position: relative
          width: 250px
          border-radius: 5px
          background: var(--theme-translucent)
          overflow: hidden
          transform: translateY(0px)
          transition: all .8s ease
          img
            width: 100%
            opacity: 0.1
            transform: translateY(-100px)
            transition: all .8s ease
          .in-view
            opacity: 1
            transform: translateY(0px)
          @media (hover: hover) and (pointer: fine)
            &:hover
              img
                transform: scale(1.2)
            &:hover:before
              content:''
              position: absolute
              width: 100%
              height: 100%
              background: rgba(255,255,255,.1)
              z-index: 10
              cursor: zoom-in
  @media screen and (max-width: 685px)
    .gallery
      width: 90vw
      .container
        .box
          padding: 2vw
          width: 40vw
          .pic
            width: 40vw
</style>  
