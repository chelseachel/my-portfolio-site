<template>
  <div class="projects" ref="projects">
    <common-pad-title>Projects</common-pad-title>
    <div class="main">
      <div class="left" v-if="!isMobile">
        <projects-display 
          :scrollHeight="scrollHeight" 
          :offset="offset" 
          :gifs="gifs"
          @scrollToIndex="handleScrollToIndex">  
        </projects-display>
      </div>
      <div class="right">
        <projects-scroll 
          :list="list" 
          @refreshHeight='getHeight' 
          ref="scroll">
        </projects-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import CommonPadTitle from '../common/CommonPadTitle'
import ProjectsScroll from './components/ProjectsScroll'
import ProjectsDisplay from './components/ProjectsDisplay'
export default {
  name: 'Projects',
  props: {
    offset: Number,
  },
  components: {
    CommonPadTitle, ProjectsScroll, ProjectsDisplay
  },
  data () {
    return {
      scrollHeight: 0,
      isMobile: this.utils.isMobile(),
      list : [{
        id: '001',
        imgUrl: 'https://cdn.jsdelivr.net/gh/chelseachel/my-portfolio-site@0.1/src/assets/images/gifs/my-site--640-high.gif',
        title: 'My Portfolio - 本网站',
        github: 'https://github.com/chelseachel/my-portfolio-site',
        demo: null,
        desc: '这是一个用 Vue.js 构建的响应式站点，以 PC 端为主，同时兼容移动端，是我的个人展示网站，由我独立设计开发。<br>希望它能帮助你认识我。',
        content: [
          // '实现较复杂的交互逻辑：<br>通过全局状态管理实现组件的动态定位与切换；无插件的滚动视差功能；结合 CSS 3D 转换实现文字循环动画，并支持点击交互；结合 swiper.js 实现动态绑定的轮播组件',
          // '<b>优化代码的可复用性</b>，对使用率高的组件功能进行抽象管理。',
          // '在用户体验方面：<br>对图片高度不固定的瀑布流组件采取<span>预加载</span>方案<br>运用媒体查询、Grid 布局等方案，实现<span>自适应</span>各规格的设备屏幕<br>实现<span>一键换肤</span>，并对皮肤进行缓存处理<br>采取<span>节流</span>方案优化滚动事件',
          
        {
          info: '<span>复杂交互逻辑</span>',
          list: [
                '通过<strong>全局状态管理</strong>实现组件的动态定位与切换',
                '使用 JS 实现兼容 <strong>IE</strong> 的 <strong>sticky</strong> 粘性定位',
                '无插件的<strong>滚动视差</strong>功能',
                '结合 CSS 3D 变换实现<strong>文字循环</strong>动画，并支持点击交互',
                '结合 swiper 插件实现<strong>动态</strong>绑定的轮播组件'
                ]
        },
        {
          info: '<span>优化用户体验</span>',
          list: [
                '对图片高度不固定的瀑布流组件采取<strong>预加载</strong>方案',
                '运用媒体查询、Flex 布局等方案，实现<strong>自适应</strong>各规格的设备屏幕',
                '实现<strong>一键换肤</strong>，并对皮肤进行 <strong>localStorage</strong> 缓存处理',
                '采取<strong>节流</strong>方案优化滚动事件'
                ]
        },
        {
          info: '<span>优化代码管理</span>',
          list: [
                '注重代码的<strong>可复用性</strong>，对使用率高的组件功能进行抽象封装'
                ]
        }
        ],
        techs: ['Vue', 'Vuex', 'SVG/anime.js', 'vue-awesome-swiper', 'Stylus']
      }, {
        id: '002',
        imgUrl: 'https://cdn.jsdelivr.net/gh/chelseachel/my-portfolio-site@0.1/src/assets/images/gifs/tally-2--original-high.gif',
        title: 'Tally App - 滑动交互记账清单',
        github: 'https://github.com/chelseachel/tally-app',
        demo: 'http://chelseachel.gitee.io/tally-app',
        qrImg: 'https://cdn.jsdelivr.net/gh/chelseachel/cdn@0.5/imgs/tally.jpg',
        desc: '这是一款移动端的滑动交互记账 App，源自个人设计的交互原型，有着简约舒适的界面。独特的记账形式是它的亮点。它提供了清单编辑、清单统计、清单增删等功能。',
        content: [
        { list: [
                '采用 <strong>rem</strong> + <strong>flex</strong> 方案实现移动端响应式布局',
                '编写滑动交互组件，为避免与垂直滚动行为互相干扰，实现滑动行为的方向锁定',
                '使用 <strong>Vuex</strong> 管理全局状态',
                '基于<strong>路由</strong>动态设置<strong>转场动画</strong>，达到更好的视觉效果',
                '使用 <strong>keep-alive</strong> 缓存组件以避免反复渲染，优化网页性能',
                // '封装公共面板组件，方便代码的复用',
                '优化微信浏览器的默认行为'
                ]
        }],
        techs: ['Vue', 'Vuex', 'Vue-router', 'Stylus']
      }, {
        id: '003',
        imgUrl: 'https://cdn.jsdelivr.net/gh/chelseachel/my-portfolio-site@0.1/src/assets/images/gifs/qunar--original-standard.gif',
        title: 'Travel App - 旅游网站 App',
        github: 'https://github.com/chelseachel/TravelApp',
        demo: null,
        desc: '在通读过 Vue 文档以后，以它作为我的第一个 Vue 实战练习项目，模仿去哪儿网开发了首页、城市列表搜索页、景点详情页等页面，由此熟悉了 Vue 相关生态的使用。',
        content: [
        { 
          list: [
                '实现较复杂的功能比如字母表滑动索引、搜索提示、递归组件、数据分页逻辑等',
                '通过 <strong>axios</strong> 获取请求数据，并动态加载内容',
                '拆分可复用的过渡组件，优化代码可维护性',
                '使用 <strong>better-scroll</strong> 优化滚动列表', 
                '通过<strong>配置路由</strong>实现指定页面的回退历史功能'
                ]
        }],
        techs: ['Vue', 'Vuex', 'Vue-router', 'vue-awesome-swiper', 'better-scroll']
      }, {
        id: '004',
        imgUrl: 'https://cdn.jsdelivr.net/gh/chelseachel/my-portfolio-site@0.1/src/assets/images/gifs/pagi.gif',
        title: 'Vue Handy Pagination - 分页器插件',
        github: 'https://github.com/chelseachel/vue-handy-pagination',
        demo: 'https://codepen.io/chelseachel/pen/MWKymmO/',
        desc: '这是一个 NPM 开源项目，是基于 Vue 的 Web 分页器插件，可通过 NPM 安装或者 script 标签引入使用。在过程中我熟悉了插件的开发，以及 NPM library 的配置和打包发布流程。',
        content: [
        {
          list: [
                '开发分页器的业务逻辑，并设定基础样式',
                '开放 API，支持<strong>自定义</strong>样式定制',
                '尝试使用 <strong>Jest</strong> 编写了单元测试',
                '撰写文档及使用示例，方便快速使用'
                ]
        }],
        techs: ['Vue', 'npm', 'Jest']
      }, {
        id: '005',
        imgUrl: 'https://cdn.jsdelivr.net/gh/chelseachel/my-portfolio-site@0.1/src/assets/images/gifs/color-sort-3--640-high.gif',
        title: 'Color Sort - 颜色排序游戏',
        github: 'https://github.com/chelseachel/color-sort-game',
        demo: 'http://chelseachel.gitee.io/color-sort-game',
        desc: '在对 Web 颜色模式差异有所了解后，利用 HSL 模式的渐变优势，我开发了这个颜色排序游戏（仅支持 PC 端）。其中实现了 lerp 渐变色、颜色洗牌、颜色排序、结果判断等功能。',
        content: [
        { 
          list: [
                '根据<strong>配色法则</strong>编写逻辑，使得<strong>随机</strong>生成的配色始终呈现协调的效果',
                '采用 <strong>HSL</strong> 颜色模式而非 RGB 颜色模式，以达成更符合人类视觉的色彩过渡',
                '借助了 <strong>Three.js</strong> 的 color 对象操作颜色属性，使用 <strong>jQuery UI</strong> 实现拖拽元素功能'
                ]
        }],
        techs: ['Javascript', 'jQuery UI', 'Three.js', 'HTML/CSS']
      }, {
        id: '006',
        imgUrl: 'https://cdn.jsdelivr.net/gh/chelseachel/my-portfolio-site@0.1/src/assets/images/gifs/othello--short-original-low.gif',
        title: 'Othello - 黑白棋游戏',
        github: 'https://github.com/chelseachel/othello',
        demo: ' http://chelseachel.gitee.io/othello',
        desc: '这是使用原生 JS 开发的黑白翻转棋游戏，我编写它是为了锻炼自己的编程逻辑能力。',
        content: [
        { 
          list: [
                '棋盘布局上，利用了二维数组模拟整个棋盘坐标，并以矢量坐标定义棋子的八个方向',
                '逻辑处理上，实现了吃子逻辑，并通过遍历棋盘对落子权限、棋局胜负进行判断'
                ]
        }],
        techs: ['Javascript', 'HTML/CSS'] 
      }],
    }
  },
  computed: {
    gifs() {
      let gifs = []
      this.list.forEach((item) => {
        gifs.push(item.imgUrl)
      })
      return gifs
    }
  },
  methods: {
    getHeight () {
      this.scrollHeight = parseInt(this.$refs.projects.getBoundingClientRect().height)
    },
    handleScrollToIndex () {
      this.$refs.scroll.scrollToItem()
    }
  },
  mounted () {
    this.getHeight()
    window.addEventListener('resize', this.utils.throttle(this.getHeight), true)
  },
  updated () {
    this.getHeight()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.utils.throttle(this.getHeight), true)
  }
}
</script>


<style lang="stylus" scoped>
  .projects
    position: relative
    .main
      position: relative
      width: 100vw
      min-height: 100vh
      display: flex
      .left
        display: block
        flex: 9
        order: 1
        @media screen and (max-width: 992px)
          display: none
      .right
        flex: 11
        order: 2
  
</style>
