<template>
  <div class="wrapper">
    <article>
      <p>我是 Chelsea，坐标北京，是一名前端开发者。</p>
      <p>我毕业于深圳大学广告系，完全自学进入前端领域，在此之前，我是一名手作人。我喜欢用代码编写令人愉悦的交互体验。<!-- 擅长排版与 PPT 交互动画， --><br></p><p>你可以通过我的 <a href="https://codepen.io/chelseachel" target="_blank">CodePen</a> 和 <a href="https://github.com/chelseachel/" target="_blank">Github</a> 了解我。</p>
      <!-- <p> -->
      <!-- <span class="iconfont icon-github"></span>
        <a href="https://github.com/chelseachel/">github.com/chelseachel/</a><br> -->
      <!-- </p> -->
      <!-- <p> -->
      <!-- <span class="iconfont icon-codepen"></span>
        <a href="https://codepen.io/chelseachel">codepen.io/chelseachel/</a> -->
      <!-- </p> -->
      <p class="subtitle"><span class="iconfont icon-light_on"></span>Being a maker</p>
      <p>广告设计专业出身的我成为了一名手作人，<br>乐于把自己所想动手实现出来。<br>
        <!-- 自己逐步完成一件作品让我感受到真实，亦从中感到踏实和满足。<br> -->
        当每一件东西能自己亲手一点点做出来，我感受到真实，亦从中感到踏实和满足。<br>
      </p>
      <!-- <p>乐于把自己所想动手实现出来，我是这样一个人。<br></p> -->
      <p class="subtitle"><span class="iconfont icon-code"></span>Being a desigrammer</p>
      <p>
        开始自学前端，也是同样的原因。
      </p>
      <p>
        作为一个擅长理工科的人，比起纯粹的设计，我更偏好艺术与技术的结合。<br>
      </p>
      <p>
        我喜欢美好的功能性设计，喜欢有趣而优雅的交互体验，本身就擅长交互动画制作。
        而能自己亲手用代码将心中所想实现出来，会更酷不是吗？
        本着这样的初心，我曾在 codecademy 自学了 HTML、CSS 和 Javascript，然而当时并没有发展成职业，算是一个未尽的愿望。
      </p>
      <p>
        后来我开始继续践行它，逐渐拾起曾经掌握的技能。在巩固编程基础的同时，也在实践中持续地拾获着更广、更深的前端技术。
      </p>
      <p>就如同亲手制成一件作品一般，Coding 的过程也是在锻造一件作品，产生的是理性的光辉。这过程越有挑战性，就能带来越大的愉悦，完成时也越有成就感，伴随而来的还有打怪能力的升级。这一年我对此感受深刻。
      </p>
      <p>
        <!-- 作为一个未完成的愿望，我决心继续践行它。<br>
        去年起，我将前端的点滴慢慢拾起，也逐渐拾获更多、更深的技能。<br> -->
        我总是习惯于把事情完成到极致，而很显然，这需要技术能力来作支撑。你能做到什么样——势必建立在你的技术基础之上。
        那么，保持实践、探索、沉淀，前方有无限的可能性。
      </p>
      <h2>My Skills</h2>
      <h3>前端技能</h3>
      <div class="skills">
        <common-skill-level v-for="(item) in skills" :key="item.name" :item="item"></common-skill-level>
      </div>
      <ul class="skill-list">
        <li><span class="decimal">1.</span>能灵活运用 <span class="emph">HTML5 / CSS3</span> 进行语义化开发，熟悉响应式布局，有移动端与 PC 端的开发适配经验，能像素级还原设计稿</li>
        <li><span class="decimal">2.</span>熟悉 <span class="emph">Javascript / ES6</span> 语法，熟悉 <span class="emph">Web API</span></li>
        <li><span class="decimal">3.</span>能熟练使用 <span class="emph">Vue / Veux / Vue-router</span> 开发项目 ，具有组件化开发思维，对 React 有基本的了解</li>
        <li><span class="decimal">4.</span>了解 <span class="emph">Webpack</span> 的基本配置，有相关的实践经验</li>
        <li><span class="decimal">5.</span>了解 <span class="emph">Ajax</span> 请求，能够使用 mock.js 等工具进行接口数据模拟</li>
        <span class="ellipsis">……</span>
       
      </ul>
      <h3>设计技能</h3>
      <ul class="skill-list">
        <li>Axure RP</li>
        <li>Illustrator</li>
        <li>Photoshop</li>
      </ul>
      <h3>软实力</h3>
      <!-- <p>14年毕业于深圳大学广告系，<br>擅长排版与 PPT 交互动画，<br>完全自学进入前端领域，<br>对自己喜欢的东西永远愿意亲手实现出来<br>对交互设计敏感</p> -->
      <!-- 独立解决问题，有良好的空间思维能力与动手能力，深度细节控，注重美感。<br> -->
      <!-- <br> 个人特质：<br>
      独立解决问题，擅长空间思维，注重细节，思维严谨，具有好奇心与探索欲。<br> -->
      <!-- 软实力：<br> -->
      <ul class="skill-list">
        <li>具有独立解决问题的能力</li>
        <!-- <li>洞察力 同理心</li> -->
        <li>对自己高要求，不只是实现功能，更追求简洁、优雅的代码</li>
        <!-- <li>持续积累</li> -->
        <li>深度细节控，注重美感</li>
        <li>有良好的空间思维能力与动手能力，实践出真知</li>
        <li>永远充满好奇心与探索欲</li>
        <!-- <li>喜欢并擅长做技、艺相结合的事情</li> -->
        <!-- <li>独立解决问题，有良好的空间思维能力与动手能力，深度细节控，注重美感。</li> -->
      </ul>
      <!-- <h3>我的关键词</h3>
      独立解决问题 空间思维 细节控 探索欲 洞察力 -->
      <h3>业余其他</h3>
      <div class="feature">
        <div class="tag"><span class="iconfont icon-briefcase"></span>手工皮具</div>
        <div class="tag"><span class="iconfont icon-mugong"></span>木工</div>
        <div class="tag"><span class="iconfont icon-bike"></span>竹子自行车</div>
        <div class="tag"><span class="iconfont icon-gesture"></span>Macrame</div>
      </div>
    </article>
  </div>
