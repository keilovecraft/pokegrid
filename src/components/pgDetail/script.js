import pgButton from '@/components/pgButton'
import pgCard from '@/components/pgCard'
import { mapGetters } from 'vuex'

export default {
  name: 'pgList',
  components: { pgButton, pgCard },
  props: {
    id: Number
  },
  data () {
    return {
      pokemon: {}
    }
  },

  methods: {
    getDetail () {
      this.pokemon = this.pokemons.find(pokemon => pokemon.order === this.id)
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapGetters({
      pokemons: 'pokemons'
    })
  },
  mounted () {
    this.getDetail()
  }
}
