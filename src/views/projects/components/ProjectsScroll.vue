<template>
  <div class="container">
    <div class="blank"></div>
    <div class="wrapper">
      <projects-scroll-item v-for="(item, index) in list" :key="item.id" :item="item" :index="index" ref="item"></projects-scroll-item>
      <div class="bottom" ref="bottom" :style="{height: bottomHeight + 'px'}"></div>
    </div>
  </div>
</template>

<script>
import ProjectsScrollItem from './children/ProjectsScrollItem'
import { mapState } from 'vuex'
export default {
  name: 'ProjectsScroll',
  components: {
    ProjectsScrollItem
  },
  data () {
    return {
      itemElements:[],
      list : [{
        id: '001',
        url: '',
        title: 'My Site - 本网站',
        titleZh: ' - 本网站',
        desc: '这是一个用 Vue.js 构建的响应式站点，用以个人展示，以 PC 端为主，同时兼容移动端。旨在通过流畅的交互带来舒适的浏览体验。',
        content: `
                  用户体验：自适应各种规格的设备屏幕；对图片高度不固定的瀑布流组件采用预加载方案；实现一键换肤，并对皮肤进行本地缓存；采取节流方案优化滚动事件<br>
                  复杂交互逻辑：文字循环动画；组件动态定位；组件间状态双向绑定；滚动视差；
                  图片轮播<br>`
                  ,
        techs: ['Vue', 'Vuex', 'Swiper.js', 'Stylus']
      }, {
        id: '002',
        url: '',
        title: 'Tally App - 交互记账清单',
        titleZh: ' - 交互记账清单',
        desc: '这是一款滑动交互记账 APP，源自个人设计的交互原型，实现了清单编辑、清单统计、清单增删等功能。',
        content: `采用 rem + flex 方案实现移动端响应式布局<br>
                  滑动交互组件<br>
                  全局数据管理<br>
                  响应式布局<br>
                  实时交互动画`,
        techs: ['Vue', 'Vuex', 'Vue Router', 'Stylus']
      }, {
        id: '003',
        url: '',
        title: '仿去哪儿 APP',
        desc: '这是我第一次使用 Vue.js 完成的项目，通过开发景点首页、城市列表搜索页、景点详情页几大模块，熟悉了 Vue 相关生态的使用。',
        content: `2正量引周位准放才感料石热，会满不圆没李始受陕有。 列东石去般群则价积达需，安易千形总活思同方，美些露导一E着身斯。 七近西或除术那取严代无局，么及到事长家七近家火消空，音空A小么柜均赚样呜。`,
        techs: ['Vue', 'Vuex', 'Vue Router', 'Swiper.js', 'better-scroll']
      }, {
        id: '004',
        url: '',
        title: 'Vue Handy Pagination - NPM插件',
        content: `3金方别音步进须每置了，土厂提样长种四革市委，选飞3走呀受往身。 场些红易大据看，包格队详身。 任院约采价则权教，达铁并八说达，列马束构众农。
          酸北他取治持再于金，料术已热X能。 直相教过法据历劳起调权，建处向取东束何丽你。 周方农第结东六，思太思外写间，利详造例明。 理口别物更众便而热如却，而行象万进热信想她月次，矿S律拒半杆式医。
          西外主水法确她影们，江约众本我样研美史，空W命丽杆直由。 便西新写必不较带取规作联，个论强被老土音想圆管领元，增压孤6些期元奇重思。 所认取面中法积体子，参划生在九元毛东，声条届多过难K。 教型实共在战联采因，按验委向月美件住，容派W酸-际。 期类共矿看能革共至事，下里导知么严格众，术效9身治计那群。`,
        techs: ['Vue', 'Vuex']
      }, {
        id: '005',
        url: '',
        title: 'Title',
        content: `4格华出教青适门区术，提给正采蠢走正。 团至表市志多元第千，子千使口装新后，史由X气小步陕。 收派何地动做头实却，备明重N该该。 然委金压政物眼状织，劳许什不响个路直全，回刷区容辰火儿。 加容打示政己，千完面方点，斗7E拒。
          除例亲被广现标，义气候家行何，面多材市政坊。 保事起道水社型处院满，研放相那深都九后提，写是豆I品回肃省。 定志当济严三品数也片，低料商五图斗接认，支很励重后拉U卧。 质两需转斗类示，工对需济指易接情，带C镰记估查。
          型文无联济强完期社么专适，立号育集K只律布个。 办何了音始装达，观事55。`,
        techs: ['Vue', 'Vuex']
      }, {
        id: '006',
        url: '',
        title: 'Title',
        content: `5格华出教青适门区术，提给正采蠢走正。 团至表市志多元第千，子千使口装新后，史由X气小步陕。 收派何地动做头实却，备明重N该该。 然委金压政物眼状织，劳许什不响个路直全，回刷区容辰火儿。 加容打示政己，千完面方点，斗7E拒。
          除例亲被广现标，义气候家行何，面多材市政坊。 保事起道水社型处院满，研放相那深都九后提，写是豆I品回肃省。 定志当济严三品数也片，低料商五图斗接认，支很励重后拉U卧。 质两需转斗类示，工对需济指易接情，带C镰记估查。
          型文无联济强完期社么专适，立号育集K只律布个。 办何了音始装达，观事55。`,
        techs: ['Vue', 'Vuex']
      },],
      itemHeight: 0,
      bottomHeight: 0
    }
  },
  computed: {
    ...mapState([
      'activeIndex'
    ]),
  },
  watch: {
    itemHeight: function () {
      let clientHeight = document.body.clientHeight
      // 使 item 顶部与展示图片平齐
      let bottomH = clientHeight - 0.2*clientHeight - (this.itemHeight - 100)
      this.bottomHeight = bottomH < 0 ? 0 : bottomH
    }
  },
  methods: {
    getItemHeight () {
      this.$nextTick(function() {
        this.itemHeight = parseInt(this.$refs.item[5].$el.getBoundingClientRect().height)
      }, 10)
    },
    getItemElements () {
      for (let i = 0; i < this.list.length; i++) {
        this.itemElements[i] = this.$refs.item[i].$el
      }
    },
    scrollToItem () {
      const item = this.itemElements[this.activeIndex]
      item.scrollIntoView({behavior: "smooth"})
    }
  },
  mounted () {
    this.getItemHeight()
    window.addEventListener('resize', this.utils.throttle(this.getItemHeight), true)
    this.getItemElements()
  },
  updated () {
    this.getItemHeight()
    this.$emit('refreshHeight')
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.utils.throttle(this.setbottomHeight), true)
  }
}
</script>


<style lang="stylus" scoped>
  .container
    position: relative
    width: 100%
    display: flex
    .blank
      flex: 45
    .wrapper
      flex: 55
      display: block
      margin-top: calc(20vh - 100px)
      .bottom
        width: 100%
  @media screen and (max-width: 992px)
    .blank
      display: none
    .bottom
      display: none
</style>
