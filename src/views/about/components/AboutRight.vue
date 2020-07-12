<template>
  <div class="right">
    <article>
      <p>毕业于深圳大学广告系，<br>擅长排版与 PPT 交互动画，<br>对交互设计敏感，<br>且更愿意亲自实现出来，<br>完全自学进入前端领域。</p>纯自学前端技术，独立解决问题，有良好的空间思维能力与动手能力，深度细节控，注重美感。擅长PPT动画交互

<p></p>
<h4>Being a maker</h4>
<p>广告设计专业出身的我成为了一名手作人，<br>乐于把自己所想动手实现出来。<br>
<!-- 自己逐步完成一件作品让我感受到真实，亦从中感到踏实和满足。<br> -->
当每一件东西能自己亲手一点点做出来，我感受到真实，亦从中感到踏实和满足。<br>
</p>
<!-- <p>乐于把自己所想动手实现出来，我是这样一个人。<br></p> -->


<h4>Being a desigrammer</h4>
<p>开始自学前端，也是同样的原因。<br>
作为一个擅长理工科的人，比起纯粹的设计，我更偏好艺术与技术的结合。<br>
我喜欢美好的功能性设计，喜欢有趣而优雅的交互体验。
而能自己亲手用代码将它们实现出来，会更酷不是吗？<br>
于是曾在 <a href="https://codecademy.dev/" target="_blank">CodeCademy</a> 平台内自学了 HTML、CSS和Javascript，然而当时并没有发展成职业。</p>
<!-- 于是曾在 codeCademy.com 上自学了 HTML、CSS和Javascript，然而当时并没有发展成职业。</p> -->

<p>作为一个未完成的愿望，我决心继续践行它。<br>
  去年起，我将前端的点滴慢慢拾起，也逐渐拾获更多、更深的技能。<br>每当把心中所想用手指敲打出来，我总看到更广阔的可能性。</p>
<p>如你所见，我真正踏入了前端这条河流。</p>
<br>
<p>      <b>前端技能</b></p>
<p>拥有前端组件化开发思想，熟练使用 Vue 及 Vue 相关生态 <br>
熟练掌握 HTML5 / CSS3 / Javascript 前端基础技术<br>
了解常用 ES6 语法 <br>
能够使用 Webpack 实现简单的前端工程化<br>
熟悉响应式布局<br>
了解各大浏览器兼容性问题<br>
熟练使用 Git ，了解 Git Flow 工作流<br>
了解 RESTful API<br>
对 Web颜色混合模式 及 Opentype 的特性有一定认知</p><br>
<b>设计工具</b><br>
Axure RP<br>
Illustrator<br>
Photoshop<br><br>
      ————————————————————————————————<br>
           <b>我还会做什么</b><br>
           <b>我还擅长</b><br>
           排版<br>
           PPT 交互动画<br>
      皮具 / 木工 / 竹子自行车 / 烘焙 / 设计自行车工作室<br>

<br>      个人特质：<br>
      纯自学前端技术，独立解决问题，有良好的空间思维能力与动手能力，深度细节控，注重美感。<br>
      软实力：<br>
      好奇心与学习的愿望；学习能力；探索欲；<br>
      洞察力 同理心<br>
      逻辑思维 空间思维<br>
      喜欢并擅长做技、艺相结合的事情<br>
      敏感 细致 瞻前顾后<br>

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
        font-size: 15px
        // font-weight: 600
        margin-top: 30px
      p
        margin: 22px 0
        &:first-child
          margin-top: 0
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
      font-size: 13px
      .content
        padding: 10vw
</style>
