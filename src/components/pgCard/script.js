export default {
  name: 'pgCard',
  props: {
    mainTitle: {
      type: String
    },
    double: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array
    }
  }
}
