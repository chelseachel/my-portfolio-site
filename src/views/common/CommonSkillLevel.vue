<template>
  <div class="skill-level">
    <span class="item">{{item.name}}</span>
    <span 
      v-for="n in 5" :key="n" 
      class="dot" 
      :class="{filled: n <= filledNum, 'half': lastHalf && n === filledNum}"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'CommonSkillLevel',
  props: {
    item: Object
  },
  data () {
    return {
    }
  },
  computed: {
    filledNum () {
        return Math.ceil(this.item.level / 2)
    },
    lastHalf () {
      return this.item.level % 2 === 1 ? true : false
    }
  }
}
</script>


<style lang="stylus" scoped>
.skill-level
  flex: 1 0 auto
  line-height: 2.2em
  font-size: 15px
  min-width: 230px
  font-weight: 600
  overflow: visible
  span
    display: inline-block
    vertical-align: middle
  .item
    width: 90px
  .dot
    position: relative
    width: .8em
    height: .8em
    margin: 0 .14em
    background: var(--theme-translucent)
    border-radius: 50%
  .filled:before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: .8em
    height: .8em
    background: var(--theme-color)
    border-radius: 50%
  .half:before
    clip: rect(0, .4em, 1em, 0)
</style>
