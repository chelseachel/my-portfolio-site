<template>
  <div class="wrapper">
    <div class="content" ref="parallax">
      <div class="hello" ref="hello">
      </div>
      <div class="info" ref="info"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeInfoOld',
  components: {
  },
  data () {
    return {
      hello: 'Hello, I’m Chelsea',
      info: 'A front-end developer always with the artisan’s spirit. ',
      speed: .3
    }
  },
  computed: {
    letters: function () {
      return this.hello.split('')
    },
    infoLetters: function () {
      return this.info.split('')
    }
  },
  methods: {
    showhello () {
      this.letters.forEach(this.helloLandIn)
    },
    helloLandIn (letter, index) {
      let span = document.createElement('span')
      span.innerText = letter
      span.style.animationDelay = `${index * .04}s`
      this.$refs.hello.append(span)
    },
    showInfo () {
      this.infoLetters.forEach(this.infoLandIn)
    },
    infoLandIn (letter, index) {
      let span = document.createElement('span')
      span.innerText = letter
      span.style.animationDelay = `${1.4 + index * .02}s`
      this.$refs.info.append(span)
    },
    scrollParallax () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const yPosition = scrollTop * this.speed + 'px'
      this.$refs.parallax.setAttribute('style', `transform: translateY(-${yPosition})`)
    }
  },
  mounted () {
    this.showhello()
    this.showInfo()
    window.addEventListener('scroll', this.utils.throttle(this.scrollParallax), true)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.utils.throttle(this.scrollParallax), true)
  }
}
</script>


<style lang="stylus" scoped>
  .wrapper
    flex: 1
    display: flex
    justify-content: center
    align-items: center
    text-align: center 
    .content
      transition: all .5s ease-out
      .hello
        margin-bottom: 40px
        font-size: 5vw
        color: var(--theme-color)
        font-weight: 600
        span
          position: relative
          opacity: 0
          animation: landhello .6s ease-in
          animation-fill-mode: forwards
          @keyframes landhello
            0%
              opacity: 1
              top: -20px
            80%
              opacity: 1
              top: 0px
            90%
              opacity: 1
              top: 2px
            100%
              opacity: 1
              top: 0px
      .info
        font-size: 2vw
        font-weight: 200
        @media screen and (max-width: 992px)
          font-size: 20px
          font-weight: 400
        span
          position: relative
          opacity: 0
          animation: landinfo .3s ease-in
          animation-fill-mode: forwards
          @keyframes landinfo
            0%
              opacity: 1
              top: -5px
            100%
              opacity: 1
              top: 0px
    
</style>
