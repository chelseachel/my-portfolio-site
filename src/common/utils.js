
export default {
  isElementInView(el) {
    var rect = el.getBoundingClientRect()
    return (
      rect.top < (document.body.clientHeight)
      // rect.top >= 0 &&
      // rect.left >= 0 &&
      // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }
}