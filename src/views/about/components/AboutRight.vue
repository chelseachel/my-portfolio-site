<template>
  <div class="right">
    <div class="content">
      <b>技能清单</b><br>
拥有前端组件化开发思想，熟练使用 Vue 及 Vue 相关生态 <br>
熟练掌握 HTML5 / CSS3 / Javascript 前端基础技术<br>
了解常用 ES6 语法 <br>
能够使用 Webpack 实现简单的前端工程化<br>
熟悉响应式布局<br>
了解各大浏览器兼容性问题<br>
熟练使用 Git ，了解 Git Flow 工作流<br>
了解 RESTful API<br>
对 Web颜色混合模式 及 Opentype 的特性有一定认知<br><br>
<b>设计工具</b><br>
Axure AI PS<br><br>
      <b>关于我</b><br><br>
      毕业前夕开始从事阿里创作平台自媒体，同时有持续的手作品产出。<br>
      内心深处想成为一个Desigrammer，开始纯自学前端，即便没有年龄优势，仍决心将它实现。<br>
      Being a maker，乐于把自己所想动手实现出来，自己逐步完成一件作品让我感受到真实。<br>

<br> 
      <b>我是如何踏入前端这条河流的</b><br>
      <br>
      大学的专业，与设计及创意有关。<br>
      而作为一个擅长理工科的人，比起纯粹的设计，我更偏好艺术与技术的结合。<br>
      当时的自己，很擅长拥有hack特性的PPT动画交互。<br>
      会动的、交互体验好的设计总是吸引人的，而能自己亲手用代码将其实现出来，才更酷不是吗？<br>
      于是那时我在CodeCademy.com上自學了HTML、CSS和Javascript。<br>
      这是几年前埋下的种子。<br>
      <br>
      <b>继续前端之旅</b><br>
      作为一个未完成的愿望，我想要继续践行它，于是近一年开始把前端的点滴慢慢拾起，也逐渐拾获越来越多的技能。<br>

<br>      ————————————————————————————————<br>
           我还会做什么？<br>
      皮具 / 木工 / 竹子自行车 / 烘焙 / 设计自行车工作室<br>

<br>      个人特质：<br>
      纯自学前端技术，独立解决问题，有良好的空间思维能力与动手能力，深度细节控，注重美感。<br>
      软实力：<br>
      好奇心与学习的愿望；学习能力；探索欲；<br>
      洞察力 同理心<br>
      逻辑思维 空间思维<br>
      喜欢并擅长做技、艺相结合的事情<br>
      敏感 细致 瞻前顾后<br>

    </div>
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
    font-size: 15px
    .content
      width: 100%
      padding: 190px
      box-sizing: border-box
      line-height: 1.8em
      text-align: justify
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