</template>

<script>
import CommonSkillLevel from '../../common/CommonSkillLevel'
export default {
  name: 'AboutRight',
  components: {
    CommonSkillLevel
  },
  data () {
    return {
      skills: [{
        name: 'HTML',
        level: 8
      },{
        name: 'CSS',
        level: 9
      },{
        name: 'Javascript',
        level: 8
      },{
        name: 'Vue',
        level: 8
      },{
        name: 'React',
        level: 6
      },{
        name: 'Webpack',
        level: 6
      }]
    }
  },
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  article
    width: 100%
    padding: 190px
    box-sizing: border-box
    font-size: 15px
    line-height: 1.75em
    h2
      font-size: 1.4em
      margin-top: 4em
      padding-top: 2em
      border-top: 1px solid var(--theme-translucent)
    h3
      font-size: 16px
      margin-top: 3.6em
      margin-bottom: .8em
    p
      margin-bottom: 1em
    .subtitle
      position: relative
      font-size: 15px
      font-weight: bold
      margin-top: 3.6em
      .iconfont
        position: absolute
        left: -1.5em
        margin-right: .4em
        font-size: 20px
        font-weight: 400
        color: var(--theme-color) 
    .skills
      max-width: 600px 
      padding: .4em 0
      margin-bottom: 1.4em
      display: flex
      justify-content: center
      align-items: center
      flex-wrap: wrap 
    ul
      margin-bottom: 1em
      line-height: 1.75em
      li
        margin-bottom: .45em
        position: relative
        padding-left: 1.3em
        &:before
          content: '●'
          position: absolute
          left: 0px
          color: var(--theme-color)
          display: inline-block
          transform: scale(.8)
      .iconfont
        display: none
        float: left
        margin-right: .4em
        font-size: 14px
        color: var(--theme-color)
        // transform: rotate(90deg)
      .ellipsis
        margin-left: 1.4em     
      .decimal
        // margin-right: .2em
        color: var(--theme-color)
        font-weight: 600
        display: none
      .emph
        font-weight: 600
        // background: var(--theme-translucent)
    .feature
      margin-top: 18px
      .tag
        display: inline-block
        margin-right: 10px
        margin-bottom: 14px
        padding: 4px 11px 4px
        border: 1px solid var(--theme-translucent)
        // box-sizing: border-box
        border-radius: 6px
        // background-color: rgba(241,185,8,.1)
        font-size: 14px
        color: var(--theme-color)
        .iconfont
          float: left
          margin-right: 5px
          font-size: 16px
          font-weight: 400
    strong
      font-weight: 600
    a
      color: var(--theme-color)
      font-weight: 600
      // font-style: italic
      text-decoration: underline
    @media screen and (max-width: 1920px)
      padding: 145px
    @media screen and (max-width: 1440px)
      padding: 120px
    @media screen and (max-width: 1100px)
      padding: 90px
  @media screen and (max-width: 992px)
    article
      padding: 10vw
      padding-bottom: 50px
      .subtitle > .iconfont
        position: relative
        left: 0
</style>
