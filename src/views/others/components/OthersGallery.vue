<template>
  <div class="gallery" ref="gallery">
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
export default {
  name: 'OthersGallery',
  components: {
  },
  data () {
    return {
      images: [{
        id: '001',
        url: require('@/assets/images/1.jpg')
      }, {
        id: '002',
        url: require('@/assets/images/2.jpg')
      }, {
        id: '003',
        url: require('@/assets/images/3.jpg')
      }, {
        id: '004',
        url: require('@/assets/images/4.jpg')
      }, {
        id: '005',
        url: require('@/assets/images/5.jpg')
      }, {
        id: '006',
        url: require('@/assets/images/6.jpg')
      }, {
        id: '007',
        url: require('@/assets/images/7.jpg')
      }, {
        id: '008',
        url: require('@/assets/images/8.jpg')
      }, {
        id: '009',
        url: require('@/assets/images/9.jpg')
      }, {
        id: '010',
        url: require('@/assets/images/10.jpg')
      }, {
        id: '011',
        url: require('@/assets/images/11.jpg')
      }, {
        id: '012',
        url: require('@/assets/images/12.jpg')
      }, {
        id: '013',
        url: require('@/assets/images/13.jpg')
      }, {
        id: '014',
        url: require('@/assets/images/14.jpg')
      }, {
        id: '015',
        url: require('@/assets/images/15.jpg')
      }, {
        id: '016',
        url: require('@/assets/images/16.jpg')
      }, {
        id: '017',
        url: require('@/assets/images/17.jpg')
      }, {
        id: '018',
        url: require('@/assets/images/18.jpg')
      }, {
        id: '019',
        url: require('@/assets/images/19.jpg')
      }, {
        id: '020',
        url: require('@/assets/images/20.jpg')
      }, {
        id: '021',
        url: require('@/assets/images/21.jpg')
      }, {
        id: '022',
        url: require('@/assets/images/22.jpg')
      }, {
        id: '023',
        url: require('@/assets/images/23.jpg')
      }, {
        id: '024',
        url: require('@/assets/images/24.jpg')
      }, {
        id: '025',
        url: require('@/assets/images/25.jpg')
      }, {
        id: '026',
        url: require('@/assets/images/26.jpg')
      }],
      heightArr: [], // 存储每列高度
      minIndex: 0,
      width: 0,
      height: 0,
      loadedImages: 0,
      inView: false,
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
      const galleryWidth = this.$refs.gallery.offsetWidth
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
    checkInView () {
      const el = this.$refs.gallery
      if (this.utils.isElementInView(el)) {
        this.inView = true
      }
    },
    handleGalleryClick (index) {
      this.$emit('showSwiper', this.images, index)
    }
  },
  mounted () {
    this.checkInView()
    window.addEventListener('resize', this.utils.throttle(this.waterfall), true)
    window.addEventListener('scroll', this.utils.throttle(this.checkInView), true)
    window.addEventListener('resize', this.utils.throttle(this.checkInView), true)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.utils.throttle(this.waterfall), true)
    window.removeEventListener('scroll', this.utils.throttle(this.checkInView), true)
    window.removeEventListener('resize', this.utils.throttle(this.checkInView), true)
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
  @media screen and (max-width: 768px)
    .gallery
      width: 100vw
      .container
        .box
          padding: 2vw
          width: 44vw
          .pic
            width: 44vw
</style>  
