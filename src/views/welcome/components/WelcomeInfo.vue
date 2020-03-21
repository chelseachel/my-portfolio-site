<template>
  <div class="wrapper">
    <div class="content" ref="parallax">
      <div class="title" ref="title">
      </div>
      <div class="info" ref="info"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeInfo',
  components: {
  },
  data () {
    return {
      title: 'Hello, I’m Chelsea',
      info: 'A front-end developer always with an artisan’s heart. ',
      speed: .2
    }
  },
  computed: {
    letters: function () {
      return this.title.split('')
    },
    infoLetters: function () {
      return this.info.split('')
    }
  },
  methods: {
    showTitle () {
      this.letters.forEach(this.titleLandIn)
    },
    titleLandIn (letter, index) {
      let span = document.createElement('span')
      span.innerText = letter
      span.style.animationDelay = `${index * .04}s`
      this.$refs.title.append(span)
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
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const yPosition = scrollTop * this.speed + 'px'
      this.$refs.parallax.setAttribute('style', `transform: translateY(-${yPosition})`)
    }
  },
  mounted () {
    this.showTitle()
    this.showInfo()
    window.addEventListener('scroll', this.scrollParallax, true)
  },
}
</script>


<style lang="stylus">
  .wrapper
    flex: 1
    display: flex
    justify-content: center
    align-items: center
    text-align: center 
    .content
      margin-bottom: 100px
      // font-weight: 500
      transition: all 1s ease-out
      .title
        margin-bottom: 40px
        font-size: 56px
        color: #F1B908
        font-weight: 800
        span
          position: relative
          opacity: 0
          animation: landtitle .6s ease-in
          animation-fill-mode: forwards
          @keyframes landtitle
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
        font-size: 18px
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
