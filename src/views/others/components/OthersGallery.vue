<template>
  <div class="gallery">
    <div class="container" ref="container" :style="{width: containerWidth + 'px', height: containerHeight + 'px'}">
      <div class="box" ref="box" v-for="item in images" :key="item.id">
        <div class="pic">
          <img :src="item.url">
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
      clientWidth: document.body.clientWidth,
      boxs: null,
      heightArr: [], // 存储每列高度
      index: 0,
      // containerHeight: 0
    }
  },
  computed: {
    cols () {
      const galleryWidth = this.clientWidth * 0.9
      return Math.floor(galleryWidth / 220) // 计算 gallery 的总列数
    },
    containerWidth () {
      return 220 * this.cols // box container 的宽度
    },
    containerHeight () {
      return this.heightArr[this.index]
    }
  },
  methods: {
    waterfall () {
      // this.boxs = this.$refs.box //array
      // console.log(this.boxs);
      // this.galleryWidth = document.body.clientWidth * 0.9
      // const cols = Math.floor(this.galleryWidth / 220) // 计算 gallery 的总列数
      // const width = 220 * cols 
      // this.container = this.$refs.container
      // if (container) {
      // this.container.style.width = width + 'px' //设置 
      // }
      // let heightArr = [] //存储每列高度
      if (this.boxs) {
        for (let i = 0; i < this.boxs.length; i++) {
          if (i < this.cols) {
            this.heightArr.push(this.boxs[i].offsetHeight)
          } else {
            let minH = Math.min.apply(null, this.heightArr)
            this.index = this.getMinhIndex(this.heightArr, minH) //最小高度那列的index
            this.boxs[i].style.position = 'absolute'
            this.boxs[i].style.top = minH + 'px'
            this.boxs[i].style.left = this.boxs[this.index].offsetLeft + 'px'
            this.heightArr[this.index] += this.boxs[i].offsetHeight
            console.log(this.heightArr[this.index]);
            // this.containerHeight = 
          }
        }
      }
    },
    getClientWidth () {
      this.clientWidth = document.body.clientWidth
    },
    getMinhIndex(arr, val) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) { 
          return i
        }
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.boxs = this.$refs.box //array
      this.waterfall()
    })
    window.addEventListener('resize', this.getClientWidth, true)
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
      overflow: hidden
      // &:after
      //   content:''
      //   display: block
      //   clear: both
      .box
        float: left
        padding: 10px
        width: 200px
        background: transparent
        .pic
          width: 200px
          border-radius: 5px
          overflow: hidden
          background: #ccc
          img
            display: block
            width: 100%
    
</style>
