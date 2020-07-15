<template>
  <div class="right">
    <article>
      <p>我是 Chelsea ，<br>毕业于深圳大学广告系，擅长排版与 PPT 交互动画，完全自学进入前端领域。<br>你可以通过我的 <a href="https://codepen.io/chelseachel/pens/public" target="_blank">CodePen</a> 和 <a href="https://github.com/chelseachel/" target="_blank">Github</a> 了解我。</p>
      <!-- <p> -->
        <!-- <span class="iconfont icon-github"></span>
        <a href="https://github.com/chelseachel/">github.com/chelseachel/</a><br> -->
        
      <!-- </p> -->
      <!-- <p> -->
        <!-- <span class="iconfont icon-codepen"></span>
        <a href="https://codepen.io/chelseachel">codepen.io/chelseachel/</a> -->
      <!-- </p> -->
      <h4><span class="iconfont icon-light_on"></span>Being a maker</h4>
      <p>广告设计专业出身的我成为了一名手作人，<br>乐于把自己所想动手实现出来。<br>
        <!-- 自己逐步完成一件作品让我感受到真实，亦从中感到踏实和满足。<br> -->
        当每一件东西能自己亲手一点点做出来，我感受到真实，亦从中感到踏实和满足。<br>
      </p>
      <!-- <p>乐于把自己所想动手实现出来，我是这样一个人。<br></p> -->
      <h4><span class="iconfont icon-code"></span>Being a desigrammer</h4>
      <p>开始自学前端，也是同样的原因。<br>
        作为一个擅长理工科的人，比起纯粹的设计，我更偏好艺术与技术的结合。<br>
        我喜欢美好的功能性设计，喜欢有趣而优雅的交互体验。
        而能自己亲手用代码将它们实现出来，会更酷不是吗？<br>
        于是曾在 <a href="https://codecademy.dev/" target="_blank">codecademy</a> 自学了 HTML、CSS和Javascript，然而当时并没有发展成职业。</p>
      <!-- 于是曾在 codeCademy.com 上自学了 HTML、CSS和Javascript，然而当时并没有发展成职业。</p> -->
      <p>
        <!-- 作为一个未完成的愿望，我决心继续践行它。<br>
        去年起，我将前端的点滴慢慢拾起，也逐渐拾获更多、更深的技能。<br> -->
        如今我决心继续践行它，逐渐拾起前端的点滴，也不断拾获着更多、更深的技能。<br>每当把心中所想用手指敲打出来，我看到更广阔的可能性。<br>
        如你所见，我实实在在踏入了前端这条河流。
        <!-- 每当把心中所想用手指敲打出来，我看到河流上的波光在跃动。<br>
        我总看到更广阔的可能性。 -->
      </p>
      <!-- <p>如你所见，我实实在在踏入了前端这条河流。</p> -->
      
      
      <!-- <h4>我目前拥有的技能</h4> -->
      <h4>我目前的技能</h4>
      <p>
        <ul>
          <li>熟悉 HTML5 / CSS3 / Javascript ，熟悉 ES6 的常用语法</li>
          <li>熟悉 Vue / Veux / Vue-router 的使用，拥有前端组件化开发思想</li>
          <li>了解 Webpack 模块打包工具</li>
          <li>熟悉响应式布局</li>
          <li>熟练使用 Git</li>
          <li>熟悉基本的 linux 命令</li>
          <li>了解 RESTful API</li>
          <li>了解各大浏览器兼容性问题</li>
          <li>对 Web颜色混合模式 及 Opentype 的特性有一定认知</li>
        </ul>
      </p>
      <h4>设计工具</h4>
      <p>
        Axure RP
        Illustrator<br>
        Photoshop<br>
      </p>
      

    </article>
  </div>
</template>

<script>

export default {
  name: 'AboutRight',
  components: {
  },
  methods: {
    
  },
  mounted () {
    
  }
}
</script>


<style lang="stylus" scoped>
  .right
    position: relative
    left: 45%
    width: 55%
    article
      width: 100%
      padding: 190px
      box-sizing: border-box
      font-size: 15px
      line-height: 1.75em
      h4
        position: relative
        font-size: 15px
        // font-weight: 600
        // margin: 40px 0
        margin-top: 3.6em
        // margin-bottom: 30px
        // &:before
        //   content: ''
        //   display: block
        //   float: left
        //   width: 3px
        //   height: .85em
        //   margin-top: .45em
        //   margin-right: .5em
        //   background: var(--theme-color)
        //   border-radius: 1px
      p
        margin: 1em 0
        &:first-child
          margin-top: 0
      li
        // text-indent: 2em
        &:before
          content: ''
          float: left
          width: .6em
          height: .6em
          border-radius: 50%
          margin-top: .6em
          margin-right: .6em
          background: var(--theme-color)
      // .dot
      //   // display: block
      //   float: left
      //   width: .6em
      //   height: .6em
      //   margin-top: .6em
      //   margin-right: .6em
      //   background: var(--theme-color)
      //   border-radius: 50%
      a
        // background: var(--theme-translucent)
        font-size: 15px
        color: var(--theme-color)
        font-weight: 600
      .iconfont
        position: absolute
        left: -1.5em
        margin-right: .4em
        font-size: 17px
        color: var(--theme-color)
      @media screen and (max-width: 1920px)
        padding: 145px
      @media screen and (max-width: 1440px)
        padding: 120px
      @media screen and (max-width: 1024px)
        padding: 80px
  @media screen and (max-width: 768px)
    .right
      left: 0
      width: 100%
      article
        padding: 8vw
        padding-top: 100px
        // h4
          // text-align: center
        .iconfont
          position: relative
          left: 0
</style>
