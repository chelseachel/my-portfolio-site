export let scrollParallax = {
  data () {
    return {
      scrollTop: 0,
      speed: 0, // 使用时需要在组件内定义自己的 speed
    }
  },
  computed: {
    yPos() {
      return this.scrollTop * this.speed
    },
    parallaxStyle() { // 使用时需要在组件上绑定 parallaxStyle
      return {transform: `translateY(-${this.yPos}px)`}
    }
  },
  methods: {
    getScrollTop() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }
  },
  mounted () {
    window.addEventListener('scroll', this.utils.throttle(this.getScrollTop), true)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.utils.throttle(this.getScrollTop), true)
  }
}
