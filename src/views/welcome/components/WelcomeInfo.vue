<template>
  <div class="content" ref="parallax">
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
export default {
  name: 'WelcomeInfo',
  components: {
  },
  data () {
    return {
      hello: 'Hello, I\'m&nbsp;',
      words: [
        'Chelsea.',
        'a coder.',
        'a designer.',
        'a craftsman.'
      ],
      currentWordIndex: 3,
      speed: .3,
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
      const length = this.words.length
      this.currentWordIndex = this.currentWordIndex === length - 1 ? 0 : this.currentWordIndex + 1
    },
    scrollParallax () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const yPosition = scrollTop * this.speed + 'px'
      this.$refs.parallax.setAttribute('style', `transform: translateY(-${yPosition})`)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollParallax, true)
    this.changeWord()
    this.timer = setInterval(this.changeWord, 3000)
    
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>


<style lang="stylus" scoped>
  .content
    width: 52vw
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -23vw
    margin-top: -4.5vw
    font-size: 5vw
    font-weight: 600
    @media screen and (max-width: 768px)
      width: 75vw
      margin-left: -32vw
      margin-top: -7vw
      font-size: 7vw
    p
      display: inline-block
      vertical-align: top
      white-space: nowrap
    .word
      position: absolute
      color: #F1B908
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
