<template>
  <div class="right">
    <article>
      <p>我是 Chelsea ，<br>毕业于深圳大学广告系，擅长排版与 PPT 交互动画，完全自学进入前端领域。<br>你可以通过我的 <a href="https://codepen.io/chelseachel" target="_blank">CodePen</a> 和 <a href="https://github.com/chelseachel/" target="_blank">Github</a> 了解我。</p>
      <!-- <p> -->
      <!-- <span class="iconfont icon-github"></span>
        <a href="https://github.com/chelseachel/">github.com/chelseachel/</a><br> -->
      <!-- </p> -->
      <!-- <p> -->
      <!-- <span class="iconfont icon-codepen"></span>
        <a href="https://codepen.io/chelseachel">codepen.io/chelseachel/</a> -->
      <!-- </p> -->
      <h3><span class="iconfont icon-light_on"></span>Being a maker</h3>
      <p>广告设计专业出身的我成为了一名手作人，<br>乐于把自己所想动手实现出来。<br>
        <!-- 自己逐步完成一件作品让我感受到真实，亦从中感到踏实和满足。<br> -->
        当每一件东西能自己亲手一点点做出来，我感受到真实，亦从中感到踏实和满足。<br>
      </p>
      <!-- <p>乐于把自己所想动手实现出来，我是这样一个人。<br></p> -->
      <h3><span class="iconfont icon-code"></span>Being a desigrammer</h3>
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
      </p>
      <h2>
        <!-- <span class="iconfont icon-code"></span> -->My Skills</h2>
      <h3>前端技能</h3>
      <div class="skills">
        <common-skill-level v-for="(item) in skills" :key="item.name" :item="item"></common-skill-level>
      </div>
      <h3>我目前的技能</h3>
      <h3>设计技能</h3>
      <ul>
        <li><span class="iconfont icon-tag"></span>Axure RP</li>
        <li><span class="iconfont icon-tag"></span>Illustrator</li>
        <li><span class="iconfont icon-tag"></span>Photoshop</li>
      </ul>
      <!-- <h3>其他一些信息</h3> -->
      <h3>软实力</h3>
      <!-- <p>14年毕业于深圳大学广告系，<br>擅长排版与 PPT 交互动画，<br>完全自学进入前端领域，<br>对自己喜欢的东西永远愿意亲手实现出来<br>对交互设计敏感</p> -->
      <!-- 独立解决问题，有良好的空间思维能力与动手能力，深度细节控，注重美感。<br> -->
      <!-- <br> 个人特质：<br>
      独立解决问题，擅长空间思维，注重细节，思维严谨，具有好奇心与探索欲。<br> -->
      <!-- 软实力：<br> -->
      <ul>
        <li><span class="iconfont icon-tag"></span>独立解决问题</li>
        <!-- <li><span class="iconfont icon-tag"></span>洞察力 同理心</li> -->
        <li><span class="iconfont icon-tag"></span>擅长空间思维</li>
        <li><span class="iconfont icon-tag"></span>深度细节控，注重美感</li>
        <li><span class="iconfont icon-tag"></span>永远充满好奇心与探索欲</li>
        <li><span class="iconfont icon-tag"></span>喜欢并擅长做技、艺相结合的事情</li>
        <!-- <li><span class="iconfont icon-tag"></span>独立解决问题，有良好的空间思维能力与动手能力，深度细节控，注重美感。</li> -->
      </ul>
      <!-- <h3>我的关键词</h3>
      独立解决问题 空间思维 细节控 探索欲 洞察力 -->
      <h3>业余其他</h3>
      <ul class="myfeature">
        <li><span class="iconfont icon-briefcase"></span>手工皮具</li>
        <!-- <li><span class="iconfont icon-tag"></span>洞察力 同理心</li> -->
        <li><span class="iconfont icon-mugong"></span>木工</li>
        <li><span class="iconfont icon-bike"></span>竹子自行车</li>
        <li><span class="iconfont icon-gesture"></span>Macrame</li>
      </ul>
      <!-- <p>
        <span class="imake">皮具</span>
        <span class="imake">木工</span>
        <span class="imake">竹子自行车</span>
        <span class="imake">烘焙</span>
        <span class="imake">设计自行车工作室</span>
      </p> -->
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
        level: 9
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
        name: 'Webpack',
        level: 6
      },{
        name: 'React',
        level: 4
      }]
    }
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
      h2
        font-size: 1.4em
        margin-top: 4em
        padding-top: 2em
        border-top: 1px solid var(--theme-translucent)
      h3
        position: relative
        font-size: 15px
        margin-top: 3.6em
        margin-bottom: .8em
        .iconfont
          position: absolute
          left: -1.5em
          margin-right: .4em
          font-size: 17px
          color: var(--theme-color) 
      p
        margin: 1em 0
        &:first-child
          margin-top: 0
      li
        line-height: 2.2em
        .icon-tag
          float: left
          margin-right: .4em
          font-size: 14px
          color: var(--theme-color)
          // transform: rotate(90deg) 
      .myfeature
        color: var(--theme-color)
        // font-weight: 600
        .iconfont
          // float: left
          margin-right: .4em
          font-size: 20px
          // font-weight: 400
          color: var(--theme-color)
      a
        font-size: 15px
        color: var(--theme-color)
        font-weight: 600
      .skills
        max-width: 600px 
        padding: .4em 0
        display: flex
        justify-content: center
        align-items: center
        flex-wrap: wrap              
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
        .iconfont
          position: relative
          left: 0
</style>
