<template>
  <div class="content" :style="parallaxStyle" @click="changeWord">
    <p class="hello" v-html="hello"></p>

    <p class="word" 
      v-for="(item, index) in splitWords" :key="item + index"
      ref="word"
      :class="{in: index === currentWordIndex, 
                out: index === outWordIndex,
                before: index === behindWordIndex}"
    >
      <span class="letter"
        v-for="(letter, index) in item" :key="index"
        v-html="letter.replace(' ', '&nbsp;')"
        :style="{'--out-delay': `${index * 80}ms`,
                  '--in-delay': `${340 + index * 80}ms`}"
      >
      </span>
    </p>

  </div>
</template>

<script>
import { scrollParallax } from '@/common/mixin.js'
export default {
  name: 'WelcomeInfo',
  mixins: [scrollParallax],
  components: {
  },
  data () {
    return {
      speed: .3,
      hello: 'Hello, I\'m&nbsp;',
      words: [
        'Chelsea.',
        'a developer.',
        'a designer.',
        'a craftsman.'
      ],
      currentWordIndex: 3,
      timer: null
    }
  },
  computed: {
    splitWords: function () {
      const splitWords = []
      this.words.forEach(function (item) {
        const splitWord = item.split('')
        splitWords.push(splitWord)
      })
      return splitWords
    },
    outWordIndex: function () {
      const length = this.words.length
      return this.currentWordIndex === 0 ? length - 1 : this.currentWordIndex - 1
    },
    behindWordIndex: function () {
      const length = this.words.length
      return this.currentWordIndex === length - 1 ? 0 : this.currentWordIndex + 1
    }
  },
  methods: {
    changeWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      const length = this.words.length
      this.currentWordIndex = this.currentWordIndex === length - 1 ? 0 : this.currentWordIndex + 1
      this.timer = setTimeout(this.changeWord, 3000)
    }
  },
  mounted () {
    this.changeWord()
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>


<style lang="stylus" scoped>
  .content
    width: 54vw
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -24vw
    margin-top: -4.5vw
    font-size: 5vw
    font-weight: 600
    cursor: pointer
    @media screen and (max-width: 992px)
      width: 86vw
      margin-left: -38vw
      margin-top: -10vh
      font-size: 7.5vw
    @media screen and (min-width: 1600px)
      font-size: 80px
      width: 866px
      margin-left: -380px
      margin-top: -72px
    p
      display: inline-block
      vertical-align: top
      white-space: nowrap
    .word
      position: absolute
      color: var(--theme-color)
      .letter
        display: inline-block
        transform: translateZ(25px)
        transform: rotateX(-90deg)
        transform-origin: 50% 50% 25px
    .behind
      .letter
        transform: rotateX(-90deg)
    .in
      .letter
        transform: rotateX(0deg)
        transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275)
        transition-delay: var(--in-delay)
    .out
      .letter
        transform: rotateX(90deg)
        transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19)
        transition-delay: var(--out-delay)
</style>
