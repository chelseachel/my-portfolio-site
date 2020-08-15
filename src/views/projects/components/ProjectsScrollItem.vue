<template>
  <div class="item" :class="inView ? 'showitem' : ''" ref="viewCheck">
    <div class="title">
      <span>{{item.title}}</span>
      
    </div>
    <div class="pic">
      <img :src="item.url">
    </div>
    <div class="link">
      <a href="">Github</a>
      <a href="">Demo</a>
    </div>
    <div class="desc" v-html="item.desc"></div>
    <div class="content-wrapper">
      <div class="sub-title">技术要点</div>
      <ul class="content">
        <li 
          v-for="(content, index) in item.content" :key="index">
          <span v-if="content.info" v-html="content.info"></span>
          <ul v-if="content.list">
            <li 
              v-for="(item, index) in content.list" 
              :key="index"
              v-html="item">
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="techs-wrapper">
      <div class="sub-title">技术栈</div>
      <div class="techs">
        <span class="tech" v-for="(value, index) in item.techs" :key="index">{{value}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { checkInView } from '@/common/mixin.js'
export default {
  name: 'ProjectsScrollItem',
  mixins: [checkInView],
  props: {
    item: Object,
    index: Number
  },
  data () {
    return {
      rect: null
    }
  },
  methods: {
    scrollStoreIndex () {
      const clientHeight = document.body.clientHeight
      this.rect = this.$refs.viewCheck.getBoundingClientRect()
      if (this.rect && this.rect.top < (clientHeight * 0.35) && this.rect.top > 0 || this.rect && this.rect.bottom >= (clientHeight * 0.4) && this.rect.bottom <= clientHeight) {
        this.$store.commit('changeActiveIndex', this.index)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.utils.throttle(this.scrollStoreIndex), true)
    window.addEventListener('resize', this.utils.throttle(this.scrollStoreIndex), true)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.utils.throttle(this.scrollStoreIndex), true)
    window.removeEventListener('resize', this.utils.throttle(this.scrollStoreIndex), true)
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .item
    width: 65%
    max-width: 500px
    padding: 150px 0 50px
    margin-left: 13.5%
    box-sizing: border-box
    line-height: 1.75em
    font-size: 15px
    text-align: justify
    opacity: 0
    transform: translateY(50px)
    transition: all .7s ease-in-out
    .pic
      display: none
    .title
      margin-bottom: 10px
      font-size: 20px
      font-weight: 600
    .link
      a
        position: relative
        display: inline-block
        margin-right: 10px
        margin-bottom: 10px
        padding: .36em .56em
        border-radius: 6px
        line-height: 1em
        font-size: 13px
        background: var(--theme-translucent)
        // background: #f5f4ef
        // color: #aaa
        color: var(--theme-color)
        font-style: italic
        transition: all .2s ease
        &:hover
          background: var(--theme-translucent)
          color: var(--theme-color)
    .desc,
    .content-wrapper
      margin-bottom: 1em
    .desc >>> a
      color: var(--theme-color)
    .content
      padding-left: 0em
      line-height: 1.75em
      // padding: 14px 17px
      // background: rgba(241,185,8,.1)
      // border-radius: 3px
      span:after
        content: '：'
        color: var(--theme-color)
        font-weight: 600
      > li
        margin-bottom: .45em
        li >>> strong
          font-weight: 600
        ul
          li
            position: relative
            padding-left: 1.3em
            &:before
              content: '●'
              position: absolute
              left: 0px
              color: var(--theme-color)
              display: inline-block
              transform: scale(.8)
    .sub-title
      margin-bottom: .2em
      font-size: 15px
      font-weight: 600
    .techs
      margin-top: .4em
      .tech
        display: inline-block
        margin-right: 10px
        margin-bottom: 10px
        padding: .3em .65em
        border-radius: .85em
        line-height: 1em
        border: 1px solid var(--theme-color)
        color: var(--theme-color)
        font-size: 13px
  .showitem
    opacity: 1
    transform: translateY(0px) 
  @media screen and (max-width: 992px)
    .item
      width: 100%
      max-width: 100%
      padding: 50px 10vw
      margin: 0px
      .title
        text-align: center
      .pic
        display: block
        margin-top: 20px
        margin-bottom: 20px
        text-align: center
        img
          border-radius: 5px
          max-width:100%
          max-height: 300px
</style>
