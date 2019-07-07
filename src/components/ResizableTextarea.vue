<script>
  export default {
    name: 'ResizableTextarea',
    mounted () {
      this.$nextTick(() => {
        this.$el.setAttribute('style', `height: ${this.$el.scrollHeight}px; overflow-y: hidden;`)
      })
      this.$el.addEventListener('input', this.resize)
    },
    beforeDestroy () {
      this.$el.removeEventListener('input', this.resize)
    },
    methods: {
      resize (event) {
        event.target.style.height = 'auto'
        event.target.style.height = event.target.scrollHeight + 'px'
      }
    },
    render (h) {
      return this.$scopedSlots.default()[0]
    }
  }
</script>
