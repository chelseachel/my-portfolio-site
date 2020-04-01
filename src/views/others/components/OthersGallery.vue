<template>
  <div class="gallery">
    <div class="container" ref="container" :style="{width: width + 'px', height: height + 'px'}">
      <div class="box" ref="box" v-for="item in images" :key="item.id">
        <div class="pic">
          <img :src="item.url" @load=imageLoaded>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OthersGallery',
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
      }, ],
      // clientWidth: document.body.clientWidth,
      // boxs: null,
      heightArr: [], // 存储每列高度
      minIndex: 0,
      width: 0,
      height: 0,
      loadedImages: 0

    }
  },
  computed: {
    // cols () {
    //   const galleryWidth = this.clientWidth * 0.9
    //   return Math.floor(galleryWidth / 220) // 计算 gallery 的总列数
    // },
    // containerWidth () {
    //   return 220 * this.cols // box container 的宽度
    // },
    // containerHeight () {
    //   return Math.max.apply(null, this.heightArr) // box container 的高度
    // }
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
      const clientWidth = document.body.clientWidth
      const galleryWidth = clientWidth * 0.9
      const cols = Math.floor(galleryWidth / 220) // 计算 gallery 的总列数
      this.width = 220 * cols // container 的宽度
      
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
          boxs[i].style.left = this.minIndex * 220 + 'px'
          this.heightArr[this.minIndex] += boxs[i].offsetHeight         
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
    }
  },
  mounted () {
    window.addEventListener('resize', this.waterfall, true)
  }
}
</script>


<style lang="stylus" scoped>
  .gallery
    width: 90%
    margin: 0 auto
    .container
      position: relative
      margin: 0 auto
      .box
        padding: 10px
        width: 200px
        background: transparent
        transition: all .5s
        .pic
          width: 200px
          border-radius: 5px
          overflow: hidden
          background: #ccc
          img
            width: 100%
    
</style>
