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
        title: 'Title',
        content: `0出因计太收总消家文张，林研断改布具收备品层月，备特居则歼周C听伶。 提提就样立越传学也油大值按，区形种运度R快行力该。 到金最团形如花得实务，统除总先反年器上，极角弦1高月WR。
          手量干了或人的厂，认度很V扯还。
          史选完只她子气高，本音人可达状，保长G象很兵。 半深长统反全动地断，特工属车来边价，只年5格色周录。`
      }, {
        id: '002',
        url: '',
        title: 'Title',
        content: `1才手习始基打常流，关持律居几吵。 并在几山全照家美据，根便取实型山有又，任区1医赤较蠢。今门量价定问身织院火，维而工面按西适个定，法积DU杠求步声。 约队资得代花好她论业，处区形风体原存间代，史日村厂吼66男。`
      }, {
        id: '003',
        url: '',
        title: 'Title',
        content: `2正量引周位准放才感料石热，会满不圆没李始受陕有。 列东石去般群则价积达需，安易千形总活思同方，美些露导一E着身斯。 七近西或除术那取严代无局，么及到事长家七近家火消空，音空A小么柜均赚样呜。`
      }, {
        id: '004',
        url: '',
        title: 'Title',
        content: `3金方别音步进须每置了，土厂提样长种四革市委，选飞3走呀受往身。 场些红易大据看，包格队详身。 任院约采价则权教，达铁并八说达，列马束构众农。
          酸北他取治持再于金，料术已热X能。 直相教过法据历劳起调权，建处向取东束何丽你。 周方农第结东六，思太思外写间，利详造例明。 理口别物更众便而热如却，而行象万进热信想她月次，矿S律拒半杆式医。
          西外主水法确她影们，江约众本我样研美史，空W命丽杆直由。 便西新写必不较带取规作联，个论强被老土音想圆管领元，增压孤6些期元奇重思。 所认取面中法积体子，参划生在九元毛东，声条届多过难K。 教型实共在战联采因，按验委向月美件住，容派W酸-际。 期类共矿看能革共至事，下里导知么严格众，术效9身治计那群。`
      }, {
        id: '005',
        url: '',
        title: 'Title',
        content: `4格华出教青适门区术，提给正采蠢走正。 团至表市志多元第千，子千使口装新后，史由X气小步陕。 收派何地动做头实却，备明重N该该。 然委金压政物眼状织，劳许什不响个路直全，回刷区容辰火儿。 加容打示政己，千完面方点，斗7E拒。
          除例亲被广现标，义气候家行何，面多材市政坊。 保事起道水社型处院满，研放相那深都九后提，写是豆I品回肃省。 定志当济严三品数也片，低料商五图斗接认，支很励重后拉U卧。 质两需转斗类示，工对需济指易接情，带C镰记估查。
          型文无联济强完期社么专适，立号育集K只律布个。 办何了音始装达，观事55。`
      }, {
        id: '006',
        url: '',
        title: 'Title',
        content: `5格华出教青适门区术，提给正采蠢走正。 团至表市志多元第千，子千使口装新后，史由X气小步陕。 收派何地动做头实却，备明重N该该。 然委金压政物眼状织，劳许什不响个路直全，回刷区容辰火儿。 加容打示政己，千完面方点，斗7E拒。
          除例亲被广现标，义气候家行何，面多材市政坊。 保事起道水社型处院满，研放相那深都九后提，写是豆I品回肃省。 定志当济严三品数也片，低料商五图斗接认，支很励重后拉U卧。 质两需转斗类示，工对需济指易接情，带C镰记估查。
          型文无联济强完期社么专适，立号育集K只律布个。 办何了音始装达，观事55。`
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
      this.bottomHeight = clientHeight - this.itemHeight - 20
      if (this.bottomHeight < 0) {
        this.bottomHeight = 0
      }
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
      margin-top: calc(20vh - 150px)
      .bottom
        width: 100%
  @media screen and (max-width: 768px)
    .blank
      display: none
    .bottom
      display: none
</style>
