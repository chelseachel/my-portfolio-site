<template>
  <div class="gallery" ref="viewCheck">
    <div class="container" ref="container" :style="{width: width + 'px', height: height + 'px'}">
      <div class="box" 
        v-for="(item, index) in images" :key="item.id" 
        ref="box" 
        @click="handleGalleryClick(index)"
        >
        <div class="pic">
          <img :src="item.url" :class="inView ? 'in-view' : ''" @load=imageLoaded>
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
  data () {
    return {
      images: [{
        id: '001',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/1.jpg'
      }, {
        id: '002',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/2.jpg'
      }, {
        id: '003',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/3.jpg'
      }, {
        id: '004',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/4.jpg'
      }, {
        id: '005',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/5.jpg'
      }, {
        id: '006',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/6.jpg'
      }, {
        id: '007',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/7.jpg'
      }, {
        id: '008',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/8.jpg'
      }, {
        id: '009',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/9.jpg'
      }, {
        id: '010',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/10.jpg'
      }, {
        id: '011',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/11.jpg'
      }, {
        id: '012',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/12.jpg'
      }, {
        id: '013',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/13.jpg'
      }, {
        id: '014',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/14.jpg'
      }, {
        id: '015',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/15.jpg'
      }, {
        id: '016',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/16.jpg'
      }, {
        id: '017',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/17.jpg'
      }, {
        id: '018',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/18.jpg'
      }, {
        id: '019',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/19.jpg'
      }, {
        id: '020',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/20.jpg'
      }, {
        id: '021',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/21.jpg'
      }, {
        id: '022',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/22.jpg'
      }, {
        id: '023',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/23.jpg'
      }, {
        id: '024',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/24.jpg'
      }, {
        id: '025',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/25.jpg'
      }, {
        id: '026',
        url: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn/images/26.jpg'
      }],
      heightArr: [], // 存储每列高度
      minIndex: 0,
      width: 0,
      height: 0,
      loadedImages: 0
    }
  },
  watch: {
    loadedImages: function () {
      if (this.loadedImages === this.images.length) {
        this.$nextTick(function() {
          this.waterfall()
        }, 100)
      }
    }
  },
  methods: {
    waterfall () {
      const boxs = this.$refs.box // array
      // const clientWidth = document.body.clientWidth
      const galleryWidth = this.$refs.viewCheck.offsetWidth
      const boxWidth = boxs[0].offsetWidth
      const cols = Math.floor(galleryWidth / boxWidth) // 计算 gallery 的总列数
      this.width = boxWidth * cols // container 的宽度
      
      this.heightArr = [] // 存储每列高度
      for (let i = 0; i < cols; i++) {
        this.heightArr[i] = 0
      }
      this.$nextTick(() => {
        for (let i = 0; i < boxs.length; i++) {     
          let minH = Math.min.apply(null, this.heightArr)
          this.minIndex = this.getMinhIndex(this.heightArr, minH)
          boxs[i].style.position = 'absolute'
          boxs[i].style.top = minH + 'px'
          boxs[i].style.left = this.minIndex * (boxWidth) + 'px'
          this.heightArr[this.minIndex] += (boxs[i].offsetHeight)
        }
        this.height = Math.max.apply(null, this.heightArr) // container 的高度
      }, 100)
      
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
      this.$emit('showSwiper', this.images, index)
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
          transition: all .8s ease
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
          img
            width: 100%
            opacity: 0.1
            transform: translateY(-100px)
            transition: all .8s ease
          .in-view
            opacity: 1
            transform: translateY(0px)
  @media screen and (max-width: 992px)
    .gallery
      width: 90vw
      .container
        .box
          padding: 2vw
          width: 40vw
          .pic
            width: 40vw
</style>  
