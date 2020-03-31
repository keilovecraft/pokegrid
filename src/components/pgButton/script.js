export default {
  name: 'pgButton',
  methods: {
    clicked (event) {
      this.$emit('clicked', event)
    }
  }
}
