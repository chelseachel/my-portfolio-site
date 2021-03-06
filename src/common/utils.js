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
    return function() {
      if (timer) {
        return
      }
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, delay)
    }
  },
  isMobile() {
    const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    return flag
  },
  isIE() { 
    if (!!window.ActiveXObject || "ActiveXObject" in window)
    return true; // IE11 返回 true
    else
    return false; // Edge 返回 false
  },
  reloadImg(url) {
    const img = event.target
    img.src = url + '?' + Math.random()
    img.onerror = this.reloadImg(img.src)
    console.log('reload');
  }
}
