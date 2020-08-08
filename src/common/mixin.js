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

export let checkInView = {
  data () {
    return {
      inView: false,
      el: null
    }
  },
  methods: {
    checkInView () {
      if (this.utils.isElementInView(this.el)) {
        this.inView = true
      } else {
        this.inView = false
      }
    }
  },
  mounted () {
    this.el = this.$refs.viewCheck // 使用时需在元素上绑定 ref="viewCheck"
    this.checkInView()
    window.addEventListener('scroll', this.utils.throttle(this.checkInView), true)
    window.addEventListener('resize', this.utils.throttle(this.checkInView), true)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.utils.throttle(this.checkInView), true)
    window.removeEventListener('resize', this.utils.throttle(this.checkInView), true)
  }
}
