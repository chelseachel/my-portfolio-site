<template>
  <div class="bg">
    <svg width="100%" height="100%" viewBox="0 0 600 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="80%" y2="110%" id="linearGradient-1">
          <stop stop-color="#B2DFDB" offset="0%"></stop>
          <stop stop-color="#C8E6C9" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path d="M307.683594,358.097656 C454.591337,358.097656 532,401.907743 532,255 C532,108.092257 460.251493,0.3515625 313.34375,0.3515625 C166.436007,0.3515625 0,108.092257 0,255 C0,401.907743 160.77585,358.097656 307.683594,358.097656 Z" id="blob" fill="url(#linearGradient-1)">
      </path>
    </svg>
  </div>
</template>

<script>
anime({
  targets: 'path',
  d: [
    {value: 'M173.308594,511.746094 C320.216337,511.746094 532,401.556181 532,254.648438 C532,107.740694 460.251493,0 313.34375,0 C166.436007,0 0,107.740694 0,254.648438 C0,401.556181 26.4008503,511.746094 173.308594,511.746094 Z'},
    {value: 'M298.208419,412.08091 C445.116162,412.08091 449,345.556181 449,198.648438 C449,51.7406941 445.116162,11.1443284 298.208419,11.1443284 C151.300676,11.1443284 0.335366775,-45.5463138 0.335366775,101.36143 C0.335366775,248.269173 151.300676,412.08091 298.208419,412.08091 Z'},
    {value: 'M173.308594,389.746094 C320.216337,389.746094 502.569783,279.556181 502.569783,132.648437 C502.569783,-14.2593059 412.907743,1.20970841 266,1.20970841 C119.092257,1.20970841 0,-14.2593059 0,132.648437 C0,279.556181 26.4008503,389.746094 173.308594,389.746094 Z'}
  ],
  easing: 'linear',
  duration: 20000,
  loop: true,
  direction: 'alternate'
})

export default {
  name: 'WelcomeBg',
}

</script>


<style lang="stylus" scoped>
  .bg
    position: absolute
    bottom: 50px
    left: 0
    right: 0
    margin: auto
    width: 150px
    height: 150px
    svg 
      position: absolute
      left: 0
      right: 0
      top: 30px
      bottom: 0
</style>
