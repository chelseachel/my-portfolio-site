
export default {
  isElementInView(el) {
    var rect = el.getBoundingClientRect()
    return (
      rect.top < (document.body.clientHeight - 50)
      // rect.top >= 0 &&
      // rect.left >= 0 &&
      // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  },

  throttle(fn, delay = 16) {
    let timer = null
    return function () {
      if (timer) {
        return
      }
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, delay)
    }
  }
}

